import { useContext } from "react";
import { Context } from "../context/Authenticated/authenticated";

export const useAuthenticated = (setterOnly = false) => {
    const ctx = useContext(Context);
    return setterOnly ? [ctx.dispatch] : [ctx.state, ctx.dispatch];
};
