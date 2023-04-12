import type Product from "../types/Product"

export default function ProductCard() {
    return (
        <section className="max-w-[200px]">
            <img
                src=""
                alt=""
                className="w-full aspect-square object-cover rounded-md"
            />
            <div className="my-1 flex items-center">
                <span>st</span>
                <span>st</span>
                <span>st</span>
                <span>st</span>
            </div>
            <h3 className="font-semibold text-sl-secondary leading-none text-lg capitalize">
                food name
            </h3>
            <span className="font-semibold text-sl-primary text-base">
                $23.56
            </span>
        </section>
    )
}
