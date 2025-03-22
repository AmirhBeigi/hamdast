import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { token, id } = req.query;

  await axios.post(
    `https://api.github.com/repos/paziresh24/patient/dispatches`,
    {
      event_type: "plasmic",
      client_payload: {
        data: {
          branch: "main",
          projectId: id,
          projectApiToken: token,
          platform: "nextjs",
          language: "ts",
          scheme: "codegen",
          title: `@hamdast/${id}`,
          description: `@hamdast/${id} component`,
          syncAction: "pr",
        },
      },
    },
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );

  return res.status(200).json({ status: "success" });
}
