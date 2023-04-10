import { PropsWithChildren, ReactNode } from "react"

export default function SocialButton({
    socialName,
    children,
}: {
    socialName: string
    children: ReactNode
}) {
    return (
        <button
            type="button"
            className="flex items-center justify-center gap-3 border-2 rounded-lg bg-white font-semibold text-lg py-[1.125em] px-11 capitalize"
        >
            {children}
            {socialName}
        </button>
    )
}
