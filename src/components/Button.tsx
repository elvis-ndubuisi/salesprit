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
            className={`text-center font-semibold text-xl rounded-lg py-[1.125rem] px-11 capitalize text-white ${
                isPrimary ? "bg-sl-secondary" : "bg-sl-primary"
            }`}
        >
            {children}
        </button>
    )
}
