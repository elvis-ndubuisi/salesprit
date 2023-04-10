import Button from "../components/Button"
import AuthH1 from "../components/AuthH1"
import Input from "../components/Input"
import AuthForm from "../components/AuthForm"
import { LockIcon, AtIcon } from "../components/Icons"
import SocialSignin from "../components/SocialSignin"

export default function Login() {
    return (
        <AuthForm>
            <div className="mb-14">
                <h2 className="opaque-heading">Login to your account</h2>
                <AuthH1>Welcome back</AuthH1>
            </div>

            <Input
                type="text"
                placeholder="placeholder"
                name="name"
                handleChange={() => {}}
            >
                <LockIcon />
            </Input>

            <SocialSignin />

            <Button isPrimary={false} handleClick={() => {}}>
                login
            </Button>
        </AuthForm>
    )
}
