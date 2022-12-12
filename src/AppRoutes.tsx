import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AssetDetails from "./pages/admin/AssetDetailsTransaction";
import NotFound from "./components/ErrorHandling/NotFound";
import Navbar from "./components/Navbar/Navbar";
import AddAsset from "./pages/admin/AddAsset";
import AddEmployee from "./pages/admin/AddEmployee";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Assets from "./pages/admin/Assets";
import EmployeeDetails from "./pages/admin/EmployeeDetails";
import EmpList from "./pages/admin/EmployeeList";
import { ServiceDetails } from "./pages/admin/ServiceDetails";
import Services from "./pages/admin/Services";
import Asset from "./pages/employee/Asset";
import Dashboard from "./pages/employee/Dashboard";
import Profile from "./pages/employee/Profile";
import Ticket from "./pages/employee/Ticket";
import ProtectedAdminRoute, {
  ProtectedAdminRouteProps,
} from "./utils/ProtectedAdminRoute";
import ProtectedRoute, { ProtectedRouteProps } from "./utils/ProtectedRoute";
import EmpAssetDetails from "./pages/employee/EmpAssetDetails";
import SideBar from "./components/Sidebar/Sidebar";

function AppRoutes() {
  const { authenticated, user } =
    useSelector((state: { login: any }) => {
      return state.login;
    }) || {};

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    //auth_token
    authenticated: authenticated && !user.isAdmin,
    authenticationPath: "/login",
  };

  const defaultProtectedAdminRouteProps: Omit<
    ProtectedAdminRouteProps,
    "outlet"
  > = {
    authenticated: authenticated && user.isAdmin,
    authenticationPath: "/login",
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedAdminRoute
              {...(user.isAdmin
                ? defaultProtectedAdminRouteProps
                : defaultProtectedRouteProps)}
              outlet={user.isAdmin ? <AdminDashboard /> : <Dashboard />}
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
          path="/assets/:assetId"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<EmpAssetDetails />}
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
        <Route
          path="/admin/employee/:empId"
          element={
            <ProtectedAdminRoute
              {...defaultProtectedAdminRouteProps}
              outlet={<EmployeeDetails />}
            />
          }
        />

        <Route
          path="/admin/assets/:assetId"
          element={
            <ProtectedAdminRoute
              {...defaultProtectedAdminRouteProps}
              outlet={<AssetDetails />}
            />
          }
        />

        <Route
          path="/admin/service/:ticketId"
          element={
            <ProtectedAdminRoute
              {...defaultProtectedAdminRouteProps}
              outlet={<ServiceDetails />}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
