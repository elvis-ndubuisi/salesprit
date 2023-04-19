import { useNavigate } from "react-router-dom"

import { HiPlus } from "react-icons/hi2"
import Button from "../../components/Button"
import TableRow from "../../components/TableRow"

export default function Customers() {
    const navigate = useNavigate()

    return (
        <section className="col-span-2 h-screen p-5">
            <div className="flex items-center justify-between mb-4">
                <h2 className="section-heading">customers</h2>
                <Button
                    isPrimary
                    isBold={false}
                    handleClick={() => navigate("add")}
                >
                    <span className="flex items-center gap-2">
                        <HiPlus size={20} />
                        Delete
                    </span>
                </Button>
            </div>

            <section className="h-[90%] overflow-y-scroll overscroll-contain">
                <table className="table-auto border-collapse border-2 border-sl-stroke shadow-lg w-full">
                    <thead>
                        <tr>
                            <th className="border-2 border-sl-stroke p-4 text-sl-grey">
                                Name
                            </th>
                            <th className="border-2 border-sl-stroke p-4 text-sl-grey">
                                Orders
                            </th>
                            <th className="border-2 border-sl-stroke p-4 text-sl-grey">
                                Spent (NGN)
                            </th>
                            <th className="border-2 border-sl-stroke p-4 text-sl-grey">
                                Gender
                            </th>
                            <th className="border-2 border-sl-stroke p-4 text-sl-grey">
                                Address
                            </th>
                            <th className="border-2 border-sl-stroke p-4 text-sl-grey">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="overflow-y-scroll">
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                    </tbody>
                </table>
            </section>
        </section>
    )
}
