import type { FC, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import erroebound from "../../assets/Wrong1.gif";
type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary: onReset,
}) => {
  return (
    <div>
      <p>An error has occurred</p>

      <pre>{error.message}</pre>
      <div
        role="alert"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={erroebound} alt="" />
      </div>
    </div>
  );
};

type LayoutErrorBoundaryProps = {
  children: ReactNode;
  onReset?: () => void;
};

export const LayoutErrorBoundary: FC<LayoutErrorBoundaryProps> = ({
  children,
  onReset,
}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
      {children}
    </ErrorBoundary>
  );
};
