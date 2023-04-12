export default function PriceSummary() {
    return (
        <section className="min-h-[20%] mb-2 py-2 overflow-hidden flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <p className="font-semibold text-sl-secondary capitalize">
                    subtotal
                </p>
                <p className="font-semibold text-sl-secondary capitalize">
                    234
                </p>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-sl-grey capitalize">tax</p>
                <p className="font-semibold text-sl-grey capitalize">234</p>
            </div>

            <div className="flex items-center justify-between">
                <p className="font-semibold text-sl-grey capitalize">
                    discount
                </p>
                <p className="font-semibold text-sl-grey capitalize">234</p>
            </div>

            <hr className="border border-sl-stroke border-dashed" />

            <div className="flex items-center justify-between">
                <p className="font-semibold text-sl-secondary capitalize">
                    total
                </p>
                <p className="font-semibold text-sl-secondary capitalize">
                    234
                </p>
            </div>
        </section>
    )
}
