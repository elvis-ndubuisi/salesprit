import { PropsWithChildren, useId } from "react"

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

type SProps = Omit<IProps, "children">

export function SettingInput({
    handleChange,
    name,
    placeholder,
    type = "text",
}: SProps) {
    const id = useId()

    return (
        <label
            htmlFor={`${name}-${id}`}
            className="flex flex-col gap-2 capitalize font-semibold"
        >
            {name}
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={`${name}-${id}`}
                onChange={handleChange}
                className="outline-none border border-sl-stroke text-base p-3 rounded-md placeholder:capitalize"
            />
        </label>
    )
}
