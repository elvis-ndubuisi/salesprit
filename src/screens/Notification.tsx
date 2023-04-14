import NotificationCard from "../components/NotificationCard"

// TODO: Add backdrop shadow to parent section.
// TODO: Add line to seperate each NotificationCard.
// TODO: Add mark-all-as-read effect: text-grey
export default function Notification() {
    return (
        <section className="col-span-2 px-6 pt-5 pb-3 h-screen">
            <section className="flex items-center justify-between mb-4">
                <h4 className="section-heading">Notification</h4>
                <button type="button" className="linkable-button">
                    mark all as read
                </button>
            </section>

            <section className="flex flex-col items-start h-[90%] overflow-y-scroll overscroll-contain">
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </section>
        </section>
    )
}
