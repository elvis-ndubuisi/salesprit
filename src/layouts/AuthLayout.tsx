import { Outlet } from "react-router-dom"

// import illustration from "../assets/Illustration.svg"

export default function AuthLayout() {
    return (
        <section className="w-full h-full flex items-center justify-center">
            <section className="h-full flex-1 bg-red-300">
                <img src={""} alt="cartoon lady holding a mobile phone" />
            </section>
            <div></div>
            <section className="h-full flex-1 bg-red-300">
                <Outlet />
            </section>
        </section>
    )
}
