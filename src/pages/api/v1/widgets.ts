import type { NextApiRequest, NextApiResponse } from "next";
import { pb } from "../../../../pocketbase";
import config from "next/config";
const { publicRuntimeConfig } = config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query;

  const data = await pb.collection("profile_widgets").getFullList({
    filter: `profile_id="${id}"`,
    expand: "widget",
    headers: {
      x_token: publicRuntimeConfig.HAMDAST_TOKEN,
    },
  });

  return res.status(200).json(
    data?.map((item) => ({
      plasmic_component_id: item.expand?.widget?.plasmic_component_id,
      plasmic_project_id: item?.expand?.widget?.plasmic_project_id,
      placement: item?.expand?.widget?.placement,
      data_endpoint: item?.expand?.widget?.data_endpoint ?? null,
    }))
  );
}
