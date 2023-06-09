import { Link } from "react-router-dom"

import AuthForm from "../components/AuthForm"
import Button from "../components/Button"
import { LockIcon } from "../components/Icons"
import Input from "../components/Input"
import SocialSignIn from "../components/SocialSignIn"

export default function ResetPassword() {
    return (
        <AuthForm>
            <div className="mb-5">
                <h2 className="opaque-heading">Create new password</h2>
                <h1 className="auth-heading">reset password</h1>
            </div>

            <fieldset className="flex flex-col gap-5 mb-4">
                <Input
                    type="password"
                    name="password"
                    placeholder="New password"
                    handleChange={() => {}}
                >
                    <LockIcon />
                </Input>

                <Input
                    type="password"
                    name="password"
                    placeholder="confirm password"
                    handleChange={() => {}}
                >
                    <LockIcon />
                </Input>
            </fieldset>

            <Button isPrimary handleClick={() => {}}>
                change password
            </Button>

            <SocialSignIn />

            <p className="font-medium text-[1.1rem] text-center">
                Remembered your password?{" "}
                <Link to="login" className="linkable-button">
                    login
                </Link>
            </p>
        </AuthForm>
    )
}
