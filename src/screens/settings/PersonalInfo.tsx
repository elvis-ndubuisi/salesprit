import { useId } from "react"

import Button from "../../components/Button"
import { SettingInput } from "../../components/Input"

export default function PersonalInfo() {
    const id = useId()

    return (
        <section className="max-w-lg mx-auto flex flex-col gap-8">
            <div>
                <h4 className="section-heading">personal information</h4>
                <p className="text-justify my-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Soluta fugit delectus ad culpa quaerat itaque tenetur
                    veritatis placeat voluptate iusto doloribus saepe ipsam,
                    pariatur dolores doloremque animi vero. Magni, accusantium!
                </p>
            </div>

            <form action="">
                <fieldset className="flex items-start justify-between">
                    <label
                        htmlFor={`firstname-${id}`}
                        className="flex flex-col gap-2"
                    >
                        first name
                        <SettingInput
                            name="firstname"
                            id={`firstname-${id}`}
                            placeholder="placeholder"
                            handleChange={() => {}}
                        />
                    </label>

                    <label
                        htmlFor={`lastname-${id}`}
                        className="flex flex-col gap-2"
                    >
                        first name
                        <input type="text" name="" id={`lastname-${id}`} />
                    </label>
                </fieldset>

                <fieldset className="flex items-start justify-between">
                    <label
                        htmlFor={`firstname-${id}`}
                        className="flex flex-col gap-2"
                    >
                        first name
                        <input type="text" name="" id={`firstname-${id}`} />
                    </label>

                    <label
                        htmlFor={`lastname-${id}`}
                        className="flex flex-col gap-2"
                    >
                        first name
                        <input type="text" name="" id={`lastname-${id}`} />
                    </label>
                </fieldset>

                <Button isPrimary isBold={false} handleClick={() => {}}>
                    Save Changes
                </Button>
            </form>
        </section>
    )
}
