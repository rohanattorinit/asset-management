import {
  DispatchTypes,
  EmployeeType,
  LOADING,
  SET_AUTHENTICATED,
  SET_ERROR,
} from "../types";

interface InitialState {
  authenticated: boolean;
  user: EmployeeType;
  loading: boolean;
  error?: string;
}

const initialState: InitialState = {
  authenticated: false,
  user: {
    empId: "",
    name: "",
    email: "",
    phone: undefined,
    location: "",
    isAdmin: false,
    jobTitle: "",
  },
  loading: false,
  error: "",
};

const authReducer = (
  state: InitialState = initialState,
  action: DispatchTypes
) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        user: action.payload.user,
        loading: false,
        error: "",
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

export default authReducer;
