import SocialButton from "./SocialButton"
import { GoogleIcon, FacebookIcon } from "./Icons"

export default function SocialSignin() {
    return (
        <div>
            <div className="text-grey w-ful flex items-center justify-between gap-3 before:content-[' '] after:content-[' '] before:h-[2px] after:h-[2px] before:flex-1 after:flex-1 before:bg-sl-stroke after:bg-sl-stroke">
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
