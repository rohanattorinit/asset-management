import { combineReducers } from "redux";
import adminReducer from "./AdminReducer";
import employeeReducer from "./EmployeeReducer";

const RootReducer = combineReducers({
  admin: adminReducer,
  employee: employeeReducer,
});

export default RootReducer;
