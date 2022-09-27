import { SET_LOGOUT } from "./../types";
import axios from "axios";
import { Dispatch } from "redux";
import { DispatchTypes, LOADING, SET_AUTHENTICATED, SET_ERROR } from "../types";

interface CredentialType {
  email?: string;
  password?: string;
}

export const login =
  (credential?: CredentialType) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING });
    try {
      const res = await axios.post("http://localhost:4000/api/auth", {
        email: credential?.email,
        password: credential?.password,
      });
      dispatch({ type: SET_AUTHENTICATED, payload: res.data });
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
    dispatch({ type: SET_LOGOUT });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: "Error while logging out",
    });
  }
};
