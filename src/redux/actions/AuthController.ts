
import {authActions} from './../reducers/AuthSlice'

import axios from "axios";
import { Dispatch } from "redux";
import Cookies from "js-cookie";
import { get, post } from "../../services";
import { CredentialType } from '../types';

export const login =
  (credential?: CredentialType) =>
  async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());
    try {
      const res = await post("/api/auth", {
        email: credential?.email,
        password: credential?.password,
      });

      const date = new Date();
      //1 day expiry time
      const expiryTime = date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
      //set isAuth cookie
      const isAdmin = (res as any)?.data?.user?.isAdmin;
      Cookies.set("is_admin", isAdmin, { expires: expiryTime });

      const auth_token = `Bearer ${(res as any)?.data?.token}`;
      // axios.defaults.headers.common["Authorization"] = auth_token;
      //set auth token
      Cookies.set("auth_token", (res as any)?.data?.token, {
        expires: expiryTime,
      });
      dispatch(authActions.setAuthenticated((res as any)?.data));
    } catch (error) {
      dispatch(authActions.setError((error as any)?.response?.data?.error || ""));
    }
  };

export const logout = () => async (dispatch: Dispatch) => {
  dispatch(authActions.setLoading());
  try {
    const res = await post("/api/auth/logout", {});
    Cookies.remove("auth_token");
    delete axios.defaults.headers.common["Authorization"];
    localStorage.clear();
    dispatch(authActions.setLogout());
  } catch (error) {
    dispatch(authActions.setError((error as any)?.response?.data?.error ||
    "Error occured while logging out"));
  }
};

export const getUserProfile =
  () => async (dispatch: Dispatch) => {
    dispatch(authActions.setLoading());
    try {
      const res = await get("/api/auth/profile");
      dispatch(authActions.setAuthenticated((res as any)?.data));
    } catch (error) {
      dispatch(authActions.setAuthenticated({
        token: "",
        message: "",
        user: {
          empId: "",
          name: "",
          email: "",
          phone: "",
          location: "",
          isAdmin: false,
          jobTitle: "",
        },
      }));
      dispatch(authActions.setError("Error occured while getting user profile details"));
    }
  };
