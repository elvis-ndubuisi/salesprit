import { Outlet } from "react-router-dom"

import logo from "../assets/logo.png"

export default function PosLayout() {
    return (
        <section>
            <section>
                <img src={logo} alt="salesprit" />

                <section className="flex flex-col gap-5 px-4">
                    <p>icons</p>
                </section>
            </section>
            <section>
                <Outlet />
            </section>
        </section>
    )
}
