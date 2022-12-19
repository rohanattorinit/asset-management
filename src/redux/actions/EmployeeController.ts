import { employeeActions } from './../reducers/EmployeeSlice';
import { Dispatch } from 'redux'

import { get, post } from '../../services'
import { UpdateType } from '../types';

export const getEmployeeAssets = (empId: string) => async (
  dispatch: Dispatch
) => {
  dispatch(employeeActions.setLoading())
  try {
    const res = await get(`/api/assets/employeeAssets/${empId}`)
    dispatch(employeeActions.setEmployeeAssets((res as any)?.data))
  } catch (error) {
    dispatch(employeeActions.setError((error as any)?.response?.data?.error ||
    `${
      (error as any).response.status
    }: Error occured while fetching Employee's Assets Details`))
  }
}

export const getEmployee = (empId: string) => async (
  dispatch: Dispatch
) => {
  dispatch(employeeActions.setLoading())
  try {
    const res = await get(`/api/employees/${empId}`)
    dispatch(employeeActions.setEmployee((res as any)?.data))
  } catch (error) {
    dispatch(employeeActions.setError(   (error as any)?.response?.data?.error ||
    `${
      (error as any).response.status
    }: Error occured while fetching Employees Details`))
  }
}

export const updateEmployeeDetails = (
  empId: string,
  updateData: UpdateType
) => async (dispatch: Dispatch) => {
  dispatch(employeeActions.setLoading())
  try {
    const res = await post(`/api/employees/update/${empId}`, updateData)
    dispatch(employeeActions.setMessage((res as any)?.data))
  } catch (error) {
    dispatch(employeeActions.setError((error as any)?.response?.data?.error ||
    `${
      (error as any).response.status
    }: Error occured while Updating Employee Information`))
  }
}

export const changePassword = (password: string) => async (
  dispatch: Dispatch
) => {
  dispatch(employeeActions.setLoading())
  try {
    const res = await post(`/api/auth/changePassword/`, {
      password: password
    })
    dispatch(employeeActions.setMessage((res as any)?.data))
  } catch (error) {
    dispatch(employeeActions.setError((error as any)?.response?.data?.error ||
    `${
      (error as any).response.status
    }: Error occured while updating Employee Password`))
  }
}

export const createTicket = (
  empId: string,
  assetId: number,
  title: string,
  description: string
) => async (dispatch: Dispatch) => {
  dispatch(employeeActions.setLoading())
  try {
    const res = await post(`/api/tickets/createTicket`, {
      empId,
      assetId,
      title,
      description
    })
    dispatch(employeeActions.setMessage((res as any)?.data ))
  } catch (error) {
    dispatch(employeeActions.setError((error as any)?.response?.data?.error ||
    `${(error as any).response.status}: Error occured while Creating Ticket`))
  }
}

export const getEmployeeTickets = (empId: string) => async (
  dispatch: Dispatch
) => {
  dispatch(employeeActions.setLoading())
  try {
    const res = await get(`/api/tickets/employeeTickets/${empId}`)
    dispatch(employeeActions.setEmployeetickets((res as any)?.data))
  } catch (error) {
    dispatch(employeeActions.setError((error as any)?.response?.data?.error ||
    `${
      (error as any).response.status
    }: Error occured while fetching Status of Ticket`))
  }
}

export const getNote = (ticketId: number) => async (
  dispatch: Dispatch
) => {
  dispatch(employeeActions.setLoading())
  try {
    const res = await get(`/api/tickets/getTicketDetails/${ticketId}`)
    dispatch(employeeActions.setNoteDetails((res as any)?.data))
  } catch (error) {
    dispatch(employeeActions.setError((error as any)?.response?.data?.error || ''))
  }
}
