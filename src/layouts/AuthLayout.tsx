import { Outlet } from "react-router-dom"

import illustration from "../assets/illustrations/Illustration.svg"
import line from "../assets/patterns/line.svg"
import vector from "../assets/patterns/vector.svg"
import vector1 from "../assets/patterns/vector-1.svg"
import vector2 from "../assets/patterns/vector-2.svg"
import vector3 from "../assets/patterns/vector-3.svg"
import bubbles from "../assets/patterns/bubble-pattern.svg"

export default function AuthLayout() {
    return (
        <section className="w-full h-full flex items-center justify-center relative">
            <section className="h-full flex-1 grid items-center justify-center">
                <img
                    src={illustration}
                    alt="cartoon lady holding a mobile phone"
                    className="max-w-sm object-contain"
                />
            </section>
            <img src={line} alt="divider" className="max-h-[80%]" />
            <section className="h-full flex-1 grid items-center justify-center">
                <Outlet />
            </section>

            {/* Patterns */}
            <img
                src={vector1}
                alt="pattern top left"
                className="absolute -bottom-16 left-0"
            />
            <img
                src={vector}
                alt="pattern top almost centered"
                className="absolute top-0 right-1/2"
            />
            <img
                src={vector2}
                alt="pattern bottom right"
                className="absolute bottom-0 right-0"
            />
            <img
                src={vector3}
                alt="pattern top left"
                className="absolute top-0 left-0"
            />

            {/* Bubbles */}
            <img
                src={bubbles}
                alt="bubbles top right"
                className="absolute -top-10 right-[10%]"
            />
            <img
                src={bubbles}
                alt="bubbles bottom center"
                className="absolute bottom-0 right-1/2"
            />
        </section>
    )
}
