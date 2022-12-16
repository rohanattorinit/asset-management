import {
  AssetTransactionHistory,
  AssetCategoryCount,
  ASSET_TRANSACTION_HISTORY,
  BrandOptions,
  DELETE_ASSET,
  DELETE_EMPLOYEE,
  FilterOptions,
  GET_BRAND_OPTIONS,
  GET_FILTER_OPTIONS,
  GET_TOTAL_ASSETSCATEGORY_COUNT,
  SET_ADD_NOTE,
  SET_SINGLE_ASSET_DETAILS,
  SET_TICKET_STATUS,
  SingleAssetDetailsType,
  UPDATE_ASSET_DETAILS,
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
  SET_SINGLE_ASSET_TICKETS,
  Counts,
} from "./../types";

interface InitialState {
  loading: boolean;

  employees: EmployeeType[];
  assets: AssetTypes[];
  employeeDetails: EmployeeType;
  singleAssetDetails: SingleAssetDetailsType;
  singleAssetTickets: ServiceType[];
  employeeassetsdetails: AllocatedAssetType[];
  serviceDetails: ServiceType[];
  serviceticketdetails: ServiceType;
  error?: string;
  message: string;
  brandOptions: BrandOptions[];
  totalAssetCount: AssetCategoryCount[];
  totalSurplusAssetCount: AssetCategoryCount[];
  counts: Counts;
  filterOptions: FilterOptions;
  assetTrasactionLogs: AssetTransactionHistory[];
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
  singleAssetDetails: {
    assetId: 0,
    brandName: "",
    name: "",
    modelNo: 0,
    description: "",
    status: "",
    isRented: 0,
    empName: "",
    empId: "",
    vendor: "",
    rent: 0,
    deposit: 0,
    rentStartDate: "",
    rentEndDate: "",
    asset_location: "",
    processor: "",
    screen_type: "",
    received_date: "",
    ram: "",
    operating_system: "",
    screen_size: "",
    category: "",
    imeiNo: "",
    connectivity: "",
    cableType: "",
    ssd: "",
    hdd: "",
    os_version: "",
    make_year: "",
    is_active: true,
  },
  singleAssetTickets: [],
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
  brandOptions: [],
  totalSurplusAssetCount: [],
  totalAssetCount: [],
  counts: {
    totalAssets: 0,
    ownAssets: 0,
    rentedAssets: 0,
    surplusAssets: 0,
    WorkingAssets: 0,
    RepairabaleAssets: 0,
    brokenAssets: 0,
    allocatedAssets: 0,
  },
  filterOptions: {
    category: [],
    status: [],
    processor: [],
    screen_size: [],
    ram: [],
    screen_type: [],
    asset_location: [],
    operating_system: [],
    cableType: [],
    connectivity: [],
    ssd: [],
    hdd: [],
    brandName: [],
  },
  assetTrasactionLogs: [],
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

    case UPDATE_ASSET_DETAILS:
      return {
        ...state,
        loading: false,
        message: action.payload?.message,
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
    case SET_SINGLE_ASSET_DETAILS:
      return {
        ...state,
        singleAssetDetails: action.payload?.data,
        loading: false,
      };

    case SET_SINGLE_ASSET_TICKETS:
      return {
        ...state,
        singleAssetTickets: action.payload?.data,
        loading: false,
      };

    case SET_SERVICE_DETAILS:
      return {
        ...state,
        serviceDetails: action.payload?.data,
        loading: false,
      };

    case ASSET_TRANSACTION_HISTORY:
      return {
        ...state,
        assetTrasactionLogs: action.payload?.data,

        loading: false,
      };

    case DEALLOCATE_EMPLOYEE_ASSET:
      return {
        ...state,
        message: action.payload?.message,
        loading: false,
      };

    case DELETE_ASSET:
      return {
        ...state,
        message: action.payload?.message,
        loading: false,
      };

    case DELETE_EMPLOYEE:
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

    case GET_BRAND_OPTIONS:
      return {
        ...state,
        brandOptions: action.payload?.data,
        loading: false,
      };

    case GET_TOTAL_ASSETSCATEGORY_COUNT:
      return {
        ...state,
        totalAssetCount: action.payload?.data?.totalAssetCount,
        totalSurplusAssetCount: action.payload?.data?.totalSurplusCount,
        counts: action.payload?.data?.counts,
        loading: false,
      };

    case GET_FILTER_OPTIONS:
      return {
        ...state,
        filterOptions: action.payload?.data,
        loading: false,
      };

    default:
      return state;
  }
};

export default adminReducer;
