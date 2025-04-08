import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../../../../pocketbase";
import config from "next/config";
import axios from "axios";
import NextCors from "nextjs-cors";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  pb.autoCancellation(false);
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    origin: new RegExp(".paziresh24."),
    preflightContinue: true,
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
    ],
  });

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

  try {
    await pb
      .collection("apps")
      .getFirstListItem(`collaborators~"${record.id}" && id = "${app_id}"`, {
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });
  } catch (error) {
    return res.status(403).json({
      message: "You do not have permission to access this app.",
    });
  }

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method == "GET") {
    const { app_id, profile_id } = req.query;

    const widget = await pb
      .collection("widgets")
      .getFirstListItem(`app = "${app_id}"`, {
        headers: {
          x_token: publicRuntimeConfig.HAMDAST_TOKEN,
        },
      });

    try {
      const profileWidget = await pb
        .collection("profile_widgets")
        .getFirstListItem(
          `profile_id = "${profile_id}" && widget = "${widget.id}"`,
          {
            headers: {
              x_token: publicRuntimeConfig.HAMDAST_TOKEN,
            },
          }
        );

      return res.status(200).json({
        placements:
          profileWidget?.placement?.length > 0
            ? profileWidget?.placement
            : widget?.placement,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Widget not found",
      });
    }
  }

  if (req.method == "DELETE") {
    const { app_id, profile_id } = req.query;

    try {
      const widget = await pb
        .collection("widgets")
        .getFirstListItem(`app = "${app_id}"`, {
          headers: {
            x_token: publicRuntimeConfig.HAMDAST_TOKEN,
          },
        });

      const profileWidget = await pb
        .collection("profile_widgets")
        .getFirstListItem(
          `profile_id = "${profile_id}" && widget = "${widget.id}"`,
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

      const { data: slugData } = await axios.get(
        `https://api.paziresh24.com/V1/doctor/slug?doctor_id=${profile_id}&server_id=1`
      );

      const slug = slugData?.data?.slug;

      try {
        await axios.post(
          "https://napi.arvancloud.ir/cdn/4.0/domains/paziresh24.com/caching/purge",
          {
            purge: "individual",
            purge_urls: [
              `https://hamdast.paziresh24.com/api/v1/widgets/?id=${profile_id}`,
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
        message: "Widget deleted successfully",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Widget not found",
      });
    }
  }

  if (req.method == "PUT") {
    const { app_id, profile_id } = req.query;
    const { placements } = req.body;
    let slug;

    try {
      const { data: slugData } = await axios.get(
        `https://api.paziresh24.com/V1/doctor/slug?doctor_id=${profile_id}&server_id=1`
      );

      slug = slugData?.data?.slug;

      if (!slug) {
        return res.status(404).json({
          message: "Profile not found",
        });
      }
    } catch (error) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    const widget = await pb
      .collection("widgets")
      .getFirstListItem(`app = "${app_id}"`, {
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
            `profile_id = "${profile_id}" && widget = "${widget.id}"`,
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
              profile_id: profile_id,
              widget: widget.id,
              placement: placements,
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
              `https://hamdast.paziresh24.com/api/v1/widgets/?id=${profile_id}`,
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
