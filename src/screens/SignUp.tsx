import { Link } from "react-router-dom"

import Input from "../components/Input"
import { LockIcon, AtIcon } from "../components/Icons"
import AuthForm from "../components/AuthForm"
import Button from "../components/Button"

export default function SignUp() {
    return (
        <AuthForm>
            <div>
                <h2 className="opaque-heading">Create new account</h2>
                <h1 className="auth-heading">Registration</h1>
            </div>

            <fieldset>
                <Input
                    type="text"
                    name="email"
                    placeholder="email address"
                    handleChange={() => {}}
                >
                    <AtIcon />
                </Input>

                <Input
                    type="password"
                    name="password"
                    placeholder="password"
                    handleChange={() => {}}
                >
                    <LockIcon />
                </Input>

                <Input
                    type="password"
                    name="confirm-password"
                    placeholder="confirm password"
                    handleChange={() => {}}
                >
                    <LockIcon />
                </Input>

                <p className="font-medium text-[1.3rem]">
                    By signing below, you agree to the{" "}
                    <Link to="*">Terms of use</Link> and{" "}
                    <Link to="*">privacy notice</Link>
                </p>
            </fieldset>

            <Button isPrimary handleClick={() => {}}>
                sign up
            </Button>

            <p className="font-medium text-[1.3rem]">
                Already have an account?{" "}
                <Link to="login" className="clickable-button">
                    Login
                </Link>
            </p>
        </AuthForm>
    )
}
