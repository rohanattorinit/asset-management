import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_API;
export const get = (url: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`${BASE_URL}${url}`);
      return resolve(res);
    } catch (error) {
      return reject(error);
    }
  });
};

export const post = (url: string, payload: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(`${BASE_URL}${url}`, { ...payload });
      return resolve(res);
    } catch (error) {
      return reject(error);
    }
  });
};
