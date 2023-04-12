export default function OrderedProduct() {
    return (
        <section className="border border-sl-stroke rounded-md p-1 flex items-center justify-between gap-2">
            <img
                src=""
                alt=""
                className="w-14 h-14 rounded-md bg-sl-secondary"
            />
            <div className="flex-1 flex items-center flex-wrap">
                <p className="text-[1.1rem] w-full max-w-[10rem] font-semibold text-sl-secondary capitalize">
                    Japanes food
                </p>
                <p className="font-semibold text-base text-sl-primary">
                    $23.98
                </p>
            </div>
            <section className="flex items-center gap-2">
                <button
                    type="button"
                    className="w-6 h-6 bg-sl-stroke rounded-full text-sl-secondary font-medium"
                >
                    -
                </button>
                <p className="font-normal text-base text-sl-secondary">1</p>
                <button
                    type="button"
                    className="w-6 h-6 text-white bg-sl-secondary rounded-full"
                >
                    +
                </button>
            </section>
        </section>
    )
}
