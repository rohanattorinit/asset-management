import { CREATE_TICKET, GET_ADD_NOTE, SET_EMPTICKETS } from './../types'
import { Dispatch } from 'redux'
import {
  CHANGE_PASSWORD,
  DispatchTypes,
  LOADING,
  LOADING_DATA,
  SET_EMPLOYEE,
  SET_EMPLOYEE_ASSETS,
  SET_ERROR,
  UPDATE_EMPLOYEE_DETAILS
} from '../types'
import { get, post } from '../../services'
interface UpdateType {
  name?: string
  email?: string
  phone?: string
  location?: string
  jobTitle?: string
}
export const getEmployeeAssets = (empId: string) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await get(`/api/assets/employeeAssets/${empId}`)
    dispatch({ type: SET_EMPLOYEE_ASSETS, payload: (res as any)?.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching Employee's Assets Details`
    })
  }
}

export const getEmployee = (empId: string) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await get(`/api/employees/${empId}`)
    dispatch({ type: SET_EMPLOYEE, payload: (res as any)?.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching Employees Details`
    })
  }
}

export const updateEmployeeDetails = (
  empId: string,
  updateData: UpdateType
) => async (dispatch: Dispatch<DispatchTypes>) => {
  dispatch({ type: LOADING })
  try {
    const res = await post(`/api/employees/update/${empId}`, updateData)
    dispatch({ type: UPDATE_EMPLOYEE_DETAILS, payload: (res as any)?.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while Updating Employee Information`
    })
  }
}

export const changePassword = (password: string) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING })
  try {
    const res = await post(`/api/auth/changePassword/`, {
      password: password
    })
    dispatch({ type: CHANGE_PASSWORD, payload: (res as any)?.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while updating Employee Password`
    })
  }
}

export const createTicket = (
  empId: string,
  assetId: number,
  title: string,
  description: string
) => async (dispatch: Dispatch<DispatchTypes>) => {
  dispatch({ type: LOADING })
  try {
    const res = await post(`/api/tickets/createTicket`, {
      empId,
      assetId,
      title,
      description
    })
    dispatch({ type: CREATE_TICKET, payload: (res as any)?.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${(error as any).response.status}: Error occured while Creating Ticket`
    })
  }
}

export const getEmployeeTickets = (empId: string) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING })
  try {
    const res = await get(`/api/tickets/employeeTickets/${empId}`)
    dispatch({ type: SET_EMPTICKETS, payload: (res as any)?.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching Status of Ticket`
    })
  }
}

export const getNote = (ticketId: number) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await get(`/api/tickets/getTicketDetails/${ticketId}`)
    dispatch({ type: GET_ADD_NOTE, payload: (res as any)?.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: (error as any)?.response?.data?.error || ''
    })
  }
}
