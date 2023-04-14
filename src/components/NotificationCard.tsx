import { HiXMark } from "react-icons/hi2"

import notificationIcon from "../assets/icons/notification-bell.svg"

export default function NotificationCard() {
    return (
        <section className="flex items-start justify-between gap-3 p-3 hover:opacity-80">
            <img src={notificationIcon} alt="notification bell" />
            <div className="flex-1 flex flex-col gap-3 pr-3 text-lg">
                <p className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias molestiae modi quasi suscipit harum impedit
                    officiis alias, dolorem, tempore esse eius.
                </p>
                <p className="font-medium text-sl-grey capitalize">
                    20 minutes ago
                </p>
            </div>
            <button type="button" className="p-4">
                <HiXMark size={20} />
            </button>
        </section>
    )
}
