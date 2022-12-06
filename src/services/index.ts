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
      }
      return reject(error);
    }
  });
};

export const post = (url: string, payload: any, signal?: any) => {
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
          signal: signal,
        }
      );
      return resolve(res);
    } catch (error) {
      if (axios.isCancel(error)) {
        // do nothing
      } else {
        //@ts-ignore
        if (error?.response?.status === 403) {
          await axios.post(`${BASE_URL}/api/auth/logout`);
          Cookies.remove("auth_token");
        }

        return reject(error);
      }
    }
  });
};