import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { SettingInput } from "../../components/Input"

export default function EditCustomer() {
    const navigate = useNavigate()
    return (
        <section className="col-span-2 h-screen p-5">
            <div className="flex items-center justify-between mb-4">
                <h2 className="section-heading">edit customers</h2>
            </div>

            <section className="h-[90%] p-6 rounded-md shadow-2xl flex flex-col items-start justify-between">
                <button
                    type="button"
                    className="linkable-button"
                    onClick={() => navigate(-1)}
                >
                    back
                </button>

                <form className="grid grid-cols-3 gap-5 w-full">
                    <SettingInput
                        type="string"
                        name="full name"
                        placeholder="Addie Morgan"
                        handleChange={() => {}}
                    />

                    <SettingInput
                        type="string"
                        name="gender"
                        placeholder="male"
                        handleChange={() => {}}
                    />

                    <SettingInput
                        type="string"
                        name="city"
                        placeholder="abuja"
                        handleChange={() => {}}
                    />

                    <SettingInput
                        type="number"
                        name="phone number"
                        placeholder="3340-3948559"
                        handleChange={() => {}}
                    />

                    <SettingInput
                        type="string"
                        name="email address"
                        placeholder="addie@morgan.com"
                        handleChange={() => {}}
                    />

                    <SettingInput
                        type="number"
                        name="pincode"
                        placeholder="440559"
                        handleChange={() => {}}
                    />
                </form>

                <div className="w-full grid place-content-center">
                    <Button
                        isPrimary
                        isBold={false}
                        handleClick={() => alert("save")}
                    >
                        save
                    </Button>
                </div>
            </section>
        </section>
    )
}
