import PriceSummary from "../components/PriceSummary"
import OrderedProduct from "../components/OrderedProduct"
import { SettingInput } from "../components/Input"
import Button from "../components/Button"

export default function Order() {
    return (
        <section className="h-screen col-span-2 p-5 grid grid-cols-2">
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
                    <textarea name="address" id="address" />
                </label>
            </form>
            <section className="col-span-2 grid grid-cols-2 gap-x-3">
                <div>
                    <OrderedProduct />
                    <OrderedProduct />
                    <OrderedProduct />
                    <OrderedProduct />
                </div>
                <div>
                    <PriceSummary />
                    <div className="flex items-center justify-between">
                        <Button isPrimary isBold={false} handleClick={() => {}}>
                            print
                        </Button>
                        <Button isPrimary isBold={false} handleClick={() => {}}>
                            place order
                        </Button>
                    </div>
                </div>
            </section>
        </section>
    )
}
