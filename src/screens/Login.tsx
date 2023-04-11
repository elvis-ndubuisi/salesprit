import { Link } from "react-router-dom"

import Button from "../components/Button"
import Input from "../components/Input"
import AuthForm from "../components/AuthForm"
import { LockIcon, AtIcon } from "../components/Icons"
import SocialSignIn from "../components/SocialSignIn"

export default function Login() {
    return (
        <AuthForm>
            <div className="mb-5">
                <h2 className="opaque-heading">Login to your account</h2>
                <h1 className="auth-heading">Welcome back</h1>
            </div>

            <fieldset>
                <Input
                    type="text"
                    placeholder="Email address"
                    name="name"
                    handleChange={() => {}}
                >
                    <AtIcon />
                </Input>

                <Input
                    type="text"
                    placeholder="password"
                    name="password"
                    handleChange={() => {}}
                >
                    <LockIcon />
                </Input>
                <Link to="/forget-password">forget password?</Link>
            </fieldset>

            <Button isPrimary handleClick={() => {}}>
                login
            </Button>

            <SocialSignIn />
        </AuthForm>
    )
}
