import { Navigate } from "react-router-dom";

export type LoginRouteProps = {
  authenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedLoginRoute({
  authenticated,
  authenticationPath,
  outlet,
}: LoginRouteProps) {
  if (authenticated) {
    return <Navigate to={{ pathname: authenticationPath }} />;
  } else {
    return outlet;
  }
}
