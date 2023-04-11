import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "../utils/PrivateRoute";
import Login from "../components/Login/Login";
import HomePage from "../pages/Home";
import AdminLayout from "../components/AdminLayout";
import Dashboard from "../components/Dashboard";
import Users from "../components/Users";
import Settings from "../components/Settings";
import NewsUz from "../components/NewsUz";
import NewsEn from "../components/NewsEn";
import NewsRu from "../components/NewsRu";

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/' element={<Navigate to='/home' />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/admin' element={<AdminLayout />} />
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                    <Route path='/admin/users' element={<Users />} />
                    <Route path='/admin/settings' element={<Settings />} />
                    <Route path='/admin/news/uz' element={<NewsUz />} />
                    <Route path='/admin/news/en' element={<NewsEn />} />
                    <Route path='/admin/news/ru' element={<NewsRu />} />
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
};

export default Root;
