export const CHANGE_PASSWORD = "CHANGE_PASSWORD";

export const LOADING_DATA = "LOADING_DATA";
export const SET_EMPLOYEES = "SET_EMPLOYEES";
export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const SET_ERROR = "SET_ERROR";
export const LOADING = "LOADING";
export const SET_EMPLOYEE_ASSETS = "SET_EMPLOYEE_ASSETS";
export const SET_ASSETS = "SET_ASSETS";

export const UPDATE_EMPLOYEE_DETAILS = "UPDATE_EMPLOYEE_DETAILS";
export const SET_EMPLOYEE = "SET_EMPLOYEE";

export const SET_LOGOUT = "SET_LOGOUT";
export const SET_ADDEMPLOYEE = "SET_ADDEMPLOYEE";
export const SET_ADDASSET = "SET_ADDASSET";

export const SET_EMPLOYEE_DETAILS = "SET_EMPLOYEE_DETAILS";
export const SET_EMPLOYEE_ASSETS_DETAILS = "SET_EMPLOYEE_ASSETS_DETAILS";

export interface CreateAssetType {
  brandName: string;
  assetName: string;
  assetType: string;
  category: string;
  modelNo: string;
  description: string;
  status: string;
  usability: string;
}

export interface CreateEmployeeType {
  empId?: string;
  name: string;
  email: string;
  phone?: number;
  location: string;
  jobTitle: string;
}
export interface EmployeeType {
  empId: string;
  name: string;
  email: string;
  phone?: number;
  location: string;
  isAdmin: boolean;
  jobTitle: string;
}

export interface EmployeeAssetType {
  assetId: number;
  name: string;
  category: string;
  modelno: number;
  allocationTime: string;
}

export interface AssetTypes {
  assetId: number;
  brandId: number;
  name: string;
  assetType: string;
  category: string;
  modelNo: number;
  description: string;
  status: string;
  usability: string;
  addedTime: string;
}

export interface AllocatedAssetType {
  assetId: number;
  name: string;
  category: string;
  modelno: number;
  allocationTime: string;
}

interface LoadingData {
  type: typeof LOADING_DATA;
}

interface Loading {
  type: typeof LOADING;
}

interface SetEmployees {
  type: typeof SET_EMPLOYEES;
  payload: {
    meassage: string;
    data: EmployeeType[];
  };
}

interface SetEmployee {
  type: typeof SET_EMPLOYEE;
  payload: {
    data: EmployeeType;
  };
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

interface SetLogout {
  type: typeof SET_LOGOUT;
}
interface SetEmployeeAssets {
  type: typeof SET_EMPLOYEE_ASSETS;
  payload: {
    message: string;
    data: EmployeeAssetType[];
  };
}
interface SetAssets {
  type: typeof SET_ASSETS;
  payload: {
    message: string;
    data: AssetTypes[];
  };
}

interface UpdateEmployeeDetails {
  type: typeof UPDATE_EMPLOYEE_DETAILS;
  payload: {
    message: string;
  };
}

interface SetAddEmployee {
  type: typeof SET_ADDEMPLOYEE;
  payload: {
    message: string;
  };
}

interface SetAddAsset {
  type: typeof SET_ADDASSET;
  payload: {
    message: string;
  };
}

interface ChangePassword {
  type: typeof CHANGE_PASSWORD;
  payload: {
    message: string;
  };
}

interface SetAddEmployee {
  type: typeof SET_ADDEMPLOYEE;
  payload: {
    message: string;
  };
}

interface SetAddAsset {
  type: typeof SET_ADDASSET;
  payload: {
    message: string;
  };
}

interface ChangePassword {
  type: typeof CHANGE_PASSWORD;
  payload: {
    message: string;
  };
}

interface SetEmployeeDetails {
  type: typeof SET_EMPLOYEE_DETAILS;
  payload: { message: string; data: EmployeeType };
}

interface setEmployeeAssetDetails {
  type: typeof SET_EMPLOYEE_ASSETS_DETAILS;
  payload: {
    message: string;
    data: AllocatedAssetType[];
  };
}

export type DispatchTypes =
  | LoadingData
  | SetEmployees
  | SetError
  | SetAuthenticated
  | Loading
  | SetEmployeeAssets
  | SetAssets
  | UpdateEmployeeDetails
  | SetEmployee
  | SetLogout
  | ChangePassword
  | SetAddEmployee
  | SetAddAsset
  | SetEmployeeDetails
  | setEmployeeAssetDetails;
