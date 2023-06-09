import React from "react"
import { HiPlus, HiPencil } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"

import Button from "../../components/Button"
import TableRow from "../../components/TableRow"
import Modal from "../../modals/Modal"
import ActionConfirmation from "../../modals/ActionConfirmation"

export default function Product() {
    const [modal, setModal] = React.useState<boolean>(false)
    const navigate = useNavigate()

    React.useEffect(() => {}, [])

    return (
        <>
            <section className="col-span-2 h-screen p-5">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="section-heading">product</h2>
                    <Button
                        isPrimary
                        isBold={false}
                        handleClick={() => navigate("add")}
                    >
                        <span className="flex items-center gap-2">
                            <HiPlus size={20} />
                            add product
                        </span>
                    </Button>
                </div>

                <section className="h-[90%] overflow-y-scroll overscroll-contain">
                    <table className="table-auto border-collapse border-2 border-sl-stroke shadow-lg w-full">
                        <thead>
                            <tr>
                                <th className="border-2 border-sl-stroke p-4 text-sl-grey">
                                    Product
                                </th>
                                <th className="border-2 border-sl-stroke p-4 text-sl-grey">
                                    Product ID
                                </th>
                                <th className="border-2 border-sl-stroke p-4 text-sl-grey">
                                    QTY
                                </th>
                                <th className="border-2 border-sl-stroke p-4 text-sl-grey">
                                    Price
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

            <Modal isOpen={modal}>
                <ActionConfirmation
                    alertTitle="delete this product"
                    confirm={() => {}}
                    deny={() => setModal(false)}
                />
            </Modal>
        </>
    )
}
