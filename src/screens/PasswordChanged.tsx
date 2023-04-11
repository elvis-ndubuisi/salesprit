import Button from "../components/Button"

// TODO: Add green notification modal
export default function PasswordChanged() {
    return (
        <section>
            <div>
                <h2 className="opaque-heading">
                    Password changed successfully
                </h2>
                <h1 className="auth-heading">password changed</h1>
            </div>

            <p>
                We have sent a verification link to your email address{" "}
                <span>emailadd@address.com</span>
            </p>

            <p>Just click on the link in your mail box & all done.</p>

            <Button isPrimary handleClick={() => {}}>
                back to login
            </Button>
            <Button isPrimary={false} handleClick={() => {}}>
                resend link
            </Button>
        </section>
    )
}
