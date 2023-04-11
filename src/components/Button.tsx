import { PropsWithChildren } from "react"

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
