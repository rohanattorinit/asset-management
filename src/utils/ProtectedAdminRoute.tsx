import { Navigate } from "react-router-dom";

export type ProtectedAdminRouteProps = {
  authenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedAdminRoute({
  authenticated,
  authenticationPath,
  outlet,
}: ProtectedAdminRouteProps) {
  if (authenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
