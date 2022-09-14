import { Navigate } from "react-router-dom";

export type LoginRouteProps = {
  authenticated: boolean;
  outlet: JSX.Element;
  isAdmin: boolean;
};

export default function ProtectedLoginRoute({
  authenticated,
  outlet,
  isAdmin,
}: LoginRouteProps) {
  if (authenticated && isAdmin) {
    return <Navigate to={{ pathname: "/admin" }} />;
  } else if (authenticated && !isAdmin) {
    return <Navigate to={{ pathname: "/" }} />;
  } else {
    return outlet;
  }
}
