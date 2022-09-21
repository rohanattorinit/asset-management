const LOADING_DATA = "LOADING_DATA";
const SET_EMPLOYEES = "SET_EMPLOYEES";
const SET_AUTHENTICATED = "SET_AUTHENTICATED";
const SET_ERROR = "SET_ERROR";
const LOADING = "LOADING";
const SET_EMPLOYEE_ASSETS = "SET_EMPLOYEE_ASSETS";
const SET_ASSETS = "SET_ASSETS";
const UPDATE_EMPLOYEE_DETAILS = "UPDATE_EMPLOYEE_DETAILS";
const SET_EMPLOYEE = "SET_EMPLOYEE";
const SET_LOGOUT = "SET_LOGOUT";
const SET_ADDEMPLOYEE = "SET_ADDEMPLOYEE";
const SET_ADDASSET = "SET_ADDASSET";
const SET_EMPLOYEE_DETAILS = "SET_EMPLOYEE_DETAILS";
const SET_EMPLOYEE_ASSETS_DETAILS = "SET_EMPLOYEE_ASSETS_DETAILS";
const DEALLOCATE_EMPLOYEE_ASSET = "DEALLOCATE_EMPLOYEE_ASSET";
const ALLOCATE_EMPLOYEE_ASSET = "ALLOCATE_EMPLOYEE_ASSET";
const CREATE_TICKET = "CREATE_TICKET";
const SET_SERVICE_DETAILS = "SET_SERVICE_DETAILS";

const SET_SERVICE_TICKET_DETAILS = "SET_SERVICE_TICKET_DETAILS";

const SET_EMPTICKETS = "SET_EMPTICKETS";
const SET_TICKET_STATUS = "SET_TICKET_STATUS";
const SET_ADD_NOTE = "SET_ADD_NOTE";
interface EmpTicketType {
  ticketId: number;
  empId: string;
  assetId: number;
  title: string;
  description: string;
  ticketStatus: string;
  createdAt: string;
}

const CHANGE_PASSWORD = "CHANGE_PASSWORD";

interface CreateTicketType {
  empId: string;
  assetId: number;
  title: string;
  description: string;
}
interface CreateAssetType {
  brandName: string;
  assetName: string;
  assetType: string;
  category: string;
  modelNo: string;
  description: string;
  status: string;
  usability: string;
}

interface CreateEmployeeType {
  empId?: string;
  name: string;
  email: string;
  phone?: number;
  location: string;
  jobTitle: string;
}
interface EmployeeType {
  empId: string;
  name: string;
  email: string;
  phone?: number;
  location: string;
  isAdmin: boolean;
  jobTitle: string;
}
interface ServiceType {
  empId: string;
  assetId: number;
  ticketId: number;
  title: string;
  description: string;
  ticketStatus: string;
  createdAt: string;
}

interface EmployeeAssetType {
  assetId: number;
  name: string;
  category: string;
  modelno: number;
  allocationTime: string;
}

interface AssetTypes {
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

interface AllocatedAssetType {
  assetId: number;
  name: string;
  category: string;
  modelno: number;
  allocationTime: string;
}

interface DeAllocatAssetType {
  assetId: number;
  name: string;
  category: string;
  modelno: number;
  allocationTime: string;
}
interface SetAllocateAsset {
  type: typeof ALLOCATE_EMPLOYEE_ASSET;
  payload: {
    message: string;
  };
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

interface SetEmployeeTicket {
  type: typeof SET_EMPTICKETS;
  payload: {
    meassage: string;
    data: EmpTicketType[];
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

interface SetServiceDetails {
  type: typeof SET_SERVICE_DETAILS;
  payload: { message: string; data: ServiceType[] };
}

interface setEmployeeAssetDetails {
  type: typeof SET_EMPLOYEE_ASSETS_DETAILS;
  payload: {
    message: string;
    data: AllocatedAssetType[];
  };
}

interface SetServiceTicketDetails {
  type: typeof SET_SERVICE_TICKET_DETAILS;
  payload: {
    message: string;
    data: ServiceType;
  };
}

interface SetDeAllocateAsset {
  type: typeof DEALLOCATE_EMPLOYEE_ASSET;
  payload: {
    message: string;
  };
}

interface CreateTicket {
  type: typeof CREATE_TICKET;
  payload: {
    message: string;
  };
}

interface SetTicketStatus {
  type: typeof SET_TICKET_STATUS;
  payload: {
    message: string;
  };
}

interface SetAddNote {
  type: typeof SET_ADD_NOTE;
  payload: {
    message: string;
  };
}

type DispatchTypes =
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
  | setEmployeeAssetDetails
  | SetDeAllocateAsset
  | SetAllocateAsset
  | CreateTicket
  | SetServiceDetails
  | SetServiceTicketDetails
  | SetEmployeeTicket
  | SetServiceDetails
  | SetTicketStatus
  | SetAddNote;
