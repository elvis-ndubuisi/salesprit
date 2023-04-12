import { Link, Outlet } from "react-router-dom"

import logo from "../assets/logo.png"
import { MenuButton } from "../components/Button"
import menuList from "../utils/menuList"

// TODO: Fixes pos index route nav active state
export default function PosLayout() {
    return (
        <section className="h-full grid grid-cols-[200px_minmax(300px,_1fr)_min(300px)]">
            <section className="flex flex-col gap-4 border-r-2 border-sl-stroke mt-5">
                <Link to="/pos">
                    <img
                        src={logo}
                        alt="salesprit"
                        className="h-11 object-contain  px-3"
                    />
                </Link>

                <div className=" px-3 w-full h-0 border-b-2 border-sl-stroke" />
                <nav className="py-3">
                    <ul className="flex flex-col gap-3 px-4">
                        {menuList.map((menu) => (
                            <li key={menu.title} className="w-full">
                                <MenuButton
                                    icon={menu.icon}
                                    title={menu.title}
                                    uri={menu.uri}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>

            <Outlet />
        </section>
    )
}
