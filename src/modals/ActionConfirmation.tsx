import Button from "../components/Button"

type Props = {
    confirm: () => void
    deny: () => void
    alertTitle:
        | "delete this product"
        | "delete this customer"
        | "delete this employee"
}

export default function ActionConfirmation({
    confirm,
    deny,
    alertTitle,
}: Props) {
    let alertWarning =
        alertTitle === "delete this customer"
            ? "customer"
            : alertTitle === "delete this employee"
            ? "employee"
            : alertTitle === "delete this product"
            ? "product"
            : ""
    return (
        <section className="flex flex-col items-center rounded-lg">
            <img src="" alt="confirmation alert" />
            <h3>{alertTitle} ?</h3>
            <p>{alertWarning} ?</p>

            <div className="flex items-center justify-center gap-4">
                <Button isPrimary isBold={false} handleClick={confirm}>
                    yes
                </Button>
                <Button isPrimary={false} isBold={false} handleClick={deny}>
                    no
                </Button>
            </div>
        </section>
    )
}
