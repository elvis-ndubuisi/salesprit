import React from "react"

type Prop = {
    isOpen: boolean
    children: React.ReactNode
}

export default function Modal({ isOpen, children }: Prop) {
    if (!isOpen) return null

    return (
        <section className="absolute top-0 left-0 z-10 w-screen h-screen bg-sl-secondary/40 grid items-center justify-center">
            {children}
        </section>
    )
}
