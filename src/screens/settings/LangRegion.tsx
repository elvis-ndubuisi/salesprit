import Button from "../../components/Button"

export default function LangRegion() {
    return (
        <section className="max-w-lg mx-auto flex flex-col items-stra">
            <h4 className="section-heading">language & region</h4>
            <p className="text-justify my-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
                fugit delectus ad culpa quaerat itaque tenetur veritatis placeat
                voluptate iusto doloribus saepe ipsam, pariatur dolores
                doloremque animi vero. Magni, accusantium!
            </p>

            <Button isPrimary isBold={false} handleClick={() => {}}>
                save changes
            </Button>
        </section>
    )
}
