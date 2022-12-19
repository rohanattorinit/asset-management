import { createSlice } from "@reduxjs/toolkit";
import { AuthInitialState } from "../types";

const initialState = {  authenticated: false,
    user: {
      empId: "",
      name: "",
      email: "",
      phone: "",
      location: "",
      isAdmin: false,
      jobTitle: "",
    },
    loading: false,
    error: "", } as  AuthInitialState;

const authSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    setLoading(state) {
            state.loading= true;
            state.error= "";
    },
    setAuthenticated(state, action){
        state.authenticated =  true;
        state.user = action.payload?.user;
        state.loading = false;
        state.error =  "";
    },
    setError(state, action) {
        state.error = action.payload;
        state.loading = false;
    },
    setLogout(state) {
        state.authenticated = false;
        state.user = {
          empId: "",
          name: "",
          email: "",
          phone: "",
          location: "",
          isAdmin: false,
          jobTitle: "",
        };
        state.loading = false;
    }
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
