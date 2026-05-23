import axios from "axios";
import { PAZIRESH24_AUTH_ME_URL } from "@/lib/paziresh24";
let CACHE: any = {
  user: null,
  provider: null,
};
export const getState = {
  async user() {
    try {
      if (!CACHE.user?.id) {
        const userData = await axios.get(
          PAZIRESH24_AUTH_ME_URL,
          {
            withCredentials: true,
          }
        );
        CACHE.user = userData.data?.users?.[0];
      }
      return CACHE.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          error: error.response?.data,
        };
      }
    }
  },
  async provider() {
    try {
      if (!CACHE.provider?.id) {
        await this.user();
        const providerData = await axios.get(
          "https://apigw.paziresh24.com/v1/providers",
          {
            params: {
              user_id: CACHE.user?.id,
            },
            withCredentials: true,
          }
        );
        CACHE.provider = providerData.data?.providers?.[0];
      }
      return CACHE.provider;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          error: error.response?.data,
        };
      }
    }
  },
};
