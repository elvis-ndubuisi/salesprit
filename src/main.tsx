import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css"
import AppLayout, { appLoader } from "./layouts/AppLayout"
import PosLayout from "./layouts/PosLayout"
import AuthLayout from "./layouts/AuthLayout"
import SettingsLayout from "./layouts/SettingsLayout"
import MessageLayout from "./layouts/MessageLayout"
import Splash from "./screens/Splash"
import Login from "./screens/Login"
import SignUp from "./screens/SignUp"
import ForgetPassword from "./screens/ForgetPassword"
import ResetPassword from "./screens/ResetPassword"
import PasswordChanged from "./screens/PasswordChanged"
import Main from "./screens/Main"
import Dashboard from "./screens/Dashboard"
import Order from "./screens/Order"
import Product from "./screens/Product"
import Notification from "./screens/Notification"
import Customers from "./screens/Customers"
import Message, { messageLoader } from "./screens/Message"
import PersonalInfo from "./screens/settings/PersonalInfo"
import Setting from "./screens/Setting"

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        loader: appLoader,
        children: [
            {
                path: "pos",
                element: <PosLayout />,
                children: [
                    { index: true, element: <Main /> },
                    { path: "dashboard", element: <Dashboard /> },
                    { path: "order", element: <Order /> },
                    { path: "product", element: <Product /> },
                    {
                        path: "notification",
                        element: <Notification />,
                    },
                    {
                        path: "customers",
                        element: <Customers />,
                    },
                    {
                        path: "message",
                        element: <MessageLayout />,
                        children: [
                            {
                                path: ":id",
                                element: <Message />,
                                loader: messageLoader,
                            },
                        ],
                    },
                    {
                        path: "setting",
                        element: <SettingsLayout />,
                        children: [
                            { index: true, element: <PersonalInfo /> },
                            { path: "info", element: <PersonalInfo /> },
                            {
                                path: "add-employee",
                                element: <div>add employee</div>,
                            },
                            {
                                path: "select",
                                element: <div>select employee</div>,
                            },
                            {
                                path: "opening-hours",
                                element: <div>opening hours</div>,
                            },
                            {
                                path: "login-password",
                                element: <div>login and password</div>,
                            },
                            {
                                path: "language-region",
                                element: <div>language and region</div>,
                            },
                        ],
                    },
                ],
            },
            {
                element: <AuthLayout />,
                children: [
                    { path: "login", element: <Login /> },
                    { path: "register", element: <SignUp /> },
                    { path: "forget-password", element: <ForgetPassword /> },
                    { path: "reset-password", element: <ResetPassword /> },
                    { path: "logout", element: <div>log out elem</div> },
                ],
            },
            { path: "splash", element: <Splash /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
