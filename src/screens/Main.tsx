import Button from "../components/Button"
import CashierProfile from "../components/CashierProfile"
import MainTopBar from "../components/MainTopBar"
import ProductCard from "../components/ProductCard"

export default function Main() {
    return (
        <>
            <section className="h-screen pt-5 border-r-2 border-sl-grey px-5">
                <MainTopBar />

                <h2 className="section-heading my-4">special menu for you</h2>

                <section className="grid grid-cols-4 gap-4 pb-3 h-[80%] overflow-y-scroll overscroll-y-contain">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </section>
            </section>

            <section className="pt-5 flex flex-col justify-between max-h-screen px-5 pb-6">
                <CashierProfile />

                <section>
                    <h3>Order #98055</h3>
                    <section className="flex flex-col gap-4">
                        products orders
                    </section>
                </section>
                <section>calculations</section>

                <Button isPrimary handleClick={() => {}}>
                    place order
                </Button>
            </section>
        </>
    )
}
