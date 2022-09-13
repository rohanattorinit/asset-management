import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
  authenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  authenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (authenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
