import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"

type ChatProp = {
    path: string
    name: string
}
export default function Chat({ path, name }: ChatProp) {
    return (
        <Link
            to={path}
            className="flex items-start justify-between gap-3 hover:opacity-60 p-4 border-b-2 border-sl-stroke"
        >
            <div className="w-12 h-12 rounded-full uppercase grid items-center justify-center font-bold bg-blue-300">
                {name.slice(0, 1)}
            </div>
            <div className="flex-1">
                <p className="capitalize font-bold text-lg">{name}</p>
                <p>last chat</p>
            </div>
            <span className="bg-sl-primary text-white font-semibold aspect-square w-8 grid place-content-center rounded-full">
                3
            </span>
        </Link>
    )
}

export function ChatHeader({ name }: { name: string }) {
    return (
        <header className="flex items-center justify-between pb-4 border-b-2 border-sl-stroke">
            <section className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full uppercase grid items-center justify-center font-bold bg-blue-300">
                    {name.slice(0, 1)}
                </div>
                <p className="capitalize font-bold text-lg">{name}</p>
            </section>
            <section className="flex items-center gap-3">
                <button type="button">btn</button>
                <button type="button">btn</button>
            </section>
        </header>
    )
}

export function ChatBubbleTo({ children }: PropsWithChildren) {
    return (
        <div className="w-[60%] float-right bg-sl-secondary text-white text-left p-4 rounded-[2.2em] rounded-br-none leading-tight">
            {children}
        </div>
    )
}

interface FromProp extends PropsWithChildren {
    name: string
}
export function ChatBubbleFrom({ children, name }: FromProp) {
    return (
        <div className="float-left flex items-start gap-3">
            <div className="w-12 h-12 rounded-full uppercase grid items-center justify-center font-bold bg-blue-300">
                {name.slice(0, 1)}
            </div>
            <div className="max-w-[60%] bg-sl-stroke p-4 rounded-[2.2em] rounded-tl-none text-sl-secondary text-left leading-tight">
                {children}
            </div>
        </div>
    )
}
