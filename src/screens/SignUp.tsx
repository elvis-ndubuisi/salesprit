import { Link } from "react-router-dom"

import Input from "../components/Input"
import { LockIcon, AtIcon } from "../components/Icons"
import AuthForm from "../components/AuthForm"
import Button from "../components/Button"

export default function SignUp() {
    return (
        <AuthForm>
            <div className="mb-5">
                <h2 className="opaque-heading">Create new account</h2>
                <h1 className="auth-heading">Registration</h1>
            </div>

            <fieldset className="flex flex-col gap-5 mb-4">
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

                <p className="font-medium text-[1.1rem] text-left">
                    By signing below, you agree to the{" "}
                    <Link
                        to="*"
                        title="Redirects to 404 page"
                        className="linkable-button"
                    >
                        Terms of use
                    </Link>{" "}
                    and{" "}
                    <Link
                        to="*"
                        title="Redirects to 404 page"
                        className="linkable-button"
                    >
                        privacy notice
                    </Link>
                </p>
            </fieldset>

            <Button isPrimary handleClick={() => {}}>
                sign up
            </Button>

            <p className="font-medium text-[1.1rem] text-center">
                Already have an account?{" "}
                <Link to="login" className="linkable-button">
                    Login
                </Link>
            </p>
        </AuthForm>
    )
}
