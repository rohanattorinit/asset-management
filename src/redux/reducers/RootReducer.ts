import { combineReducers } from "redux";
import adminReducer from "./AdminReducer";
import authReducer from "./AuthReducer";
import employeeReducer from "./EmployeeReducer";

const RootReducer = combineReducers({
  admin: adminReducer,
  employee: employeeReducer,
  login: authReducer,
});

export default RootReducer;
