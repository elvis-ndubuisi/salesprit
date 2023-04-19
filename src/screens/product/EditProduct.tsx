import { useNavigate } from "react-router-dom"

import { SettingInput } from "../../components/Input"
import Button from "../../components/Button"

export default function EditProduct() {
    const navigate = useNavigate()
    return (
        <section className="col-span-2 h-screen max-h-[inherit] p-5">
            <h3 className="section-heading">edit product</h3>
            <section className="relative">
                <button
                    type="button"
                    className="linkable-button absolute top-0 left-o"
                    onClick={() => navigate(-1)}
                >
                    back
                </button>

                <div className="rounded-md overflow-hidden h-32 aspect-square">
                    <img
                        src=""
                        alt="product"
                        className="w-full h-full object-fill object-center"
                    />
                </div>
                <h2 className="font-bold text-center text-xl my-4 mb-2">
                    Upload image
                </h2>

                <form className="grid grid-cols-3 gap-5">
                    <SettingInput
                        name="product name"
                        placeholder="product name"
                        type="text"
                        handleChange={() => alert("edit p")}
                    />
                    <SettingInput
                        name="product unit"
                        placeholder="select"
                        type="text"
                        handleChange={() => alert("edit p")}
                    />
                    <SettingInput
                        name="category"
                        placeholder="select category"
                        type="text"
                        handleChange={() => alert("edit p")}
                    />
                    <SettingInput
                        name="SKU"
                        placeholder="product SKU"
                        type="text"
                        handleChange={() => alert("edit p")}
                    />

                    <SettingInput
                        name="barcode type"
                        placeholder="123 ABD"
                        type="text"
                        handleChange={() => alert("edit p")}
                    />

                    <SettingInput
                        name="product ID"
                        placeholder="23243145234545"
                        type="text"
                        handleChange={() => alert("edit p")}
                    />
                </form>

                <Button
                    isPrimary
                    isBold={false}
                    handleClick={() => alert("save")}
                >
                    save
                </Button>
            </section>
        </section>
    )
}
