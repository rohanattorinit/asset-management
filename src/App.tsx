import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Dashboard from "./pages/employee/Dashboard";
import Profile from "./pages/employee/Profile";
import Asset from "./pages/employee/Asset";
import Ticket from "./pages/employee/Ticket";
import Login from "./pages/Login";

import EmpList from "./pages/admin/EmployeeList";

import Assets from "./pages/admin/Assets";
import Services from "./pages/admin/Services";

import ProtectedRoute, { ProtectedRouteProps } from "./utils/ProtectedRoute";
import ProtectedAdminRoute, {
  ProtectedAdminRouteProps,
} from "./utils/ProtectedAdminRoute";

import { useSelector } from "react-redux";
import { RootStore } from "./redux/store";
import { AddEmployee } from "./pages/admin/AddEmployee";
import { AddAsset } from "./pages/admin/AddAsset";
import ProtectedLoginRoute, {
  LoginRouteProps,
} from "./utils/ProtectedLoginRoute";

function App() {
  const {
    authenticated,
    user: { isAdmin },
  } = useSelector((state: RootStore) => state.login);

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    authenticated: authenticated && !isAdmin,
    authenticationPath: "/login",
  };

  const defaultLoginRouteProps: Omit<LoginRouteProps, "outlet"> = {
    authenticated: authenticated,
    isAdmin: isAdmin,
  };

  const defaultProtectedAdminRouteProps: Omit<
    ProtectedAdminRouteProps,
    "outlet"
  > = {
    authenticated: authenticated && isAdmin,
    authenticationPath: "/login",
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/login"
            element={
              <ProtectedLoginRoute
                {...defaultLoginRouteProps}
                outlet={<Login />}
              />
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Dashboard />}
              />
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Profile />}
              />
            }
          />
          <Route
            path="/asset"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Asset />}
              />
            }
          />
          <Route
            path="/ticket"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Ticket />}
              />
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute
                {...defaultProtectedAdminRouteProps}
                outlet={<AdminDashboard />}
              />
            }
          />
          <Route
            path="/admin/employee"
            element={
              <ProtectedAdminRoute
                {...defaultProtectedAdminRouteProps}
                outlet={<EmpList />}
              />
            }
          />
          <Route
            path="/admin/assets"
            element={
              <ProtectedAdminRoute
                {...defaultProtectedAdminRouteProps}
                outlet={<Assets />}
              />
            }
          />

          <Route
            path="/admin/service"
            element={
              <ProtectedAdminRoute
                {...defaultProtectedAdminRouteProps}
                outlet={<Services />}
              />
            }
          />

          <Route
            path="/admin/employee/create"
            element={
              <ProtectedAdminRoute
                {...defaultProtectedAdminRouteProps}
                outlet={<AddEmployee />}
              />
            }
          />
          <Route
            path="/admin/assets/create"
            element={
              <ProtectedAdminRoute
                {...defaultProtectedAdminRouteProps}
                outlet={<AddAsset />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
