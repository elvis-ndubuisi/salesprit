import React from "react"

import NotificationCard from "../components/NotificationCard"
import { notifications } from "../helpers/data"
import { Notification as NotificationType } from "../types/Notifications"

export default function Notification() {
    const [notificationArr, setNotificationArr] =
        React.useState<Omit<NotificationType, "handleClick">[]>(notifications)

    return (
        <section className="col-span-2 px-6 pt-5 pb-3 h-screen">
            <section className="flex items-center justify-between mb-4">
                <h4 className="section-heading">Notification</h4>
                <button
                    type="button"
                    className="linkable-button"
                    onClick={() => setNotificationArr([])}
                >
                    mark all as read
                </button>
            </section>

            <section className="flex flex-col items-start h-[90%] overflow-y-scroll overscroll-contain max-w-5xl mx-auto shadow-2xl pt-3">
                {notificationArr.map((notification) => (
                    <NotificationCard
                        key={`${notification.notification}-${notification.time}`}
                        notification={notification.notification}
                        time={notification.time}
                        handleClick={() =>
                            setNotificationArr((prev) =>
                                notificationArr.filter(
                                    (arr) => arr.time !== notification.time
                                )
                            )
                        }
                    />
                ))}
            </section>
        </section>
    )
}
