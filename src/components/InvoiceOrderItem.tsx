export default function InvoiceOrderItem({
    idx,
    item,
    qty,
    price,
}: {
    idx: number
    item: string
    qty: number
    price: number
}) {
    return (
        <div className="flex items-center justify-between text-[0.9rem] py-1 odd:bg-sl-grey/20">
            <p>
                <span>{idx})</span> {item}
            </p>
            <p>{qty}</p>
            <p>{price}</p>
        </div>
    )
}
