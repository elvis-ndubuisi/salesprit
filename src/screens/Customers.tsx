import Button from "../components/Button"

export default function Customers() {
    return (
        <section className="col-span-2 h-screen max-h-[inherit] p-5">
            <div className="flex items-center justify-between">
                <h2>customers</h2>
                <Button isPrimary={false} isBold={false} handleClick={() => {}}>
                    delete
                </Button>
            </div>

            <table className="w-full">
                <thead>
                    <td>product</td>
                    <td>product ID</td>
                    <td>qty</td>
                    <td>price</td>
                    <td>action</td>
                </thead>
            </table>
        </section>
    )
}
