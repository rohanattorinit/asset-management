import {
  CHANGE_PASSWORD,
  DispatchTypes,
  EmployeeAssetType,
  EmployeeType,
  LOADING,
  LOADING_DATA,
  SET_EMPLOYEE,
  SET_EMPLOYEE_ASSETS,
  SET_ERROR,
  UPDATE_EMPLOYEE_DETAILS,
  CREATE_TICKET,
  SET_EMPTICKETS,
  EmpTicketType
} from '../types'

interface InitialState {
  loading: boolean
  error?: string
  message: string
  assets: EmployeeAssetType[]
  employee: EmployeeType
  tickets: EmpTicketType[]
}

const initialState: InitialState = {
  loading: false,
  error: '',
  message: '',
  assets: [],
  employee: {
    empId: '',
    name: '',
    email: '',
    phone: undefined,
    location: '',
    isAdmin: false,
    jobTitle: ''
  },
  tickets: []
}

const employeeReducer = (
  state: InitialState = initialState,
  action: DispatchTypes
) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        error: '',
        message: ''
      }
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
        error: '',
        message: ''
      }
    case SET_EMPLOYEE_ASSETS:
      return {
        ...state,
        assets: action.payload.data,
        loading: false,
        error: ''
      }
    case SET_EMPLOYEE:
      return {
        ...state,
        employee: action.payload.data,
        loading: false,
        error: ''
      }
    case UPDATE_EMPLOYEE_DETAILS:
      return {
        ...state,
        loading: false,
        message: action.payload.message
      }
    case CHANGE_PASSWORD:
      return {
        ...state,
        loading: false,
        message: action.payload.message
      }
    case CREATE_TICKET:
      return {
        ...state,
        loading: false,
        message: action.payload.message
      }

    case SET_EMPTICKETS:
      return {
        ...state,
        tickets: action.payload.data,
        loading: false
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    default:
      return state
  }
}

export default employeeReducer
