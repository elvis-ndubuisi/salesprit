import Button from "../components/Button"
import InvoiceOrderItem from "../components/InvoiceOrderItem"

export default function OrderInvoice({
    printInvoice,
}: {
    printInvoice: () => void
}) {
    return (
        <section className="w-64 p-4 flex flex-col items-center gap-3 font-medium bg-sl-light w-[310px]">
            <h2 className="font-bold self-start">Reciept #339485</h2>
            <hr className="w-full border-1 border-sl-stroke" />

            <section className="w-full text-base">
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

            <hr className="w-full border-1 border-sl-st" />

            <section className="w-full">
                <InvoiceOrderItem
                    idx={1}
                    item="japanize cake"
                    price={200}
                    qty={23}
                />
                <InvoiceOrderItem
                    idx={2}
                    item="japanize cake"
                    price={200}
                    qty={23}
                />
                <InvoiceOrderItem
                    idx={1}
                    item="japanize cake"
                    price={200}
                    qty={23}
                />
                <InvoiceOrderItem
                    idx={2}
                    item="japanize cake"
                    price={200}
                    qty={23}
                />
            </section>

            <section className="w-full text-base">
                <div className="flex items-center justify-between">
                    <p>Date</p>
                    <p>name of recipe</p>
                </div>

                <div className="flex items-center justify-between text-sl-grey">
                    <p>Date</p>
                    <p>name of recipe</p>
                </div>

                <hr className="border-1 border-sl-grey my-3 border-dashed" />
                <div className="flex items-center justify-between">
                    <p>Date</p>
                    <p>name of recipe</p>
                </div>
            </section>

            <Button isPrimary={false} isBold={false} handleClick={printInvoice}>
                print invoice
            </Button>
        </section>
    )
}
