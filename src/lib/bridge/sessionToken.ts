import axios from "axios";

export const sessionToken = async ({ app }: any) => {
  if (!app) return;

  try {
    const data = await axios.post(
      `https://hamdast.paziresh24.com/api/v1/apps/${app}/auth`,
      undefined,
      { withCredentials: true }
    );
    return data.data?.session_token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        error: error.response?.data?.message,
      };
    }
  }
};
