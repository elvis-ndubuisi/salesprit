import { Outlet } from "react-router-dom"

export default function AppLayout() {
    return (
        <main className="w-screen min-h-screen max-w-[1366px] max-h-[1024px] overflow-hidden bg-white">
            <Outlet />
        </main>
    )
}
