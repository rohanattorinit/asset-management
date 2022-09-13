import {
  DispatchTypes,
  EmployeeAssetType,
  LOADING_DATA,
  SET_EMPLOYEE_ASSETS,
  SET_ERROR,
} from "../types";

interface InitialState {
  loading: boolean;
  error?: string;
  assets: EmployeeAssetType[];
}

const initialState: InitialState = {
  loading: false,
  error: "",
  assets: [],
};

const employeeReducer = (
  state: InitialState = initialState,
  action: DispatchTypes
) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_EMPLOYEE_ASSETS:
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

export default employeeReducer;
