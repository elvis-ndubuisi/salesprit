import { PropsWithChildren } from "react"

interface IProps extends PropsWithChildren {
    type: string
    name: string
    placeholder: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
    type = "text",
    name = "",
    placeholder,
    handleChange,
    children,
}: IProps) {
    return (
        <section className="flex items-center gap-5 pt-2 pb-3 border-b border-sl-stroke">
            {children && children}
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleChange}
                className="flex-1 placeholder:text-sl-grey capitalize text-base bg-transparent outline-none text-sl-grey"
            />
        </section>
    )
}

interface SProps extends Omit<IProps, "type" | "children"> {
    id: string
}
export function SettingInput({ handleChange, name, placeholder, id }: SProps) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            name={name}
            id={id}
            onChange={handleChange}
        />
    )
}
