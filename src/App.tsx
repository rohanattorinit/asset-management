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
import EmpList from "./pages/admin/EmpList";
import Assets from "./pages/admin/Assets";
import Services from "./pages/admin/Services";
import ProtectedRoute, { ProtectedRouteProps } from "./utils/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootStore } from "./redux/store";

function App() {
  const { authenticated, isAdmin } = useSelector(
    (state: RootStore) => state.login
  );

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    authenticated: authenticated && !isAdmin,
    authenticationPath: "/login",
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
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

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/employee" element={<EmpList />} />
          <Route path="/admin/assets" element={<Assets />} />
          <Route path="/admin/service" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
