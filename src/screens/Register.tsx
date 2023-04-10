import Input from "../components/Input"
import { LockIcon, AtIcon } from "../components/Icons"
import AuthH1 from "../components/AuthH1"
import AuthForm from "../components/AuthForm"
import Button from "../components/Button"

export default function Register() {
    return (
        <AuthForm>
            <div>
                <h2 className="opaque-heading">Create new account</h2>
                <AuthH1>Registration</AuthH1>
            </div>

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
                name="password"
                placeholder="confirm password"
                handleChange={() => {}}
            >
                <LockIcon />
            </Input>

            <Button isPrimary handleClick={() => {}}>
                sign up
            </Button>
        </AuthForm>
    )
}
