import { Outlet } from "react-router-dom"

export default function AppLayout() {
    return (
        <main className="w-screen h-screen max-w-[1366px] max-h-[1024px] bg-white">
            <Outlet />
        </main>
    )
}
