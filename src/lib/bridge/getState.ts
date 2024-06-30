import axios from "axios";

export const getState = {
  async user() {
    try {
      const userData = await axios.get(
        "https://apigw.paziresh24.com/v1/auth/me",
        {
          withCredentials: true,
        }
      );
      return userData.data?.users?.[0];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          error: error.response?.data,
        };
      }
    }
  },
};
