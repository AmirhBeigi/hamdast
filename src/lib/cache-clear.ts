import axios from "axios";
import config from "next/config";

const { publicRuntimeConfig } = config();

const PROF_CACHE_BASE_URL = "https://apigw.paziresh24.com/prof/v1";
const PROF_CACHE_BEARER_TOKEN = publicRuntimeConfig.PROF_CACHE_BEARER_TOKEN;
const DEFAULT_SERVER_ID = 1;

type ProfileCachePayload = {
  ownerId?: string | number | null;
  serverId?: string | number | null;
};

export async function clearProfileCache(payload: ProfileCachePayload) {
  if (!PROF_CACHE_BEARER_TOKEN) return;

  const ownerId = payload.ownerId?.toString()?.trim();
  const serverId = (payload.serverId ?? DEFAULT_SERVER_ID)?.toString()?.trim();

  if (!ownerId || !serverId) return;

  await axios.get(`${PROF_CACHE_BASE_URL}/ravi_clear_cache`, {
    params: {
      owner_id: ownerId,
      server_id: serverId,
    },
    headers: {
      Authorization: `Bearer ${PROF_CACHE_BEARER_TOKEN}`,
    },
  });
}

export async function clearOtherCache(url: string) {
  if (!PROF_CACHE_BEARER_TOKEN) return;
  if (!url?.trim()) return;

  await axios.get(
    `${PROF_CACHE_BASE_URL}/other_clear_cache?url=${encodeURIComponent(url)}`,
    {
      headers: {
        Authorization: `Bearer ${PROF_CACHE_BEARER_TOKEN}`,
      },
    }
  );
}
