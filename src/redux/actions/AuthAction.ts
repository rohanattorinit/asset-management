import { SET_LOGOUT } from "./../types";
import axios from "axios";
import { Dispatch } from "redux";
import { DispatchTypes, LOADING, SET_AUTHENTICATED, SET_ERROR } from "../types";
import Cookies from "js-cookie";
import { get, post } from "../../services";
interface CredentialType {
  email?: string;
  password?: string;
}

export const login =
  (credential?: CredentialType) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING });
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
      dispatch({ type: SET_AUTHENTICATED, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: (error as any)?.response?.data?.error || "",
      });
    }
  };

export const logout = () => async (dispatch: Dispatch<DispatchTypes>) => {
  dispatch({ type: LOADING });
  try {
    const res = await post("/api/auth/logout", {});
    Cookies.remove("auth_token");
    delete axios.defaults.headers.common["Authorization"];
    localStorage.clear();
    dispatch({ type: SET_LOGOUT });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        "Error occured while logging out",
    });
  }
};

export const getUserProfile =
  () => async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING });
    try {
      const res = await get("/api/auth/profile");
      dispatch({ type: SET_AUTHENTICATED, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_AUTHENTICATED,
        payload: {
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
        },
      });
      dispatch({
        type: SET_ERROR,
        payload: "Error occured while getting user profile details",
      });
    }
  };
