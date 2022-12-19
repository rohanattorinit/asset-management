import { createSlice } from "@reduxjs/toolkit";
import { EmployeeInitialState } from "../types";

const initialState = { 
    loading: false,
    error: '',
    message: '',
    assets: [],
    employee: {
      empId: '',
      name: '',
      email: '',
      phone: '',
      location: '',
      isAdmin: false,
      jobTitle: ''
    },
    tickets: [],
    noteDetails: [] } as  EmployeeInitialState;

const employeeSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    setLoading(state) {
            state.loading= true;
            state.message = '';
            state.error= "";
    },
    setEmployeeAssets(state, action){
        state.assets = action.payload?.data;
        state.loading = false;
        state.error = ''
    },
    setEmployee(state, action) {
        state.employee = action.payload?.data;
        state.loading = false;
        state.error = ''
    },
    setMessage(state, action) {
        state.message = action.payload?.message;
        state.loading = false;
    },
    setEmployeetickets(state, action){
        state.tickets = action.payload?.data;
        state.loading = false;
    },
    setError(state, action) {
        state.error = action.payload;
        state.loading = false;
    },
    setNoteDetails(state, action) {
        state.noteDetails = action.payload?.data;
        state.loading = false;
    }
  },
});
export const employeeActions = employeeSlice.actions;

export default employeeSlice.reducer;
