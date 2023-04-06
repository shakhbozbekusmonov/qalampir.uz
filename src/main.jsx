import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Root from "./Root/Root";
import "./index.css";
import { RootProvider } from "./context/rootContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RootProvider>
        <Root />
    </RootProvider>
);
