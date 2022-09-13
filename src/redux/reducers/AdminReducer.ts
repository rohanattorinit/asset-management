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
}

const initialState: InitialState = {
  loading: false,
  employees: [],
  assets: [],
  error: "",
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
