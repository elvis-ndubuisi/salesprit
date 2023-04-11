import { Link } from "react-router-dom"

import SocialButton from "./SocialButton"
import { GoogleIcon, FacebookIcon } from "./Icons"

export default function SocialSignIn() {
    return (
        <div>
            <div className="text-sl-grey w-full font-medium my-8 flex items-center justify-between gap-3 before:content-[' '] after:content-[' '] before:h-[2px] after:h-[2px] before:flex-1 after:flex-1 before:bg-sl-stroke after:bg-sl-stroke">
                Or
            </div>
            <div className="flex items-center gap-5 justify-center">
                <SocialButton socialName="goggle">
                    <GoogleIcon />
                </SocialButton>
                <SocialButton socialName="facebook">
                    <FacebookIcon />
                </SocialButton>
            </div>
        </div>
    )
}
