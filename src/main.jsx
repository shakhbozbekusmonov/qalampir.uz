import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Root from "./root/Root";
import "./index.css";
import { RootProvider } from "./context/rootContext";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RootProvider>
        <ChakraProvider>
            <Root />
        </ChakraProvider>
    </RootProvider>
);
