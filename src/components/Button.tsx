import { PropsWithChildren } from "react"
import { NavLink } from "react-router-dom"

import { Menu } from "../utils/menuList"

interface IProps extends PropsWithChildren {
    isPrimary: boolean
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
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
        <NavLink
            to={uri}
            className={({ isActive, isPending }) =>
                // eslint-disable-next-line no-nested-ternary
                isActive
                    ? "px-3 py-2 rounded-md flex items-center bg-sl-secondary/10 text-sl-secondary font-medium text-lg capitalize"
                    : isPending
                    ? "px-3 py-2 rounded-md flex items-center bg-sl-secondary/10 text-sl-grey font-medium text-lg capitalize"
                    : "px-3 py-2 rounded-md flex items-center text-sl-grey opacity-60 font-medium text-lg capitalize"
            }
        >
            {title}
        </NavLink>
    )
}
