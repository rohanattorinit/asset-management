import { SET_ADD_NOTE, SET_TICKET_STATUS } from "./../types";
import {
  AllocatedAssetType,
  ALLOCATE_EMPLOYEE_ASSET,
  DEALLOCATE_EMPLOYEE_ASSET,
  SET_SERVICE_DETAILS,
  SET_ADDASSET,
  SET_ADDEMPLOYEE,
  SET_EMPLOYEE_ASSETS_DETAILS,
  SET_EMPLOYEE_DETAILS,
  AssetTypes,
  DispatchTypes,
  EmployeeType,
  LOADING_DATA,
  SET_ASSETS,
  SET_EMPLOYEES,
  SET_ERROR,
  ServiceType,
  SET_SERVICE_TICKET_DETAILS,
} from "../types";

interface InitialState {
  loading: boolean;
  employees: EmployeeType[];
  assets: AssetTypes[];
  employeeDetails: EmployeeType;
  employeeassetsdetails: AllocatedAssetType[];
  serviceDetails: ServiceType[];
  serviceticketdetails: ServiceType;
  error?: string;
  message: string;
}

const initialState: InitialState = {
  loading: false,
  employees: [],
  assets: [],
  message: "",
  error: "",
  employeeDetails: {
    empId: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    isAdmin: false,
    jobTitle: "",
  },
  employeeassetsdetails: [],
  serviceDetails: [],
  serviceticketdetails: {
    empId: "",
    assetId: 0,
    ticketId: 0,
    title: "",
    description: "",
    ticketStatus: "",
    createdAt: "",
  },
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
        employees: action.payload?.data,
        loading: false,
      };

    case SET_ASSETS:
      return {
        ...state,
        assets: action.payload?.data,
        loading: false,
      };
    case SET_ADDEMPLOYEE:
      return {
        ...state,
        message: action.payload?.message,
        loading: false,
      };
    case SET_ADDASSET:
      return {
        ...state,
        message: action.payload?.message,
        loading: false,
      };

    case SET_EMPLOYEE_DETAILS:
      return {
        ...state,
        employeeDetails: action.payload?.data,
        loading: false,
      };

    case SET_EMPLOYEE_ASSETS_DETAILS:
      return {
        ...state,
        employeeassetsdetails: action.payload?.data,
        loading: false,
      };

    case SET_SERVICE_TICKET_DETAILS:
      return {
        ...state,
        serviceticketdetails: action.payload?.data,
        loading: false,
      };

    case SET_SERVICE_DETAILS:
      return {
        ...state,
        serviceDetails: action.payload?.data,
        loading: false,
      };

    case DEALLOCATE_EMPLOYEE_ASSET:
      return {
        ...state,
        message: action.payload?.message,
        loading: false,
      };

    case ALLOCATE_EMPLOYEE_ASSET:
      return {
        ...state,
        message: action.payload?.message,
        loading: false,
      };
    case SET_TICKET_STATUS:
      return {
        ...state,
        message: action.payload?.message,
        loading: false,
      };
    case SET_ADD_NOTE:
      return {
        ...state,
        message: action.payload?.message,
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
