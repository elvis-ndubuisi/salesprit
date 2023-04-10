import { Outlet } from "react-router-dom"

export default function PosLayout() {
    return (
        <div>
            <h1 className="text-2xl">POS layout</h1>
            <Outlet />
        </div>
    )
}
