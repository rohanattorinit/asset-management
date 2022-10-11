import {
  ALLOCATE_EMPLOYEE_ASSET,
  CreateAssetType,
  DEALLOCATE_EMPLOYEE_ASSET,
  SET_ADDASSET,
  SET_ADDEMPLOYEE,
  SET_EMPLOYEE_ASSETS_DETAILS,
  SET_TICKET_STATUS
} from './../types'

import {
  SET_EMPLOYEE_DETAILS,
  SET_SERVICE_DETAILS,
  CreateEmployeeType,
  DispatchTypes,
  LOADING_DATA,
  SET_ASSETS,
  SET_EMPLOYEES,
  SET_ERROR,
  SET_SERVICE_TICKET_DETAILS
} from './../types'
import { Dispatch } from 'redux'
import { get, post } from '../../services'
interface GetAssetParams {
  allocate?: boolean
  name?: string
  assetType?: string
  isRented?: 0 | 1
}

interface GetAssetParams {
  allocate?: boolean
  name?: string
  assetType?: string
  isRented?: 0 | 1
}

interface GetEmployeeParams {
  name?: string
}

interface GetTicketParams {
  title?: string
  status?: string
}

export const getEmployees = (employeeParams: GetEmployeeParams = {}) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const { name } = employeeParams
    const res = await get(`/api/employees?name=${name}`)
    dispatch({ type: SET_EMPLOYEES, payload: (res as any).data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching employee data`
    })
  }
}

export const getAssets = (assetParams: GetAssetParams = {}) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })

  try {
    const { name, allocate, assetType, isRented } = assetParams

    const res = await get(
      `/api/assets?allocate=${allocate}&assetType=${assetType}&isRented=${isRented}&name=${name}`
    )
    dispatch({ type: SET_ASSETS, payload: (res as any).data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching asset data`
    })
  }
}

export const getTickets = (ticketParams: GetTicketParams = {}) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })
  try {
    let { title, status } = ticketParams
    const res = await get(`/api/tickets?status=${status}&title=${title}`)
    dispatch({ type: SET_SERVICE_DETAILS, payload: (res as any)?.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching ticket data`
    })
  }
}

export const addEmployee = (employeeDetails: CreateEmployeeType) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await post('/api/employees', employeeDetails)
    alert((res as any).data?.message)
    dispatch({ type: SET_ADDEMPLOYEE, payload: (res as any)?.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while Adding Employee Details`
    })
  }
}

export const addAsset = (assetDetails: CreateAssetType) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await post('/api/assets/addAsset', assetDetails)
    alert((res as any).data.message)
    dispatch({ type: SET_ADDASSET, payload: (res as any)?.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while Adding Assets Details`
    })
  }
}

export const getEmployeeDetails = (empId: string) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await get(`/api/employees/${empId}`)
    dispatch({ type: SET_EMPLOYEE_DETAILS, payload: (res as any)?.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching Employee Details`
    })
  }
}

export const getAssetDetails = (empId: string) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await get(`/api/assets/employeeAssets/${empId}`)
    dispatch({
      type: SET_EMPLOYEE_ASSETS_DETAILS,
      payload: (res as any)?.data
    })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching Assets Details`
    })
  }
}

export const getServiceDetails = () => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await get(`/api/tickets`)
    dispatch({ type: SET_SERVICE_DETAILS, payload: (res as any)?.data })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching Ticket Requests`
    })
  }
}

export const getServiceTicketDetails = (ticketId: number) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await get(`/api/tickets/${ticketId}`)

    dispatch({
      type: SET_SERVICE_TICKET_DETAILS,
      payload: (res as any)?.data
    })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching Ticket Details`
    })
  }
}

export const deallocateAssets = (empId: string, assetId: number) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })
  try {
    const res = await post(`/api/admin/deallocateAsset/${empId}/${assetId}`, {})

    dispatch({
      type: DEALLOCATE_EMPLOYEE_ASSET,
      payload: (res as any)?.data
    })
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload:
        (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while Dealloting Assets`
    })
  }
}

export const allocateAssets = (empId: string, assetId: number[]) => async (
  dispatch: Dispatch<DispatchTypes>
) => {
  dispatch({ type: LOADING_DATA })

  try {
    const res = await post(`/api/admin/allocateAsset/${empId}/`, { assetId })

      dispatch({ type: ALLOCATE_EMPLOYEE_ASSET, payload: (res as any)?.data });
      window.confirm("Do you want to allot asset?");
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while allocating Assets`,
      });
    }
  };

export const changeTicketStatus =
  (ticketId: number, status: string) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      console.log(status);
      const res = await post(`/api/tickets/changeStatus/${ticketId}`, {
        status,
      });
      dispatch({ type: SET_TICKET_STATUS, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while updating ticket status`,
      });
    }
  };

export const addNote =
  (ticketId: number, note: string) =>
  async (dispatch: Dispatch<DispatchTypes>) => {
    dispatch({ type: LOADING_DATA });
    try {
      const res = await post(`/api/tickets/note/${ticketId}`, { note });
      dispatch({ type: SET_TICKET_STATUS, payload: (res as any)?.data });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload:
          (error as any)?.response?.data?.error ||
          `${
            (error as any).response.status
          }: Error occured while submitting note`,
      });
    }
  };
