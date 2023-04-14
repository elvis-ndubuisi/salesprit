import { Outlet, useLoaderData } from "react-router-dom"

export default function AppLayout() {
    const loaderData = useLoaderData()

    return (
        <main className="w-screen h-screen max-w-[1366px] max-h-[1024px] bg-white">
            <Outlet />
        </main>
    )
}

export function appLoader() {
    return { app: "shop", user: "me" }
}
