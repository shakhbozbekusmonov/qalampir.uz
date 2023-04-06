import { createContext, useState } from "react";
import { Provider as AuthProvider } from "./Authenticated/authenticated";

const RootContext = createContext();

const RootProvider = ({ children }) => {
    const [state, setState] = useState(null);
    return (
        <RootContext.Provider value={{ state, setState }}>
            <AuthProvider>{children}</AuthProvider>
        </RootContext.Provider>
    );
};

export { RootContext, RootProvider };
