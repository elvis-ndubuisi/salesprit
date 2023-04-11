import { ReactNode } from "react"

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
            className="flex items-center justify-center gap-3 border-2 rounded-lg bg-white font-semibold text-base py-3 px-7 capitalize"
        >
            {children}
            {socialName}
        </button>
    )
}
