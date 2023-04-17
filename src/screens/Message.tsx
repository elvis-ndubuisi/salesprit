import { useLoaderData } from "react-router-dom"
import { IoMdSend } from "react-icons/io"

import { ChatHeader, ChatBubbleFrom, ChatBubbleTo } from "../components/Chat"
import { chats } from "../helpers/data"
import emojiIcon from "../assets/icons/emoji.svg"

export default function Message() {
    const { name, id, section } = useLoaderData()
    return (
        <aside className="flex flex-col h-screen justify-between w-full max-w-xl mx-auto relative pt-5">
            <ChatHeader name={name} />

            <main className="flex-1">
                <section className="h-[90%] overflow-y-scroll py-5 flex flex-col gap-3">
                    <div className="relative">
                        <ChatBubbleFrom name={name}>
                            Quos, odio iure enim labore temporibus distinctio
                            eum possimus quia ullam. Saepe culpa molestiae,
                            doloremque fugit totam recusandae harum obcaecati
                            aliquam aspernatur.
                        </ChatBubbleFrom>
                    </div>
                    <div className="relative">
                        <ChatBubbleTo>
                            Quos, odio iure enim labore temporibus distinctio
                            eum possimus quia ullam. Saepe culpa molestiae,
                            doloremque fugit totam recusandae harum obcaecati
                            aliquam aspernatur.
                        </ChatBubbleTo>
                    </div>
                </section>
            </main>

            <footer className="absolute bottom-4 left-0 w-full flex item-center justify-between gap-4 border-2 border-sl-stroke h-16 p-1 rounded-full bg-white">
                <button
                    type="button"
                    className="h-[70%] rounded-full aspect-square my-auto bg-sl-stroke grid place-content-center"
                >
                    <img src={emojiIcon} alt="emoji" />
                </button>
                <input
                    type="text"
                    placeholder="Write message..."
                    className="flex-1 text-lg focus:outline-none bg-transparent"
                />
                <button
                    type="submit"
                    className="h-full aspect-square rounded-full overflow-hidden bg-sl-primary text-white grid place-content-center"
                >
                    <IoMdSend size={24} />
                </button>
            </footer>
        </aside>
    )
}

type Loader = {
    params: { id: string }
}
export function messageLoader({ params }: Loader) {
    return chats.find((pred) => pred.id === params.id)
}
