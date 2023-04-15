import { Outlet, NavLink } from "react-router-dom"
import { HiChevronRight, HiPencil } from "react-icons/hi2"

export default function SettingsLayout() {
    return (
        <section className="col-span-2 h-screen p-5">
            <h4 className="section-heading">setting</h4>
            <section className="h-[90%] my-4 grid grid-cols-[min(30%)_1fr] gap-4">
                <section className="flex flex-col items-start justify-between">
                    <div className="w-full h-[50%] grid place-content-center border-b-2 border-sl-stroke">
                        <div className="relative grid place-content-center">
                            <img
                                src=""
                                alt="name of profile"
                                className="h-32 aspect-square rounded-full bg-black"
                            />
                            <button
                                type="button"
                                className="border-2 border-white rounded-full h-9 w-9 aspect-square bg-sl-secondary absolute top-3 right-0 text-white grid place-content-center"
                            >
                                <HiPencil size={20} />
                            </button>
                        </div>
                        <h3 className="font-bold text-center text-xl my-4 mb-2">
                            Soul Goodmate
                        </h3>
                        <h4 className="font-medium text-sl-grey capitalize text-center">
                            head manager
                        </h4>
                    </div>

                    <nav className="flex flex-col w-full">
                        <NavLink
                            to="info"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center justify-between text-sl-primary font-medium text-lg capitalize"
                                    : "flex items-center justify-between text-sl-secondary/90 font-medium text-lg capitalize"
                            }
                        >
                            personal information
                            <HiChevronRight size={20} />
                        </NavLink>
                        <NavLink
                            to=""
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center justify-between text-sl-primary font-medium text-lg capitalize"
                                    : "flex items-center justify-between text-sl-secondary/90 font-medium text-lg capitalize"
                            }
                        >
                            employees management
                            <HiChevronRight size={20} />
                        </NavLink>
                        <NavLink
                            to="opening-hours"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center justify-between text-sl-primary font-medium text-lg capitalize"
                                    : "flex items-center justify-between text-sl-secondary/90 font-medium text-lg capitalize"
                            }
                        >
                            opening hours
                            <HiChevronRight size={20} />
                        </NavLink>
                        <NavLink
                            to="login-password"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center justify-between text-sl-primary font-medium text-lg capitalize"
                                    : "flex items-center justify-between text-sl-secondary/90 font-medium text-lg capitalize"
                            }
                        >
                            login & password
                            <HiChevronRight size={20} />
                        </NavLink>
                        <NavLink
                            to="language-region"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center justify-between text-sl-primary font-medium text-lg capitalize"
                                    : "flex items-center justify-between text-sl-secondary/90 font-medium text-lg capitalize"
                            }
                        >
                            language & region
                            <HiChevronRight size={20} />
                        </NavLink>
                    </nav>

                    <button className="linkable-button" type="button">
                        logout
                    </button>
                </section>

                <section className="max-w-2xl">
                    <Outlet />
                </section>
            </section>
        </section>
    )
}
