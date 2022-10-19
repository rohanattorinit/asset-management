import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import App from "./App";
import { LayoutErrorBoundary } from "./components/ErrorHandling/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <LayoutErrorBoundary>
        <App />
      </LayoutErrorBoundary>
    </ThemeProvider>
  </Provider>
);
