import React from "react"
import { Link } from "react-router-dom"

import { SettingInput } from "../../components/Input"
import Button from "../../components/Button"

type Props = {
    username: string
    mobile: number
    email: string
    password: string
}
export default function LoginPassword() {
    const [cred, setCred] = React.useState<Props>({
        username: "hilda agnes",
        mobile: 2345567754,
        email: "hilda@agnes.com",
        password: "**********",
    })
    function updateChanges() {
        alert("c")
    }
    return (
        <section className="max-w-xl mx-auto flex flex-col gap-8">
            <div>
                <h4 className="section-heading">login & password</h4>
                <p className="text-justify my-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Soluta fugit delectus ad culpa quaerat itaque tenetur
                    veritatis placeat voluptate iusto doloribus saepe ipsam,
                    pariatur dolores doloremque animi vero. Magni, accusantium!
                </p>
            </div>

            <form className="flex flex-col gap-5">
                <fieldset className="flex items-start justify-between">
                    <SettingInput
                        name="username"
                        placeholder={cred.username}
                        handleChange={(event) =>
                            setCred((prev) => ({
                                ...prev,
                                username: event.target.value,
                            }))
                        }
                    />

                    <SettingInput
                        name="phone number"
                        placeholder={`${cred.mobile}`}
                        handleChange={(event) =>
                            setCred((prev) => ({
                                ...prev,
                                mobile: +event.target.value,
                            }))
                        }
                    />
                </fieldset>

                <fieldset className="flex items-start justify-between">
                    <SettingInput
                        name="email address"
                        placeholder={cred.email}
                        handleChange={(event) =>
                            setCred((prev) => ({
                                ...prev,
                                username: event.target.value,
                            }))
                        }
                    />

                    <SettingInput
                        name="password"
                        placeholder={`${cred.password}`}
                        handleChange={(event) =>
                            setCred((prev) => ({
                                ...prev,
                                mobile: +event.target.value,
                            }))
                        }
                    />
                </fieldset>

                <Link
                    to="forget-password"
                    className="linkable-button my-4 mb-7 text-right"
                >
                    change password ?
                </Link>

                <Button
                    isPrimary
                    isBold={false}
                    handleClick={() => updateChanges}
                >
                    Save Changes
                </Button>
            </form>
        </section>
    )
}
