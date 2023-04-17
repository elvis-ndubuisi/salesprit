import React from "react"

import Button from "../../components/Button"
import { SettingInput } from "../../components/Input"

type Props = {
    firstname: string
    lastname: string
    email: string
    position: string
    dob: string
    mobile: number
}

export default function PersonalInfo() {
    const [profile, setProfile] = React.useState<Props>({
        firstname: "Aguaero",
        lastname: "anaak",
        email: "arguero@fakemeil.com",
        mobile: +9934853002,
        position: "head cashier",
        dob: "23/04/20234",
    })

    function updateProfile() {
        alert(profile)
    }

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

            <form className="flex flex-col gap-5">
                <fieldset className="flex items-start justify-between">
                    <SettingInput
                        name="first name"
                        placeholder={profile.firstname}
                        handleChange={(event) =>
                            setProfile((prev) => ({
                                ...prev,
                                firstname: event.target.value,
                            }))
                        }
                    />

                    <SettingInput
                        name="last name"
                        placeholder={profile.lastname}
                        handleChange={(event) =>
                            setProfile((prev) => ({
                                ...prev,
                                lastname: event.target.value,
                            }))
                        }
                    />
                </fieldset>

                <fieldset className="flex items-start justify-between">
                    <SettingInput
                        name="email"
                        placeholder={profile.email}
                        handleChange={(event) =>
                            setProfile((prev) => ({
                                ...prev,
                                email: event.target.value,
                            }))
                        }
                    />

                    <SettingInput
                        name="number"
                        placeholder={`${profile.mobile}`}
                        handleChange={(event) =>
                            setProfile((prev) => ({
                                ...prev,
                                mobile: +event.target.value,
                            }))
                        }
                    />
                </fieldset>

                <fieldset className="flex items-start justify-between">
                    <SettingInput
                        name="date of birth"
                        placeholder={profile.dob}
                        handleChange={(event) =>
                            setProfile((prev) => ({
                                ...prev,
                                dob: event.target.value,
                            }))
                        }
                    />

                    <SettingInput
                        name="position"
                        placeholder={profile.position}
                        handleChange={(event) =>
                            setProfile((prev) => ({
                                ...prev,
                                position: event.target.value,
                            }))
                        }
                    />
                </fieldset>

                <Button
                    isPrimary
                    isBold={false}
                    handleClick={() => updateProfile}
                >
                    Save Changes
                </Button>
            </form>
        </section>
    )
}
