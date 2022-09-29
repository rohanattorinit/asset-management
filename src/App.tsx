import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import { RootStore } from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { get } from "./services";
const BASE_URL = process.env.REACT_APP_BASE_API;
function App() {
  const [showLoader, setShowLoader] = useState(true);
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootStore) => state.login);
  useEffect(() => {
    (async () => {
      try {
        console.log("useEffect called");
        const res = (await get(`/api/auth/profile`)) as any;
        dispatch({ type: SET_AUTHENTICATED, payload: res.data });
      } catch (error) {
        //@ts-ignore
        if (error?.response?.status === 403) {
        }
      } finally {
        setShowLoader(false);
      }
    })();
  }, []);

  return !showLoader ? (
    <>{!showLoader && authenticated ? <AppRoutes /> : <AuthRoutes />}</>
  ) : (
    <></>
  );
}
export default App;
