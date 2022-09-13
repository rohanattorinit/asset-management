import {
  DispatchTypes,
  EmployeeType,
  LOADING_DATA,
  SET_EMPLOYEES,
} from "../types";

interface InitialState {
  loading: boolean;
  employees: EmployeeType[];
}

const initialState: InitialState = {
  loading: false,
  employees: [],
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
        employees: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default adminReducer;
