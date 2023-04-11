import { Link } from "react-router-dom"

import AuthForm from "../components/AuthForm"
import Button from "../components/Button"
import { AtIcon } from "../components/Icons"
import Input from "../components/Input"
import SocialSignIn from "../components/SocialSignIn"

export default function ForgetPassword() {
    return (
        <AuthForm>
            <div>
                <h2 className="opaque-heading">forget your password</h2>
                <h1 className="auth-heading">forget password</h1>
            </div>

            <fieldset>
                <Input
                    type="text"
                    placeholder="email address"
                    handleChange={() => {}}
                    name="email"
                >
                    <AtIcon />
                </Input>
            </fieldset>

            <Button isPrimary handleClick={() => {}}>
                Continue
            </Button>

            <SocialSignIn />

            <p className="font-medium text-[1.3rem]">
                Remembered your password?{" "}
                <Link to="login" className="clickable-button">
                    Login
                </Link>
            </p>
        </AuthForm>
    )
}
