import { HiPlus } from "react-icons/hi2"
import Button from "../../components/Button"

export default function Product() {
    return (
        <section className="col-span-2 h-screen max-h-[inherit] p-5">
            <div className="flex items-center justify-between">
                <h2 className="section-heading">product</h2>
                <Button isPrimary isBold={false} handleClick={() => {}}>
                    <span className="flex items-center gap-2">
                        <HiPlus size={20} />
                        add product
                    </span>
                </Button>
            </div>

            <table className="w-full shadow-lg">
                <thead>
                    <td>product</td>
                    <td>product ID</td>
                    <td>qty</td>
                    <td>price</td>
                    <td>action</td>
                </thead>
            </table>
        </section>
    )
}
