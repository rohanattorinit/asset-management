import NotFound from "../components/ErrorHandling/NotFound";

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
    return <NotFound />;
  }
}
