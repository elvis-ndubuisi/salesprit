export default function Setting() {
    return (
        <section className="col-span-2 h-screen p-5">
            <h4 className="section-heading">setting</h4>
            <section className="h-[90%] my-4 grid grid-cols-[min(30%)_1fr] gap-4">
                <section className="flex flex-col items-start justify-between">
                    <div>
                        <img src="" alt="name of profile" />
                        <h3 className="font-bold">Soul Goodmate</h3>
                        <h4 className="font-medium text-sl-grey capitalize">
                            head manager
                        </h4>
                    </div>

                    <hr className="border-2 border-sl-stroke" />

                    <nav>links goes here</nav>

                    <button className="linkable-button" type="button">
                        logout
                    </button>
                </section>

                <section className="bg-black">setting</section>
            </section>
        </section>
    )
}
