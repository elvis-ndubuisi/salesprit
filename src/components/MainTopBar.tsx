import { FiSearch } from "react-icons/fi"
import { NotificationButton, QrScanButton } from "./Button"

export default function MainTopBar() {
    return (
        <section className="flex items-center justify-center gap-4 max-w-md mx-auto">
            <div className="flex-1 flex items-center justify-between gap-1 border border-sl-stroke rounded-full p-2">
                <FiSearch size={22} color="#777777" />
                <input
                    type="text"
                    placeholder="search here"
                    name="search"
                    className="flex-1 placeholder:text-sl-grey capitalize text-base bg-transparent outline-none text-sl-secondary"
                />
                <QrScanButton handleClick={() => {}} />
            </div>
            <NotificationButton />
        </section>
    )
}
