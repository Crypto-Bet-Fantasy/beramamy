import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { hiddenOnMobile } from "@/utils/styles"
import { Orbitron } from "next/font/google"
import { h1Title, orbitron } from "@/app/fonts"


export default function DiscoverSection() {
    return (
        <section className={commonStyles.padding} >
            <div className={["tablet:flex justify-around pb-8 items-center"].join(' ')}>
                <div >
                    <h1 className={[h1Title, 'text-[40px]'].join(' ')}> THE BIGGEST <br />OPPORTUNITY OF THIS <br />CYCLE IS GOING TO START <br />IN A FEW DAYS...
                    </h1>
                    <p className={[commonStyles.lightText, "py-6 text-lg max-w-[616px] leading-normal"].join(" ")}>...and most people will miss it. <br />Why? Because they don’t have access to insider information. <br />Runes Academy will help... <br />
                        <div className="ml-4">
                            ᛤ Securing a curated community of builders <br />
                            ᛤ Sharing insider information
                        </div>

                    </p>
                    <a href="https://twitter.com/RunesAcademy" target="_blank" ><button className=" py-3 bg-white text-black rounded-[20px] w-[151px] font-bold">Join Us</button></a>

                </div>
                <div>
                    <img src="/runes-key.png" alt="" className="tablet:max-w-[616px]  max-h-[600px] mt-6" />
                </div>
            </div>

        </section>
    )
}
