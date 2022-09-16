import {
  AllocatedAssetType,
  DEALLOCATE_EMPLOYEE_ASSET,
  SET_ADDASSET,
  SET_ADDEMPLOYEE,
  SET_EMPLOYEE_ASSETS_DETAILS,
  SET_EMPLOYEE_DETAILS,
} from "./../types";
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
  employeedetails: EmployeeType;
  employeeassetsdetails: AllocatedAssetType[];
  error?: string;
  message: string;
}

const initialState: InitialState = {
  loading: false,
  employees: [],
  assets: [],
  message: "",
  error: "",
  employeedetails: {
    empId: "",
    name: "",
    email: "",
    phone: undefined,
    location: "",
    isAdmin: false,
    jobTitle: "",
  },
  employeeassetsdetails: [],
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

    case SET_EMPLOYEE_DETAILS:
      return {
        ...state,
        employeedetails: action.payload.data,
        loading: false,
      };

    case SET_EMPLOYEE_ASSETS_DETAILS:
      return {
        ...state,
        employeeassetsdetails: action.payload.data,
        loading: false,
      };

    case DEALLOCATE_EMPLOYEE_ASSET:
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
