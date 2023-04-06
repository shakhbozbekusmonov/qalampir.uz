import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { TOKEN_NAME } from "../../tools/constants";

const Context = createContext();

const initialState = {
    isAuthenticated: localStorage.getItem(TOKEN_NAME) || "",
};

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
