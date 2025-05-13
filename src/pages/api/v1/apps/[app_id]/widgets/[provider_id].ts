import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../pocketbase";
import config from "next/config";
import axios from "axios";
import NextCors from "nextjs-cors";
import { isUUID } from "@/lib/utils";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  pb.autoCancellation(false);
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    origin: "*",
    optionsSuccessStatus: 200,
    credentials: true,
    headers: [
      "X-CSRF-Token",
      "x-xsrf-token",
      "X-Requested-With",
      "Accept",
      "Accept-Version",
      "Content-Length",
      "Content-MD5",
      "Content-Type",
      "Date",
      "X-Api-Version",
      "token",
      "Authorization",
      "X-Api-KEY",
      "x-api-key",
    ],
  });

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { app_id } = req.query;

  const apiKey = req.headers?.["x-api-key"];
  if (!apiKey) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  let record;
  try {
    record = await pb
      .collection("users")
      .getFirstListItem(`api_key="${apiKey}"`, {
        expand: "role",
        cache: "force-cache",
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });
  } catch (error) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  if (!record) {
    return res.status(401).json({
      message: "Authentication credentials were not provided.",
    });
  }

  let app;

  try {
    app = await pb
      .collection("apps")
      .getFirstListItem(`collaborators~"${record.id}" && key = "${app_id}"`, {
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });
  } catch (error) {
    return res.status(403).json({
      message: "You do not have permission to access this app.",
    });
  }

  if (req.method == "GET") {
    const { provider_id } = req.query;

    const widget = await pb
      .collection("widgets")
      .getFirstListItem(`app = "${app.id}"`, {
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });

    try {
      const profileWidget = await pb
        .collection("profile_widgets")
        .getFirstListItem(
          `(provider_id = "${provider_id}" || profile_id = "${provider_id}") && widget = "${widget.id}"`,
          {
            headers: {
              x_token: publicRuntimeConfig.HAMDAST_TOKEN,
            },
          }
        );

      return res.status(200).json({
        profile_id: profileWidget?.profile_id,
        provider_id: profileWidget?.provider_id,
        placements:
          profileWidget?.placement?.length > 0
            ? profileWidget?.placement
            : widget?.placement,
        placements_metadata: profileWidget?.placements_metadata ?? {},
      });
    } catch (error) {
      return res.status(404).json({
        message: "Widget not found",
      });
    }
  }

  if (req.method == "DELETE") {
    const { provider_id } = req.query;

    try {
      const widget = await pb
        .collection("widgets")
        .getFirstListItem(`app = "${app.id}"`, {
          headers: {
            x_token: publicRuntimeConfig.HAMDAST_TOKEN,
          },
        });

      const profileWidget = await pb
        .collection("profile_widgets")
        .getFirstListItem(
          `(provider_id = "${provider_id}" || profile_id = "${provider_id}") && widget = "${widget.id}"`,
          {
            headers: {
              x_token: publicRuntimeConfig.HAMDAST_TOKEN,
            },
          }
        );

      await pb.collection("profile_widgets").delete(profileWidget.id, {
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });

      let slug = "";

      if (
        (provider_id as string).startsWith("doctor_") &&
        (provider_id as string)?.split("_")?.length == 3
      ) {
        const { data: slugData } = await axios.get(
          `https://api.paziresh24.com/V1/doctor/slug?doctor_id=${
            (provider_id as string)?.split("_")[1]
          }&server_id=${(provider_id as string)?.split("_")[2]}`
        );

        slug = slugData?.data?.slug;
      } else {
        const { data: slugData } = await axios.get(
          `https://apigw.paziresh24.com/v1/providers?id=${provider_id}`
        );

        slug = slugData?.providers[0]?.slug;
      }

      try {
        await axios.post(
          "https://napi.arvancloud.ir/cdn/4.0/domains/paziresh24.com/caching/purge",
          {
            purge: "individual",
            purge_urls: [
              `https://hamdast.paziresh24.com/api/v1/widgets/?provider_id=${provider_id}`,
              `https://hamdast.paziresh24.com/api/v1/widgets/?profile_id=${profileWidget.profile_id}`,
              `https://hamdast.paziresh24.com/api/v1/widgets/?provider_id=${provider_id}&profile_id=${profileWidget.profile_id}`,
              `https://www.paziresh24.com/dr/${slug}/`,
            ],
          },
          {
            headers: {
              authorization: publicRuntimeConfig.ARVAN,
            },
          }
        );
      } catch (error) {}

      return res.status(200).json({
        message: "Provider Widget updated successfully",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Widget not found",
      });
    }
  }

  if (req.method == "PUT") {
    const { provider_id } = req.query;
    const { placements, placements_metadata } = req.body;

    if (placements_metadata && Object.keys(placements_metadata).length > 0) {
      const placementTypes = [
        "head",
        "section_one",
        "section_two",
        "section_three",
        "services",
        "sidebar",
        "center_info",
      ];
      const isValid = Object.keys(placements_metadata).every((item) =>
        placementTypes.includes(item)
      );

      if (!isValid) {
        return res.status(400).json({
          message: `placements_metadata can only be [${placementTypes.join(
            ", "
          )}]`,
        });
      }
    }

    let slug;
    let providerIdValue = provider_id;
    let profileIdValue = provider_id;
    try {
      if (
        (provider_id as string).startsWith("doctor_") &&
        (provider_id as string)?.split("_")?.length == 3
      ) {
        const { data: slugData } = await axios.get(
          `https://api.paziresh24.com/V1/doctor/slug?doctor_id=${
            (provider_id as string)?.split("_")[1]
          }&server_id=${(provider_id as string)?.split("_")[2]}`
        );

        slug = slugData?.data?.slug;

        if (!slug) {
          return res.status(404).json({
            message: "Profile not found",
          });
        }
        const { data: provider } = await axios.get(
          `https://apigw.paziresh24.com/v1/providers?slug=${slug}`
        );

        providerIdValue = slugData?.providers[0]?.slug;
      } else {
        const { data: slugData } = await axios.get(
          `https://apigw.paziresh24.com/v1/providers?id=${provider_id}`
        );

        slug = slugData?.providers[0]?.slug;

        if (!slug) {
          return res.status(404).json({
            message: "Profile not found",
          });
        }

        const { data: fullProfile } = await axios.get(
          `https://apigw.paziresh24.com/v1/full-profile/${slug}`
        );

        profileIdValue = fullProfile?.data?.id;
      }
    } catch (error) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    const widget = await pb
      .collection("widgets")
      .getFirstListItem(`app = "${app.id}"`, {
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });

    try {
      let profileWidgets;
      try {
        profileWidgets = await pb
          .collection("profile_widgets")
          .getFirstListItem(
            `(provider_id = "${providerIdValue}" || profile_id = "${profileIdValue}") && widget = "${widget.id}"`,
            {
              headers: {
                x_token: publicRuntimeConfig.HAMDAST_TOKEN,
              },
            }
          );
        if (profileWidgets) {
          await pb.collection("profile_widgets").update(
            profileWidgets.id,
            {
              placement: placements,
              placements_metadata,
            },
            {
              headers: {
                x_token: publicRuntimeConfig.HAMDAST_TOKEN,
              },
            }
          );
        }
      } catch (error: any) {
        if (!profileWidgets) {
          await pb.collection("profile_widgets").create(
            {
              profile_id: profileIdValue,
              provider_id: providerIdValue,
              widget: widget.id,
              placement: placements,
              placements_metadata,
            },
            {
              headers: {
                x_token: publicRuntimeConfig.HAMDAST_TOKEN,
              },
            }
          );
          return;
        }
        console.log(error);
        return res.status(400).json({
          ...error?.response?.data?.placement,
        });
      }

      try {
        await axios.post(
          "https://napi.arvancloud.ir/cdn/4.0/domains/paziresh24.com/caching/purge",
          {
            purge: "individual",
            purge_urls: [
              `https://hamdast.paziresh24.com/api/v1/widgets/?provider_id=${providerIdValue}`,
              `https://hamdast.paziresh24.com/api/v1/widgets/?profile_id=${profileIdValue}`,
              `https://hamdast.paziresh24.com/api/v1/widgets/?provider_id=${providerIdValue}&profile_id=${profileIdValue}`,
              `https://www.paziresh24.com/dr/${slug}/`,
            ],
          },
          {
            headers: {
              authorization: publicRuntimeConfig.ARVAN,
            },
          }
        );
      } catch (error) {}

      return res.status(200).json({
        message: "Widget updated successfully",
      });
    } catch (error) {
      return res.status(400).json({});
    }
  }

  return res.status(405).json({
    message: "Method Not Allowed",
  });
}
