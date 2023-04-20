import { GoKebabVertical } from "react-icons/go"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

{
    /* <Doughnut data={...} /> */
}

export default function Dashboard() {
    return (
        <section className="col-span-2 h-screen px-5">
            <h2 className="section-heading mt-5">manager dashboard</h2>

            <section className="h-[95%] w-full py-4 grid grid-cols-3 gap-3">
                <section className="p-3 rounded-lg shadow-xl">
                    <div className="flex items-center justify-between">
                        <h3 className="capitalize font-semibold text-2xl text-sl-secondary">
                            total income
                        </h3>

                        <button type="button">
                            <GoKebabVertical size={20} />
                        </button>
                    </div>
                </section>

                <section className="p-3 rounded-lg shadow-xl">
                    <div className="flex items-center justify-between">
                        <h3 className="capitalize font-semibold text-2xl text-sl-secondary">
                            monthly income
                        </h3>

                        <button type="button">
                            <GoKebabVertical size={20} />
                        </button>
                    </div>
                </section>

                <section className="p-3 rounded-lg shadow-xl">
                    <div className="flex items-center justify-between">
                        <h3 className="capitalize font-semibold text-2xl text-sl-secondary">
                            tax income
                        </h3>

                        <button type="button">
                            <GoKebabVertical size={20} />
                        </button>
                    </div>
                </section>

                <section className="p-3 rounded-lg shadow-xl col-span-2">
                    <p>dashboard</p>
                </section>

                <section className="p-3 rounded-lg shadow-xl">
                    <div className="flex items-center justify-between">
                        <h3 className="capitalize font-semibold text-2xl text-sl-secondary">
                            best dished
                        </h3>

                        <button type="button">
                            <GoKebabVertical size={20} />
                        </button>
                    </div>

                    <table className="w-full">
                        <thead>
                            <td className="py-3 text-sl-grey font-bold text-base capitalize">
                                dishes
                            </td>
                            <td className="py-3 text-sl-grey font-bold text-base capitalize text-right">
                                orders
                            </td>
                        </thead>

                        <tr>
                            <td className="flex gap-2">
                                <img
                                    src=""
                                    alt="food"
                                    className="w-11 h-11 bg-sl-grey object-cover rounded overflow-hidden"
                                />
                                <div className="flex flex-col">
                                    <p className="font-medium text-sl-secondary">
                                        japanies food
                                    </p>
                                    <p className="text-sl-primary font-medium">
                                        $800
                                    </p>
                                </div>
                            </td>
                            <td className="text-right">200</td>
                        </tr>
                    </table>
                </section>
            </section>
        </section>
    )
}
