import { useNavigate } from "react-router-dom"

export default function AddProduct() {
    const navigate = useNavigate()
    return (
        <section className="col-span-2 h-screen max-h-[inherit] p-5">
            <h3 className="section-heading">add product</h3>

            <section className="relative">
                <button
                    type="button"
                    className="linkable-button"
                    onClick={() => navigate(-1)}
                >
                    back
                </button>
            </section>
        </section>
    )
}
