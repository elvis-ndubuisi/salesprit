import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./index.css"
import AppLayout from "./layouts/AppLayout"
import PosLayout from "./layouts/PosLayout"
import AuthLayout from "./layouts/AuthLayout"
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
import Message from "./screens/Message"
import Setting from "./screens/Setting"

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "pos",
                element: <PosLayout />,
                // loader: async (params: any) => {
                //     console.log(params)
                // },
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
                    { path: "message", element: <Message /> },
                    { path: "setting", element: <Setting /> },
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
