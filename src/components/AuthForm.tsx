import { PropsWithChildren } from "react"

export default function AuthForm({ children }: PropsWithChildren) {
    return <form className="flex flex-col max-w-[640px]">{children}</form>
}
