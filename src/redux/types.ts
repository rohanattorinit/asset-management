export const LOADING_DATA = "LOADING_DATA";
export const SET_EMPLOYEES = "SET_EMPLOYEES";
export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const SET_ERROR = "SET_ERROR";
export const LOADING = "LOADING";

export interface EmployeeType {
  empId: string;
  name: string;
  email: string;
  phone?: number;
  location: string;
  isAdmin: boolean;
  jobTitle: string;
}

interface LoadingData {
  type: typeof LOADING_DATA;
}

interface Loading {
  type: typeof LOADING;
}

interface SetEmployees {
  type: typeof SET_EMPLOYEES;
  payload: EmployeeType[];
}

interface SetError {
  type: typeof SET_ERROR;
  payload: string;
}

interface SetAuthenticated {
  type: typeof SET_AUTHENTICATED;
  payload: {
    message: string;
    user: EmployeeType;
    token: string;
  };
}

export type DispatchTypes =
  | LoadingData
  | SetEmployees
  | SetError
  | SetAuthenticated
  | Loading;
