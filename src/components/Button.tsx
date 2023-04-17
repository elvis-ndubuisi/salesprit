import { PropsWithChildren } from "react"
import { NavLink } from "react-router-dom"
import { FaBell } from "react-icons/fa"

import { Menu } from "../helpers/data/menuList"

interface IProps extends PropsWithChildren {
    isPrimary: boolean
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    isBold?: boolean
}

export default function Button({
    isPrimary,
    children,
    handleClick,
    isBold = true,
}: IProps) {
    return (
        <button
            type="button"
            onClick={handleClick}
            className={`text-center flex items-center justify-center gap-3 ${
                isBold
                    ? "font-semibold text-lg py-3 px-7"
                    : "font-medium text-base py-2 px-4"
            }  rounded-lg   capitalize text-white ${
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
                    ? "px-3 py-2 rounded-md flex gap-3 items-center bg-sl-secondary/10 text-sl-secondary font-medium text-lg capitalize"
                    : isPending
                    ? "px-3 py-2 rounded-md flex gap-3 items-center bg-sl-secondary/10 text-sl-grey font-medium text-lg capitalize"
                    : "px-3 py-2 rounded-md flex gap-3 items-center text-sl-grey opacity-50 font-medium text-lg capitalize"
            }
        >
            <img
                src={icon}
                alt="menu icon"
                className="w-6 h-6 object-contain"
            />
            <p>{title}</p>
        </NavLink>
    )
}

// TODO: Add glow filter to button
export function NotificationButton() {
    return (
        <button type="button" className="p-3 rounded-full bg-sl-secondary">
            <FaBell style={{ color: "white" }} size={18} />
        </button>
    )
}

type QrProp = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export function QrScanButton({ handleClick }: QrProp) {
    return (
        <button type="button" onClick={handleClick} className="px-2">
            <svg
                width="29"
                height="25"
                viewBox="0 0 30 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.25 20.5C5.55875 20.5 5 19.94 5 19.25V6.75C5 6.06 5.55875 5.5 6.25 5.5C6.94125 5.5 7.5 6.06 7.5 6.75V19.25C7.5 19.94 6.94125 20.5 6.25 20.5ZM12.5 19.25V6.75C12.5 6.06 11.9412 5.5 11.25 5.5C10.5588 5.5 10 6.06 10 6.75V19.25C10 19.94 10.5588 20.5 11.25 20.5C11.9412 20.5 12.5 19.94 12.5 19.25ZM25 19.25V6.75C25 6.06 24.4412 5.5 23.75 5.5C23.0588 5.5 22.5 6.06 22.5 6.75V19.25C22.5 19.94 23.0588 20.5 23.75 20.5C24.4412 20.5 25 19.94 25 19.25ZM17.5 18.625V7.375C17.5 6.33875 16.66 5.5 15.625 5.5C14.59 5.5 13.75 6.33875 13.75 7.375V18.625C13.75 19.6613 14.59 20.5 15.625 20.5C16.66 20.5 17.5 19.6613 17.5 18.625ZM8.75 24.25C8.75 23.56 8.19125 23 7.5 23H5C3.62125 23 2.5 21.8788 2.5 20.5V18C2.5 17.31 1.94125 16.75 1.25 16.75C0.55875 16.75 0 17.31 0 18V20.5C0 23.2575 2.2425 25.5 5 25.5H7.5C8.19125 25.5 8.75 24.94 8.75 24.25ZM30 20.5V18C30 17.31 29.4412 16.75 28.75 16.75C28.0588 16.75 27.5 17.31 27.5 18V20.5C27.5 21.8788 26.3787 23 25 23H22.5C21.8088 23 21.25 23.56 21.25 24.25C21.25 24.94 21.8088 25.5 22.5 25.5H25C27.7575 25.5 30 23.2575 30 20.5ZM30 8V5.5C30 2.7425 27.7575 0.5 25 0.5H22.5C21.8088 0.5 21.25 1.06 21.25 1.75C21.25 2.44 21.8088 3 22.5 3H25C26.3787 3 27.5 4.12125 27.5 5.5V8C27.5 8.69 28.0588 9.25 28.75 9.25C29.4412 9.25 30 8.69 30 8ZM2.5 8V5.5C2.5 4.12125 3.62125 3 5 3H7.5C8.19125 3 8.75 2.44 8.75 1.75C8.75 1.06 8.19125 0.5 7.5 0.5H5C2.2425 0.5 0 2.7425 0 5.5V8C0 8.69 0.55875 9.25 1.25 9.25C1.94125 9.25 2.5 8.69 2.5 8ZM19.375 20.5C19.03 20.5 18.75 20.22 18.75 19.875V6.125C18.75 5.78 19.03 5.5 19.375 5.5C19.72 5.5 20 5.78 20 6.125V19.875C20 20.22 19.72 20.5 19.375 20.5Z"
                    fill="#F67F20"
                />
            </svg>
        </button>
    )
}
