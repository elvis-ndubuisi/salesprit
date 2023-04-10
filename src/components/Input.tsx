import { PropsWithChildren } from "react"

interface IProps extends PropsWithChildren {
    type: string
    name: string
    placeholder: string
    handleChange: () => void
}

export default function Input({
    type = "text",
    name = "",
    placeholder,
    handleChange,
    children,
}: IProps) {
    return (
        <section className="flex items-center gap-2 py-4 border-b border-sl-stroke">
            {children && children}
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleChange}
                className="flex-1 placeholder:text-sl-grey capitalize text-lg bg-transparent outline-none"
            />
        </section>
    )
}
