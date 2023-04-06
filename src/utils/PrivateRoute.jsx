import { Navigate, Outlet } from "react-router-dom";
import { useAuthenticated } from "../hooks/useAuthenticated";

const PrivateRoute = () => {
    const [state] = useAuthenticated();
    return state && state.isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to='/login' />
    );
};

export default PrivateRoute;
