import React from "react"
import { Outlet } from "react-router-dom"

import Splash from "../screens/Splash"

export default function AppLayout() {
    const [authed, setAuthed] = React.useState<boolean>(false)

    // Get auth
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setAuthed(true)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <main className="w-screen h-screen max-w-[1366px] max-h-[1024px] bg-white">
            {authed ? <Outlet /> : <Splash />}
        </main>
    )
}
