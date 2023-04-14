import { HiChevronLeft } from "react-icons/hi2"

export default function OpeningHours() {
    return (
        <section>
            <h4 className="section-heading">opening hours</h4>

            <section className="max-w-xl mx-auto mt-5 p-5 shadow-lg rounded-lg">
                <div className="flex items-center justify-between py-4 border-b-2 border-sl-stroke">
                    <button type="button">
                        <HiChevronLeft size={26} />
                    </button>
                    <h4 className="section-heading">opening hours</h4>
                    <button type="button" className="linkable-button">
                        edit
                    </button>
                </div>

                <section className="flex flex-col gap-3">
                    <div className="flex items-center justify-between text-lg capitalize py-3">
                        <p className="flex items-center font-medium gap-2">
                            <span className="w-3 h-3 rounded-full bg-sl-primary" />
                            monday
                        </p>

                        <p className="flex items-center font-medium">
                            08am - 9pm
                        </p>
                    </div>

                    <div className="flex items-center justify-between text-lg capitalize py-3">
                        <p className="flex items-center font-medium gap-2">
                            <span className="w-3 h-3 rounded-full bg-sl-primary" />
                            tuesday
                        </p>

                        <p className="flex items-center font-medium">
                            08am - 9pm
                        </p>
                    </div>

                    <div className="flex items-center justify-between text-lg capitalize py-3">
                        <p className="flex items-center font-medium gap-2">
                            <span className="w-3 h-3 rounded-full bg-sl-primary" />
                            wednesday
                        </p>

                        <p className="flex items-center font-medium">
                            08am - 9pm
                        </p>
                    </div>

                    <div className="flex items-center justify-between text-lg capitalize py-3">
                        <p className="flex items-center font-medium gap-2">
                            <span className="w-3 h-3 rounded-full bg-sl-primary" />
                            thursday
                        </p>

                        <p className="flex items-center font-medium">
                            08am - 9pm
                        </p>
                    </div>

                    <div className="flex items-center justify-between text-lg capitalize py-3">
                        <p className="flex items-center font-medium gap-2">
                            <span className="w-3 h-3 rounded-full bg-sl-primary" />
                            friday
                        </p>

                        <p className="flex items-center font-medium">
                            08am - 9pm
                        </p>
                    </div>
                </section>
            </section>
        </section>
    )
}
