import { PropsWithChildren } from "react"

export default function AuthForm({ children }: PropsWithChildren) {
    return (
        <form className="flex flex-col min-w-[380px] max-w-[400px]">
            {children}
        </form>
    )
}
