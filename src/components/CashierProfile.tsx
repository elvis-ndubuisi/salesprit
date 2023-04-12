// TODO: use react-icons for call icon
export default function CashierProfile() {
    return (
        <div className="flex items-center justify-between gap-2 border-b-2 border-sl-stroke pb-4">
            <img
                src=""
                alt="profile"
                className="bg-sl-secondary rounded-full h-14 w-14 object-cover object-center overflow-hidden"
            />
            <div className="flex-1 flex flex-col">
                <h2 className="font-semibold text-xl">Elvis Ndubuisi</h2>
                <p className="text-lg font-medium text-sl-grey">Cashier</p>
            </div>
            <button
                type="button"
                onClick={() => console.log("call someone")}
                className="p-3 rounded-full bg-sl-primary"
            >
                call
            </button>
        </div>
    )
}
