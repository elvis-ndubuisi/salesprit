import { PropsWithChildren } from "react"

// TODO: check font-size
// TODO: check margin top and down
export default function AuthH1({ children }: PropsWithChildren) {
    return (
        <h1 className="font-bold capitalize text-[2.75rem] my-2">{children}</h1>
    )
}
