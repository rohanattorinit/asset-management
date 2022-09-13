import axios from "axios";
import { Dispatch } from "redux";
import { DispatchTypes, LOADING_DATA, SET_EMPLOYEES } from "../types";

export const getEmployees = () => (dispatch: Dispatch<DispatchTypes>) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("http://localhost:4000/api/employees")
    .then((res) => dispatch({ type: SET_EMPLOYEES, payload: res.data.data }))
    .catch((error) => console.log(error));
};
