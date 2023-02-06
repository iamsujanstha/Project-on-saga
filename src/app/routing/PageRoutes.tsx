import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import CreatePost from "../pages/createEditPost/CreateEditPost";
import { EditPost } from "../pages/blog/EditPost";
import Post from "../pages/blog/post/Post";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import ProtectedRoute from "../pages/protectedRoute/ProtectedRoute";

const PageRoutes: FC = () => {
    const authState = localStorage.getItem("logged");

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/login" element={authState ? <Navigate to="/" /> : <Login />} />
                <Route path="/posts">
                    <Route path=":id" element={<Post />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/admin" element={<Home />} />
                    <Route path="/admin/edit-post/:id" element={<CreatePost />}>
                        <Route path=":id" element={<EditPost />} />
                    </Route>
                    <Route path="/admin/create-post" element={<CreatePost />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export { PageRoutes };
