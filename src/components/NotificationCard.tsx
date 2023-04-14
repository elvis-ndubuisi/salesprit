import { HiXMark } from "react-icons/hi2"

import notificationIcon from "../assets/icons/notification-bell.svg"
import { Notification } from "../types/Notifications"

export default function NotificationCard({
    notification,
    time,
    handleClick,
}: Notification) {
    return (
        <section
            className="flex items-start justify-between gap-3 p-3 hover:opacity-80 w-full border-b-2 border-sl-stroke last:border-none"
            role="button"
            tabIndex={0}
            onClick={(event) => {}}
            aria-hidden="true"
        >
            <img
                src={notificationIcon}
                alt="notification bell"
                className="w-11 h-11 object-contain"
            />
            <div className="flex-1 flex flex-col gap-3 pr-3 text-lg">
                <p className="font-semibold">{notification}</p>
                <p className="font-medium text-sl-grey capitalize">{time}</p>
            </div>
            <button type="button" className="p-4" onClick={handleClick}>
                <HiXMark size={20} />
            </button>
        </section>
    )
}
