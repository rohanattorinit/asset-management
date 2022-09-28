import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NavigateToBack />} />
      </Routes>
    </BrowserRouter>
  );
}

const NavigateToBack = () => {
  return <Navigate to={{ pathname: "/" }} />;
};

export default AuthRoutes;
