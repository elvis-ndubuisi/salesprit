import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store"

import "./index.css"
import AppLayout, { appLoader } from "./layouts/AppLayout"
import PosLayout from "./layouts/PosLayout"
import AuthLayout from "./layouts/AuthLayout"
import SettingsLayout from "./layouts/SettingsLayout"
import MessageLayout from "./layouts/MessageLayout"
import Login from "./screens/Login"
import SignUp from "./screens/SignUp"
import ForgetPassword from "./screens/ForgetPassword"
import ResetPassword from "./screens/ResetPassword"
import PasswordChanged from "./screens/PasswordChanged"
import Main from "./screens/Main"
import Dashboard from "./screens/Dashboard"
import Order from "./screens/Order"
import Product from "./screens/product/Product"
import AddProduct from "./screens/product/AddProduct"
import EditProduct from "./screens/product/EditProduct"
import Notification from "./screens/Notification"
import Customers from "./screens/Customers"
import Message from "./screens/Message"
import PersonalInfo from "./screens/settings/PersonalInfo"
import OpeningHours from "./screens/settings/OpeningHours"
import LangRegion from "./screens/settings/LangRegion"
import EmployeeManagement from "./screens/settings/EmployeeManagement"
import LoginPassword from "./screens/settings/LoginPassword"

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        loader: appLoader,
        children: [
            {
                path: "/",
                element: <PosLayout />,
                children: [
                    { index: true, element: <Main /> },
                    { path: "dashboard", element: <Dashboard /> },
                    { path: "order", element: <Order /> },
                    { path: "product", element: <Product /> },
                    { path: "product/add", element: <AddProduct /> },
                    { path: "product/edit", element: <EditProduct /> },
                    { path: "notification", element: <Notification /> },
                    { path: "customers", element: <Customers /> },
                    {
                        path: "message",
                        element: <MessageLayout />,
                        children: [
                            {
                                path: ":id",
                                element: <Message />,
                            },
                        ],
                    },
                    {
                        path: "setting",
                        element: <SettingsLayout />,
                        children: [
                            { path: "/setting", element: <PersonalInfo /> },
                            {
                                path: "employee",
                                element: <EmployeeManagement />,
                            },
                            {
                                path: "opening-hours",
                                element: <OpeningHours />,
                            },
                            {
                                path: "login-password",
                                element: <LoginPassword />,
                            },
                            {
                                path: "language-region",
                                element: <LangRegion />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    { path: "login", element: <Login /> },
                    { path: "register", element: <SignUp /> },
                    { path: "forget-password", element: <ForgetPassword /> },
                    { path: "reset-password", element: <ResetPassword /> },
                ],
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
