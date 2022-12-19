import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../types";



const initialState = { loading: false,

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
    assetTrasactionLogs: [], } as  InitialState;

const adminSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    setLoading(state) {
            state.loading= true;
            state.message = "";
            state.error= "";
    },
    setEmployees(state, action){
        state.employees = action.payload?.data;
        state.loading = false;
    },
    setAssets(state, action) {
        state.assets =  action.payload?.data;
        state.loading = false;
    },
    setMessage(state, action) {
        state.message = action.payload?.message;
        state.loading = false;
    },
    setEmployeesAssetDetails(state, action) {
        state.employeeassetsdetails = action.payload?.data;
        state.loading = false;
    },
    setServiceTicketDetails(state, action) {
        state.serviceticketdetails = action.payload?.data;
        state.loading = false;
    },
    setSingleAssetDetails(state, action) {
        state.singleAssetDetails = action.payload?.data;
        state.loading = false;
    },
    setSingleAssetTicketDetails(state, action) {
        state.singleAssetTickets = action.payload?.data;
        state.loading = false;
    },
    setServiceDetails(state, action) {
        state.serviceDetails = action.payload?.data;
        state.loading = false;
    },
    setAssetTransactionHistory(state, action) {
        state.assetTrasactionLogs = action.payload?.data;
        state.loading = false;
    },
    setError(state, action) {
        state.error = action.payload;
        state.loading = false;
    },
    setBrandOptions(state, action) {
        state.brandOptions = action.payload?.data;
        state.loading = false;
    },
    setTotalAssetCategoryCounts(state, action) {
        state.totalAssetCount = action.payload?.data?.totalAssetCount
        state.totalSurplusAssetCount = action.payload?.data?.totalSurplusCount;
        state.counts = action.payload?.data?.counts;
        state.loading = false;
    },
    setFilterOptions(state, action){
        state.filterOptions =  action.payload?.data;
        state.loading = false;
    },
  },
});
export const adminActions = adminSlice.actions;

export default adminSlice.reducer;
