import {adminActions} from './../reducers/Adminslice'

import {
    AssetTypes,
    CreateAssetType,
    GetAssetParams,
    GetEmployeeParams,
    GetTicketParams,
    SetFilterParams,
  } from "./../types";
  
  import {
    CreateEmployeeType,
  } from "./../types";
  import { Dispatch } from "redux";
  import { get, post } from "../../services";
  

  
  export const getEmployees =
    (employeeParams: GetEmployeeParams = {}) =>
    async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const { name } = employeeParams;
        const res = await get(`/api/employees?name=${name}`);
        dispatch(adminActions.setEmployees((res as any).data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching employee data`));
      }
    };
  
  export const setAssetFilters =
    (
      filterParams: SetFilterParams = {},
      searchParams: GetAssetParams = {},
      signal: any
    ) =>
    async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const { name, allocate, isRented } = searchParams;
        const res = await post(
          `/api/assets/filter?allocate=${allocate}&isRented=${isRented}&name=${name}`,
          filterParams,
          signal
        );
        dispatch(adminActions.setAssets((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response?.status
        }: Error occured while fetching asset filter data`));
      }
    };
  export const getAssets =
    (assetParams: GetAssetParams = {}) =>
    async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
  
      try {
        const { name, allocate, isRented } = assetParams;
  
        const res = await get(
          `/api/assets?allocate=${allocate}&isRented=${isRented}&name=${name}`
        );
  
        dispatch(adminActions.setAssets((res as any).data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching asset data`));
      }
    };
  
  export const getTickets =
    (ticketParams: GetTicketParams = {}) =>
    async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        let { title, status } = ticketParams;
        const res = await get(`/api/tickets?status=${status}&title=${title}`);
        dispatch(adminActions.setServiceDetails((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching ticket data`));
      }
    };
  
  export const addEmployee =
    (employeeDetails: CreateEmployeeType) =>
    async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await post("/api/employees", employeeDetails);
        dispatch(adminActions.setMessage((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while Adding Employee Details`));
      }
    };
  
  export const addAsset =
    (assetDetails: CreateAssetType) =>
    async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await post("/api/assets/addAsset", assetDetails);
  
        //alert((res as any)?.data?.message);
        dispatch(adminActions.setMessage((res as any)?.data ));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response?.status
        }: Error occured while Adding Asset`));
      }
    };
  
  export const updateAssetDetails =
    (assetId: number, updateData: AssetTypes) =>
    async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await post(`/api/assets/update/${assetId}`, updateData);
  
        //alert('Asset Details Updated Successfully!')
  
        dispatch(adminActions.setMessage((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while Updating Asset Information`));
      }
    };
  
  export const getEmployeeDetails =
    (empId: string) => async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await get(`/api/employees/${empId}`);
        dispatch(adminActions.setEmployees((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching Employee Details`));
      }
    };
  
  export const getAssetDetails =
    (empId: string) => async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await get(`/api/assets/employeeAssets/${empId}`);
        dispatch(adminActions.setEmployeesAssetDetails((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching Assets Details`));
      }
    };
  
  export const getServiceDetails =
    () => async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await get(`/api/tickets`);
        dispatch(adminActions.setServiceDetails((res as any)?.data ));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching Ticket Requests`));
      }
    };
  
  export const getServiceTicketDetails =
    (ticketId: number) => async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await get(`/api/tickets/${ticketId}`);
        dispatch(adminActions.setServiceTicketDetails((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching Ticket Details`));
      }
    };
  
  export const getSingleAssetDetails =
    (assetId: string) => async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await get(`/api/assets/singleAsset/${assetId}`);
        dispatch(adminActions.setSingleAssetDetails({
          message: (res as any)?.data?.message,
          data: (res as any)?.data?.data?.asset,
        }));
        dispatch(adminActions.setSingleAssetTicketDetails({
          message: (res as any)?.data?.message,
          data: (res as any)?.data?.data?.tickets,
        }));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching Asset Details`));
      }
    };
  
  export const deallocateAssets =
    (empId: string, assetId: number) =>
    async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await post(
          `/api/admin/deallocateAsset/${empId}/${assetId}`,
          {}
        );
  
        dispatch(adminActions.setMessage((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while Dealloting Assets`));
      }
    };
  
  export const allocateAssets =
    (empId: string, allocationObj: any) =>
    async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
  
      try {
        const res = await post(`/api/admin/allocateAsset/${empId}/`, {
          allocationObj,
        });
  
        dispatch(adminActions.setMessage((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while allocating Assets`));
      }
    };
  
  export const changeTicketStatus =
    (ticketId: number, status: string) =>
    async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await post(`/api/tickets/changeStatus/${ticketId}`, {
          status,
        }); 
        dispatch(adminActions.setMessage((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while updating ticket status`));
      }
    };
  
  export const addNote =
    (ticketId: number, note: string) =>
    async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await post(`/api/tickets/note/${ticketId}`, { note });
        dispatch(adminActions.setMessage((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while submitting note`));
      }
    };
  
  export const getBrandOptions =
    () => async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await get(`/api/brands`);
  
        dispatch(adminActions.setBrandOptions((res as any)?.data ));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching brands`));
      }
    };
  
  export const getfilterOptions =
    () => async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await get(`/api/assets/filterOptions`);
  
        dispatch(adminActions.setFilterOptions((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while Deleting an Assets`));
      }
    };
  
  export const deleteAsset =
    (empId: string, assetId: number) =>
    async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await post(`/api/assets/delete/${assetId}`, {});
  
        dispatch(adminActions.setMessage((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while Deleting an Assets`));
      }
    };
  
  export const deleteEmployee =
    (empId: string) => async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        const res = await post(`/api/employees/delete/${empId}`, {});
  
        dispatch(adminActions.setMessage((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while Deleting an Assets`));
      }
    };
  
  export const getFiltersByCategory =
    (category: string[]) => async (dispatch: Dispatch) => {
      dispatch(adminActions.setLoading());
      try {
        let url = `/api/assets/filterOptions?`;
        category.forEach((val) => {
          url += `category=${val}&`;
        });
        const res = await get(url);
        dispatch(adminActions.setFilterOptions((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching brands`));
      }
    };
  
  export const getAssetTransactionLog =
    (assetId: string) => async (dispatch: Dispatch) => {
      dispatch(adminActions?.setLoading());
      try {
        const res = await get(`/api/transactions/logs/${assetId}`);
        dispatch(adminActions.setAssetTransactionHistory((res as any)?.data));
      } catch (error) {
        dispatch(adminActions.setError((error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching brands`));
      }
    };
  
  export const getTotalAssetCategoryCounts =  () => async (dispatch: Dispatch) => {
      dispatch(adminActions?.setLoading());
      try {
        const res = await get(`/api/transactions/categoryCount`);
  
        dispatch(adminActions?.setTotalAssetCategoryCounts((res as any)?.data));
      } catch (error) {
        dispatch(adminActions?.setError( (error as any)?.response?.data?.error ||
        `${
          (error as any).response.status
        }: Error occured while fetching count of Toatal Assets`));
      }
    };
  