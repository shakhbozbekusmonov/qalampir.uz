import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "../utils/PrivateRoute";
import Login from "../components/Login/Login";

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<h1>Home</h1>} />
                <Route path='/' element={<Navigate to='/home' />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/admin' element={<h2>Admin</h2>} />
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
};

export default Root;
