import callIcon from "../assets/icons/Call-Icon.png"

export default function CashierProfile() {
    return (
        <div className="flex items-center justify-between gap-2">
            <img
                src=""
                alt="profile"
                className="bg-sl-secondary rounded-full h-14 w-14 object-cover object-center overflow-hidden"
            />
            <div className="flex-1 flex flex-col">
                <h2>Elvis Ndubuisi</h2>
                <p>Cashier</p>
            </div>
            <button
                type="button"
                onClick={() => console.log("call someone")}
                className="w-16 h-16"
            >
                call
            </button>
        </div>
    )
}
