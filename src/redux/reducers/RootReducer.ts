import { combineReducers } from "redux";
import adminReducer from "./Adminslice";
import authReducer from "./AuthSlice";
import employeeReducer from "./EmployeeSlice";

const RootReducer = combineReducers({
  admin: adminReducer,
  employee: employeeReducer,
  login: authReducer,
});

export default RootReducer;
