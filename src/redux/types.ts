export const LOADING_DATA = 'LOADING_DATA'
export const SET_EMPLOYEES = 'SET_EMPLOYEES'
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED'
export const SET_ERROR = 'SET_ERROR'
export const LOADING = 'LOADING'
export const SET_EMPLOYEE_ASSETS = 'SET_EMPLOYEE_ASSETS'
export const SET_ASSETS = 'SET_ASSETS'
export const UPDATE_EMPLOYEE_DETAILS = 'UPDATE_EMPLOYEE_DETAILS'
export const UPDATE_ASSET_DETAILS = 'UPDATE_ASSET_DETAILS'
export const SET_EMPLOYEE = 'SET_EMPLOYEE'
export const SET_LOGOUT = 'SET_LOGOUT'
export const SET_ADDEMPLOYEE = 'SET_ADDEMPLOYEE'
export const SET_ADDASSET = 'SET_ADDASSET'
export const SET_EMPLOYEE_DETAILS = 'SET_EMPLOYEE_DETAILS'
export const SET_SINGLE_ASSET_DETAILS = 'SET_SINGLE_ASSET_DETAILS'
export const SET_SINGLE_ASSET_TICKETS = 'SET_SINGLE_ASSET_TICKETS'
export const SET_EMPLOYEE_ASSETS_DETAILS = 'SET_EMPLOYEE_ASSETS_DETAILS'
export const DEALLOCATE_EMPLOYEE_ASSET = 'DEALLOCATE_EMPLOYEE_ASSET'
export const ALLOCATE_EMPLOYEE_ASSET = 'ALLOCATE_EMPLOYEE_ASSET'
export const CREATE_TICKET = 'CREATE_TICKET'
export const SET_SERVICE_DETAILS = 'SET_SERVICE_DETAILS'
export const SET_SERVICE_TICKET_DETAILS = 'SET_SERVICE_TICKET_DETAILS'
export const SET_EMPTICKETS = 'SET_EMPTICKETS'
export const SET_TICKET_STATUS = 'SET_TICKET_STATUS'
export const SET_ADD_NOTE = 'SET_ADD_NOTE'
export const GET_ADD_NOTE = 'GET_ADD_NOTE'
export const GET_BRAND_OPTIONS = 'GET_BRAND_OPTIONS'
export const GET_FILTER_OPTIONS = 'GET_FILTER_OPTIONS'
export const GET_TOTAL_ASSETSCATEGORY_COUNT = 'GET_TOTAL_ASSETSCATEGORY_COUNT'
export const DELETE_ASSET = 'DELETE_ASSET'
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE'
export const ASSET_TRANSACTION_HISTORY = 'ASSET_TRANSACTION_HISTORY'

export interface AssetTransactionHistory {
  log_id: number
  event_name: string
  asset_id: number
  ticket_id: number
  emp_id: string
  emp_name: string
  asset_status: string
  update_feature: string
  update_description: string
  date: string
}

export interface EmpTicketType {
  ticketId: number
  empId: string
  assetId: number
  title: string
  description: string
  ticketStatus: string
  createdAt: string
  note: string
}

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

// export interface TotalAssetCountType {
//   totalAssetCount: AssetCategoryCount[];
//   totalSurplusCount: AssetCategoryCount[];
// }

export interface Counts {
  totalAssets: number
  ownAssets: number
  rentedAssets: number
  surplusAssets: number
  WorkingAssets: number
  RepairabaleAssets: number
  brokenAssets: number
  allocatedAssets: number
}
export interface TotalAssetCountType {
  totalAssetCount: AssetCategoryCount[]
  totalSurplusCount: AssetCategoryCount[]
  counts: Counts
}

export interface CreateTicketType {
  empId: string
  assetId: number
  title: string
  description: string
}
export interface CreateAssetType {
  brandName: string
  assetName: string
  assetType: string
  category: string
  modelNo: string
  description: string
  status: string
  isRented: boolean
  vendor: string
  rent: string
  deposit: string
  rentStartDate: string
  rentEndDate: string
  processor: string
  ram: string
  operating_system: string
  screen_type: string
  screen_size: string
  asset_location: string
  received_date: string
  ssd: string
  hdd: string
  os_version: string
  imeiNo: string
  make_year: number
  connectivity: string
  cableType: string
  allocationTime: string
}

export interface CreateEmployeeType {
  empId?: string
  name: string
  email: string
  phone?: string
  location: string
  jobTitle: string
}
export interface EmployeeType {
  empId: string
  name: string
  email: string
  phone?: string
  location: string
  isAdmin: boolean
  jobTitle: string
  is_active?: boolean
}
export interface ServiceType {
  empId: string
  assetId: number
  ticketId: number
  title: string
  description: string
  ticketStatus: string
  createdAt: string
}

export interface SingleAssetDetailsType {
  assetId: number
  brandName: string
  name: string
  modelNo: number
  description: string
  status: string
  asset_location: string
  empName: string
  empId: string
  isRented: 0 | 1
  vendor: string
  rent: number
  deposit: number
  rentStartDate?: string
  rentEndDate?: string
  processor: string
  screen_type: string
  received_date?: string
  ram: string
  operating_system: string
  screen_size: string
  category: string
  imeiNo: string
  connectivity: string
  cableType: string
  ssd: string
  hdd: string
  os_version: string
  make_year: string
  is_active?: boolean
}

export interface EmployeeAssetType {
  assetId: number
  name: string
  category: string
  modelno: number
  allocationTime: string
  description: string
}

export interface AssetTypes {
  assetId: number
  brandName: string
  name: string
  assetType: string
  category: string
  processor: string
  screen_type: string
  ram: number
  operating_system: string
  screen_size: number
  modelNo: number
  description: string
  status: string
  usability: string
  addedTime: string
  isRented?: boolean
  vendor?: string
  rent?: number
  deposit?: number
  rentStartDate?: string
  rentEndDate?: string
  asset_location: string
  received_date: string
  is_active?: boolean
}

export interface AllocatedAssetType {
  assetId: number
  name: string
  category: string
  modelno: number
  allocationTime: string
  pendingTickets?: number
}

export interface DeAllocatAssetType {
  assetId: number
  name: string
  category: string
  modelno: number
  allocationTime: string
}

export interface DeleteAssetType {
  brandName: string
  assetName: string
  assetType: string
  category: string
  modelNo: string
  description: string
  status: string
  isRented: boolean
  vendor: string
  rent: string
  deposit: string
  rentStartDate: string
  rentEndDate: string
  processor: string
  ram: string
  operating_system: string
  screen_type: string
  screen_size: string
  asset_location: string
  received_date: string
}

export interface DeleteEmployeeType {
  empId?: string
  name: string
  email: string
  phone?: string
  location: string
  jobTitle: string
}

export interface DeleteAssetType {
  brandName: string
  assetName: string
  assetType: string
  category: string
  modelNo: string
  description: string
  status: string
  isRented: boolean
  vendor: string
  rent: string
  deposit: string
  rentStartDate: string
  rentEndDate: string
  processor: string
  ram: string
  operating_system: string
  screen_type: string
  screen_size: string
  asset_location: string
  received_date: string
}
export interface NoteType {
  ticketId: number
  note: string
  createdAt: string
}

export interface BrandOptions {
  brandId: number
  name: string
}

export interface FilterOptions {
  category: string[]
  status: string[]
  processor: string[]
  screen_size: string[]
  ram: string[]
  screen_type: string[]
  asset_location: string[]
  operating_system: string[]
  cableType: string[]
  connectivity: string[]
  ssd: string[]
  hdd: string[]
  brandName: string[]
}

export interface AssetCategoryCount {
  category: string
  count: number
}

interface SetAllocateAsset {
  type: typeof ALLOCATE_EMPLOYEE_ASSET
  payload: {
    message: string
  }
}

interface GetTransactionLogs {
  type: typeof ASSET_TRANSACTION_HISTORY
  payload: {
    meassage: string
    data: AssetTransactionHistory[]
  }
}

interface LoadingData {
  type: typeof LOADING_DATA
}

interface Loading {
  type: typeof LOADING
}

interface SetEmployees {
  type: typeof SET_EMPLOYEES
  payload: {
    meassage: string
    data: EmployeeType[]
  }
}

interface SetEmployee {
  type: typeof SET_EMPLOYEE
  payload: {
    data: EmployeeType
  }
}

interface SetEmployeeTicket {
  type: typeof SET_EMPTICKETS
  payload: {
    meassage: string
    data: EmpTicketType[]
  }
}

interface SetError {
  type: typeof SET_ERROR
  payload: string
}

interface SetAuthenticated {
  type: typeof SET_AUTHENTICATED
  payload: {
    message: string
    user: EmployeeType
    token: string
  }
}

interface SetLogout {
  type: typeof SET_LOGOUT
}
interface SetEmployeeAssets {
  type: typeof SET_EMPLOYEE_ASSETS
  payload: {
    message: string
    data: EmployeeAssetType[]
  }
}
interface SetAssets {
  type: typeof SET_ASSETS
  payload: {
    message: string
    data: AssetTypes[]
  }
}

interface UpdateEmployeeDetails {
  type: typeof UPDATE_EMPLOYEE_DETAILS
  payload: {
    message: string
  }
}

interface UpdateAssetDetails {
  type: typeof UPDATE_ASSET_DETAILS
  payload: {
    message: string
  }
}

interface SetAddEmployee {
  type: typeof SET_ADDEMPLOYEE
  payload: {
    message: string
  }
}

interface SetAddAsset {
  type: typeof SET_ADDASSET
  payload: {
    message: string
  }
}

interface ChangePassword {
  type: typeof CHANGE_PASSWORD
  payload: {
    message: string
  }
}

interface SetAddEmployee {
  type: typeof SET_ADDEMPLOYEE
  payload: {
    message: string
  }
}

interface SetAddAsset {
  type: typeof SET_ADDASSET
  payload: {
    message: string
  }
}

interface ChangePassword {
  type: typeof CHANGE_PASSWORD
  payload: {
    message: string
  }
}

interface SetAddEmployee {
  type: typeof SET_ADDEMPLOYEE
  payload: {
    message: string
  }
}

interface SetAddAsset {
  type: typeof SET_ADDASSET
  payload: {
    message: string
  }
}

interface ChangePassword {
  type: typeof CHANGE_PASSWORD
  payload: {
    message: string
  }
}

interface SetEmployeeDetails {
  type: typeof SET_EMPLOYEE_DETAILS
  payload: { message: string; data: EmployeeType }
}

interface SetServiceDetails {
  type: typeof SET_SERVICE_DETAILS
  payload: { message: string; data: ServiceType[] }
}

interface SetSingleAssetDetails {
  type: typeof SET_SINGLE_ASSET_DETAILS
  payload: { message: string; data: SingleAssetDetailsType }
}
interface SetSingleAssetTickets {
  type: typeof SET_SINGLE_ASSET_TICKETS
  payload: { message: string; data: ServiceType[] }
}

interface setEmployeeAssetDetails {
  type: typeof SET_EMPLOYEE_ASSETS_DETAILS
  payload: {
    message: string
    data: AllocatedAssetType[]
  }
}

interface SetServiceTicketDetails {
  type: typeof SET_SERVICE_TICKET_DETAILS
  payload: {
    message: string
    data: ServiceType
  }
}

interface SetDeAllocateAsset {
  type: typeof DEALLOCATE_EMPLOYEE_ASSET
  payload: {
    message: string
  }
}

interface SetDeleteAsset {
  type: typeof DELETE_ASSET
  payload: {
    message: string
  }
}

interface SetDeleteEmployee {
  type: typeof DELETE_EMPLOYEE
  payload: {
    message: string
  }
}

interface SetDeleteAsset {
  type: typeof DELETE_ASSET
  payload: {
    message: string
  }
}

interface SetDeleteEmployee {
  type: typeof DELETE_EMPLOYEE
  payload: {
    message: string
  }
}

interface CreateTicket {
  type: typeof CREATE_TICKET
  payload: {
    message: string
  }
}

interface SetTicketStatus {
  type: typeof SET_TICKET_STATUS
  payload: {
    message: string
  }
}

interface SetAddNote {
  type: typeof SET_ADD_NOTE
  payload: {
    message: string
  }
}

interface setBrandOptions {
  type: typeof GET_BRAND_OPTIONS
  payload: {
    data: BrandOptions[]
  }
}

interface GetAssetCategoryCount {
  type: typeof GET_TOTAL_ASSETSCATEGORY_COUNT
  payload: {
    data: TotalAssetCountType
  }
}

interface GetFilterOptions {
  type: typeof GET_FILTER_OPTIONS
  payload: {
    data: FilterOptions
  }
}
interface GetAddNote {
  type: typeof GET_ADD_NOTE
  payload: {
    message: string
    data: NoteType[]
  }
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
  | setEmployeeAssetDetails
  | SetDeAllocateAsset
  | SetAllocateAsset
  | CreateTicket
  | SetServiceDetails
  | SetServiceTicketDetails
  | SetEmployeeTicket
  | SetServiceDetails
  | SetTicketStatus
  | SetAddNote
  | SetSingleAssetDetails
  | SetSingleAssetTickets
  | UpdateAssetDetails
  | GetAddNote
  | setBrandOptions
  | GetFilterOptions
  | GetAssetCategoryCount
  | GetTransactionLogs
  | SetDeleteAsset
  | SetDeleteEmployee
