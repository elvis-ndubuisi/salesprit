import Button from "../../components/Button"

export default function LangRegion() {
    return (
        <section className="max-w-xl mx-auto flex flex-col gap-8">
            <div>
                <h4 className="section-heading">personal information</h4>
                <p className="text-justify my-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Soluta fugit delectus ad culpa quaerat itaque tenetur
                    veritatis placeat voluptate iusto doloribus saepe ipsam,
                    pariatur dolores doloremque animi vero. Magni, accusantium!
                </p>
            </div>

            <h2>Skipped the cool path</h2>

            <Button
                isPrimary
                isBold={false}
                handleClick={() => alert("Hello from this other side")}
            >
                Save Changes
            </Button>
        </section>
    )
}
