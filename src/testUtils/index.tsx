import { Provider } from "react-redux";
import { BrowserRouter, Routes } from "react-router-dom";
import store from "../redux/store";

export const ProviderWrapper = (props: any) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export const RouterWrapper = (props: any) => {
  return (
    <BrowserRouter>
      <Routes>{props.children}</Routes>
    </BrowserRouter>
  );
};
