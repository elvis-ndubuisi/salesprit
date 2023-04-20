import React from "react"

import PriceSummary from "../components/PriceSummary"
import OrderedProduct from "../components/OrderedProduct"
import { SettingInput } from "../components/Input"
import Button from "../components/Button"
import Modal from "../modals/Modal"
import OrderInvoice from "../modals/OrderInvoice"

export default function Order() {
    const [modal, setModal] = React.useState<boolean>(true)

    return (
        <>
            <section className="h-screen col-span-2 p-5 grid grid-cols-2 overflow-y-scroll gap-8">
                <h2 className="section-heading">order#22355</h2>
                <form className="col-span-2 grid grid-cols-3 gap-4">
                    <SettingInput
                        type="text"
                        name="recipent"
                        placeholder="sarah house"
                        handleChange={() => {}}
                    />
                    <SettingInput
                        type="text"
                        name="gender"
                        placeholder="femail"
                        handleChange={() => {}}
                    />
                    <SettingInput
                        type="text"
                        name="city"
                        placeholder="nigeria"
                        handleChange={() => {}}
                    />
                    <SettingInput
                        type="number"
                        name="phone number"
                        placeholder="+(223) 930928098"
                        handleChange={() => {}}
                    />
                    <SettingInput
                        type="text"
                        name="email address"
                        placeholder="sarah@gmail.com"
                        handleChange={() => {}}
                    />
                    <SettingInput
                        type="text"
                        name="customer ID"
                        placeholder="224533"
                        handleChange={() => {}}
                    />
                    <label htmlFor="address" className="col-span-3">
                        <textarea
                            name="address"
                            id="address"
                            cols={20}
                            className="w-full"
                        />
                    </label>
                </form>

                <section className="col-span-2 grid grid-cols-2 items-end gap-x-5">
                    <div>
                        <OrderedProduct />
                        <OrderedProduct />
                        <OrderedProduct />
                        <OrderedProduct />
                    </div>
                    <div className="pb-3">
                        <PriceSummary />
                        <div className="flex items-center justify-between">
                            <Button
                                isPrimary={false}
                                isBold={false}
                                handleClick={() => setModal(true)}
                            >
                                print
                            </Button>
                            <Button
                                isPrimary
                                isBold={false}
                                handleClick={() => {}}
                            >
                                place order
                            </Button>
                        </div>
                    </div>
                </section>
            </section>

            <Modal isOpen={modal}>
                <OrderInvoice printInvoice={() => setModal(false)} />
            </Modal>
        </>
    )
}
