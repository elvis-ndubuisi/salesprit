import Button from "../components/Button"
import exclamationIcon from "../assets/icons/exclamation.svg"

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
    let alertWarning: string
    if (alertTitle === "delete this customer") {
        alertWarning = "customer"
    } else if (alertTitle === "delete this employee") {
        alertWarning = "employee"
    } else if (alertTitle === "delete this product") {
        alertWarning = "product"
    } else {
        alertWarning = ""
    }

    return (
        <section className="bg-sl-light rounded-lg min-w-[480px] flex flex-col items-center gap-3 p-4">
            <img
                src={exclamationIcon}
                alt="confirmation alert"
                className="w-20 aspect-square object-contain"
            />
            <h4 className="section-heading">{alertTitle} ?</h4>

            <p className="text-lg text-sl-secondary">
                Are you sure you want to delete this {alertWarning} ?
            </p>

            <div className="flex items-center justify-center gap-4 my-3">
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
