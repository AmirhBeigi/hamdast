import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import config from "next/config";
import NextCors from "nextjs-cors";
import { pb } from "../../../../../pocketbase";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await pb.admins.authWithPassword(
    publicRuntimeConfig.POCKETBASE_USER_NAME,
    publicRuntimeConfig.POCKETBASE_PASSWORD
  );
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: new RegExp(".paziresh24."),
    preflightContinue: true,
    optionsSuccessStatus: 200,
    credentials: true,
  });
  const cookieStore = req.cookies;
  const token =
    (cookieStore["token"] as string) ||
    req.headers.authorization?.replace("Bearer", "");
  let user: any;
  try {
    const paziresh24User = await axios.get(
      "https://apigw.paziresh24.com/v1/auth/me",
      {
        headers: {
          Authorization: `Bearer ${token?.trim()}`,
        },
      }
    );
    user = paziresh24User.data?.users[0];
  } catch (error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  const record = await pb
    .collection("users")
    .getFirstListItem(`paziresh24_user_id="${user.id}"`, {
      expand: "role",
    });

  if (!record) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  if (req.method === "GET") {
    try {
      const centers = await axios.get(
        "https://api.paziresh24.com/V1/doctor/centers",
        {
          headers: {
            Authorization: `Bearer${token}`,
          },
        }
      );

      const provider = await axios.get(
        "https://apigw.paziresh24.com/v1/providers",
        {
          params: {
            user_id: user?.id,
          },
        }
      );

      const nationalCode = user?.national_code;
      const findUser = await axios.post(
        "https://panel.paziresh24.com/booking/provider/e5d0fa25-a8e1-40db-a957-97aa0af1c0ee/fetchProviderByNationalCode",
        `code=${nationalCode}`,
        {
          params: {
            certificate: publicRuntimeConfig?.PANEL_TOKEN,
          },
        }
      );
      const userId = JSON.parse(JSON.stringify(findUser?.data))?.user?.id;
      const userCenters = await axios.post(
        "https://panel.paziresh24.com/booking/provider/e5d0fa25-a8e1-40db-a957-97aa0af1c0ee/getDoctorDataForExcel",
        `filter=`,
        {
          params: {
            certificate: publicRuntimeConfig?.PANEL_TOKEN,
          },
        }
      );

      const doctor: any = Object.values(userCenters?.data?.userDoctor)?.find(
        (item: any) => item?.user_id == userId
      );

      return res.status(200).json({
        enabled: centers?.data?.data?.some(
          (item: any) => item.id === "e5d0fa25-a8e1-40db-a957-97aa0af1c0ee"
        ),
        profile_url: provider?.data?.providers?.[0]?.slug
          ? `https://www.paziresh24.com/dr/${provider?.data?.providers?.[0]?.slug}`
          : null,
        slug: provider?.data?.providers?.[0]?.slug,
        created_at: doctor?.last_update ?? null,
      });
    } catch (error) {
      return res.status(200).json({
        enabled: false,
        profile_url: null,
        created_at: null,
      });
    }
  }

  if (req.method === "PATCH") {
    const nationalCode = user?.national_code;
    const cell = user?.cell?.startsWith("0") ? user?.cell : `0${user?.cell}`;
    const findUser = await axios.post(
      "https://panel.paziresh24.com/booking/provider/e5d0fa25-a8e1-40db-a957-97aa0af1c0ee/fetchProviderByNationalCode",
      `code=${nationalCode}`,
      {
        params: {
          certificate: publicRuntimeConfig?.PANEL_TOKEN,
        },
      }
    );
    const userId = findUser?.data?.find
      ? JSON.parse(JSON.stringify(findUser?.data))?.user?.id
      : "";
    const firstName = findUser?.data?.find
      ? JSON.parse(JSON.stringify(findUser?.data))?.user?.name
      : user?.name;
    const lastName = findUser?.data?.find
      ? JSON.parse(JSON.stringify(findUser?.data))?.user?.family
      : user?.family;
    const gender = findUser?.data?.find
      ? JSON.parse(JSON.stringify(findUser?.data))?.user?.gender
      : user?.gender === "male"
      ? 1
      : 2;

    const medicalCode = `h_${record?.id.slice(0, 8)}`;

    const add = await axios.post(
      "https://panel.paziresh24.com/booking/provider/e5d0fa25-a8e1-40db-a957-97aa0af1c0ee/add",
      `id=&user_id=${userId}&health_provider_id=&user_center_id=&center_id=e5d0fa25-a8e1-40db-a957-97aa0af1c0ee&profile_img=&need_confirm=&file=&national_code=${nationalCode}&gender=${gender}&name=${firstName}&family=${lastName}&username=${nationalCode}&cell=${cell}&whatsapp_cell=&email=&roles=&connection_code=&priority=&desk=&expertise_degree=14&expertise_list=325&bank_id=&is_dynamic_priority=&check_box_doctor_info=on&allow_payment=&expertises[0][expertise_id]=325&expertises[0][degree_id]=14&medical_code=${medicalCode}`,
      {
        params: {
          certificate: publicRuntimeConfig?.PANEL_TOKEN,
        },
      }
    );

    const userCenters = await axios.post(
      "https://panel.paziresh24.com/booking/provider/e5d0fa25-a8e1-40db-a957-97aa0af1c0ee/getDoctorDataForExcel",
      `filter=`,
      {
        params: {
          certificate: publicRuntimeConfig?.PANEL_TOKEN,
        },
      }
    );

    const doctor: any = Object.values(userCenters?.data?.userDoctor)?.find(
      (item: any) => item?.user_national_code == nationalCode
    );

    const service = await axios.post(
      `https://panel.paziresh24.com/booking/provider-service/add/${doctor?.id}`,
      `id=&user_center_id=${doctor?.id}&service_id=ee05034c-8812-4ff9-b4ec-fb919dab1ea3&hour=00&minute=15&duration=00%3A15&turn_num=&ref_max_time=&ref_min_time=&time_before_start_workhour_for_book=&time_before_end_workhour_for_book=&terms_and_conditions=&start_session_after_book_time=&end_session_after_book_time=&max_message_per_session=&consider_workhour=1&can_booking=1&is_default=1`,
      {
        params: {
          certificate: publicRuntimeConfig?.PANEL_TOKEN,
        },
      }
    );

    return res.status(200).json(add?.data);
  }

  if (req.method === "DELETE") {
    const nationalCode = user?.national_code;
    const findUser = await axios.post(
      "https://panel.paziresh24.com/booking/provider/e5d0fa25-a8e1-40db-a957-97aa0af1c0ee/fetchProviderByNationalCode",
      `code=${nationalCode}`,
      {
        params: {
          certificate: publicRuntimeConfig?.PANEL_TOKEN,
        },
      }
    );
    const userId = JSON.parse(JSON.stringify(findUser?.data))?.user?.id;
    const userCenters = await axios.post(
      "https://panel.paziresh24.com/booking/provider/e5d0fa25-a8e1-40db-a957-97aa0af1c0ee/getDoctorDataForExcel",
      `filter=`,
      {
        params: {
          certificate: publicRuntimeConfig?.PANEL_TOKEN,
        },
      }
    );

    const doctor: any = Object.values(userCenters?.data?.userDoctor)?.find(
      (item: any) => item?.user_id == userId
    );
    const deleteUserCenter = await axios.get(
      `https://panel.paziresh24.com/booking/provider/e5d0fa25-a8e1-40db-a957-97aa0af1c0ee/delete/${doctor?.id}`,
      {
        params: {
          certificate: publicRuntimeConfig?.PANEL_TOKEN,
        },
      }
    );

    return res.status(200).json(deleteUserCenter?.data);
  }
}
