import { SET_ADDASSET, SET_ADDEMPLOYEE } from "./../types";
import {
  AssetTypes,
  DispatchTypes,
  EmployeeType,
  LOADING_DATA,
  SET_ASSETS,
  SET_EMPLOYEES,
  SET_ERROR,
} from "../types";

interface InitialState {
  loading: boolean;
  employees: EmployeeType[];
  assets: AssetTypes[];
  error?: string;
  message: string;
}

const initialState: InitialState = {
  loading: false,
  employees: [],
  assets: [],
  error: "",
  message: "",
};

const adminReducer = (
  state: InitialState = initialState,
  action: DispatchTypes
) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
        message: "",
        error: "",
      };
    case SET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload.data,
        loading: false,
      };

    case SET_ASSETS:
      return {
        ...state,
        assets: action.payload.data,
        loading: false,
      };
    case SET_ADDEMPLOYEE:
      return {
        ...state,
        message: action.payload.message,
        loading: false,
      };
    case SET_ADDASSET:
      return {
        ...state,
        message: action.payload.message,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default adminReducer;
