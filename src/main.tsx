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

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                element: <PosLayout />,
                // loader: async (params: any) => {
                //     console.log(params)
                // },
                children: [
                    { path: "pos", element: <Splash /> },
                    { path: "pos/dashboard", element: <div>dashboard</div> },
                    { path: "pos/order", element: <div>order</div> },
                    { path: "pos/product", element: <div>product</div> },
                    {
                        path: "pos/notification",
                        element: <div>notification</div>,
                    },
                    {
                        path: "pos/customers",
                        element: <div>customers</div>,
                    },
                    { path: "pos/message", element: <div>message</div> },
                    { path: "pos/setting", element: <div>setting</div> },
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
