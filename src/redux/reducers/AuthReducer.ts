import { DispatchTypes, LOADING, SET_AUTHENTICATED, SET_ERROR } from "../types";

interface InitialState {
  authenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  error?: string;
}

const initialState: InitialState = {
  authenticated: false,
  isAdmin: false,
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
        isAdmin: action.payload.data.isAdmin,
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
