import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.REACT_APP_BASE_API;

export const get = (url: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const auth_token = Cookies.get("auth_token") || "";

      const res = await axios.get(`${BASE_URL}${url}`, {
        headers: { Authorization: `Bearer ${auth_token}` },
      });
      return resolve(res);
    } catch (error) {
      //@ts-ignore
      if (error.response.status === 403) {
        Cookies.remove("auth_token");
        window.location.replace("/login");
      }
      //@ts-ignore
      else if (error.response.status === 404) {
        // Dispatch({
        //   type: SET_LOGOUT,
        //   payload: (error as any)?.response?.data?.error || "",
        // });
      }
      return reject(error);
    }
  });
};

export const post = (url: string, payload: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const auth_token = Cookies.get("auth_token");

      const res = await axios.post(
        `${BASE_URL}${url}`,
        {
          ...payload,
        },
        {
          headers: { Authorization: `Bearer ${auth_token}` },
        }
      );
      return resolve(res);
    } catch (error) {
      //@ts-ignore
      if (error.response.status === 403) {
        await axios.post(`${BASE_URL}/api/auth/logout`);
        Cookies.remove("auth_token");
      }

      return reject(error);
    }
  });
};
