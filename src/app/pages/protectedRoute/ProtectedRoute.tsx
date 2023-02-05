import React from "react";
import { Outlet } from "react-router-dom";
import Unauthenticated from "../unauthenticated/Unauthenticated";

const useAuth = () => {
    const authState = localStorage.getItem("logged");
    const user = { loggedIn: authState };
    return user && user.loggedIn;
};

const ProtectedRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Unauthenticated />;
};

export default ProtectedRoute;
