import React from "react"
import { Outlet, useLoaderData, defer, Await } from "react-router-dom"

import Splash from "../screens/Splash"
import sleep from "../utils/sleep"

export default function AppLayout() {
    const { data } = useLoaderData()
    console.log(data)

    return (
        <main className="w-screen h-screen max-w-[1366px] max-h-[1024px] bg-white">
            <React.Suspense fallback={<Splash />}>
                <Await resolve={data} errorElement={<div>error in await</div>}>
                    {(d) => <Outlet />}
                </Await>
            </React.Suspense>
        </main>
    )
}

async function getme() {
    await sleep(6000)
    return { auth: true, name: "el" }
}
export async function appLoader() {
    return defer({ data: getme() })
}
