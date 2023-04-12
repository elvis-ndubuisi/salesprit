import { PropsWithChildren } from "react"
import { Link } from "react-router-dom"

import { Menu } from "../utils/menuList"

interface IProps extends PropsWithChildren {
    isPrimary: boolean
    handleClick: () => void
}

export default function Button({ isPrimary, children, handleClick }: IProps) {
    return (
        <button
            type="button"
            onClick={handleClick}
            className={`text-center font-semibold text-lg rounded-lg py-3 px-7 capitalize text-white ${
                isPrimary ? "bg-sl-secondary" : "bg-sl-primary"
            }`}
        >
            {children}
        </button>
    )
}

export function MenuButton({ icon, title, uri }: Menu) {
    return (
        <Link to={uri} className="">
            {icon}
            {title}
        </Link>
    )
}
