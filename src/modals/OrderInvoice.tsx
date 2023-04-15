import Button from "../components/Button"

export default function OrderInvoice() {
    return (
        <section className="w-64 p-4 flex flex-col font-medium">
            <h2 className="font-bold">Reciept #339485</h2>
            <hr className="border-2 border-sl-stroke" />

            <section>
                <div className="flex items-center justify-between">
                    <p>Recipent</p>
                    <p>name of recipe</p>
                </div>

                <div className="flex items-center justify-between">
                    <p>Customer ID</p>
                    <p>name of recipe</p>
                </div>

                <div className="flex items-center justify-between">
                    <p>Date</p>
                    <p>name of recipe</p>
                </div>
            </section>

            <hr className="border-2 border-sl-st" />

            <section>
                <div className="flex items-center justify-between">
                    <p>Date</p>
                    <p>q8</p>
                    <p>name of recipe</p>
                </div>

                <div className="flex items-center justify-between">
                    <p>Date</p>
                    <p>q8</p>
                    <p>name of recipe</p>
                </div>

                <div className="flex items-center justify-between">
                    <p>Date</p>
                    <p>q8</p>
                    <p>name of recipe</p>
                </div>

                <div className="flex items-center justify-between">
                    <p>Date</p>
                    <p>q8</p>
                    <p>name of recipe</p>
                </div>
            </section>

            <section>
                <div className="flex items-center justify-between">
                    <p>Date</p>
                    <p>name of recipe</p>
                </div>

                <div className="flex items-center justify-between text-sl-grey">
                    <p>Date</p>
                    <p>name of recipe</p>
                </div>

                <hr className="border-2 border-sl-stroke border-dashed" />
                <div className="flex items-center justify-between">
                    <p>Date</p>
                    <p>name of recipe</p>
                </div>
            </section>

            <Button isPrimary={false} isBold={false} handleClick={() => {}}>
                print invoice
            </Button>
        </section>
    )
}
