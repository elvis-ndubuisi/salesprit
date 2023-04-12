import CashierProfile from "../components/CashierProfile"
import MainTopBar from "../components/MainTopBar"

export default function Main() {
    return (
        <>
            <section className="pt-5 border-r-2 border-sl-grey px-5">
                <MainTopBar />

                <h2 className="auth-heading">special menu for you</h2>

                <section>product grid</section>
            </section>

            <section className="mt-5">
                <CashierProfile />
            </section>
        </>
    )
}
