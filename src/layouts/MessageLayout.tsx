import { Outlet } from "react-router-dom"

import Chat from "../components/Chat"
import { chats } from "../helpers/data"

export default function MessageLayout() {
    return (
        <section className="col-span-2 h-screen px-5 grid grid-cols-[min(40%)_1fr] gap-4">
            <section className="max-h-[inherit] py-5 overflow-hidden">
                <h4 className="section-heading mb-6">messages</h4>
                <section className="h-[90%] overflow-y-scroll overscroll-contain flex flex-col gap-3 last:border-none p-3 shadow-lg">
                    {/* Find and group all chat based on ids in group */}
                    <p className="font-bold text-sl-grey my-4 font-xl capitalize">
                        group
                    </p>
                    {chats.map((chat) =>
                        chat.section === "group" ? (
                            <Chat
                                path={chat.id}
                                name={chat.name}
                                key={chat.id}
                            />
                        ) : null
                    )}
                    <p className="font-bold text-sl-grey my-4 font-xl capitalize">
                        personal
                    </p>

                    {chats.map((chat) =>
                        chat.section === "personal" ? (
                            <Chat
                                path={chat.id}
                                name={chat.name}
                                key={chat.id}
                            />
                        ) : null
                    )}

                    <div className="pt-7" />
                </section>
            </section>
            <aside className="flex flex-col justify-between overflow-hidden">
                <Outlet />
            </aside>
        </section>
    )
}
