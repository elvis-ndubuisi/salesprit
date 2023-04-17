import Button from "../components/Button"
import CashierProfile from "../components/CashierProfile"
import MainTopBar from "../components/MainTopBar"
import OrderedProduct from "../components/OrderedProduct"
import PriceSummary from "../components/PriceSummary"
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

                <section className="flex-1 mb-2">
                    <h3 className="font-bold text-xl my-3">Order #98055</h3>
                    <section className="flex flex-col gap-1 max-h-[80%] overflow-y-scroll">
                        <OrderedProduct />
                        <OrderedProduct />
                        <OrderedProduct />
                        <OrderedProduct />
                    </section>
                </section>

                <PriceSummary />

                <Button isPrimary isBold={false} handleClick={() => {}}>
                    place order
                </Button>
            </section>
        </>
    )
}
