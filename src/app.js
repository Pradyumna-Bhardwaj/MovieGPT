import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// passing react element inside root
// root.render(<RouterProvider router={appRouter} />);
