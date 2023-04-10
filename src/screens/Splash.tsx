import logoFull from "../assets/logo-full.png"
import splash from "../assets/splash.png"
import LoaderIndicator from "../components/LoaderIndicator"

// TODO: fix padding that wraps logo and loader
export default function Splash() {
    return (
        <section
            className="w-full h-full bg-cover bg-no-repeat flex flex-col justify-end items-end relative after:content-[' '] after:absolute after:top-0 after:left-0 after:bg-sl-primary/20 after:w-full after:h-full after:bg-blend-darken"
            style={{ backgroundImage: `url(${splash})` }}
        >
            <div className="z-10 p-12 w-full flex flex-col items-center justify-center">
                <img
                    src={logoFull}
                    alt="salesprit"
                    className="place-self-end max-w-[20rem] object-contain"
                />
                <LoaderIndicator />
            </div>
        </section>
    )
}
