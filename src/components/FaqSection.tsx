import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { FaqAccordion } from "./FaqAccordion"
import { hiddenOnMobile } from "@/utils/styles"
import { h1Title } from "@/app/fonts"
import { CounterBlock } from "./CommonUI"

export default function FaqSection() {
    return (
        <section className={[commonStyles.padding, "max-w-[968px] mx-auto text-center"].join(" ")} >
            <h1 className={[h1Title, 'text-[48px]'].join(' ')}>Frequently Asked Questions</h1>

            <div className="my-24">
                <FaqAccordion />
            </div>
            <div >
                <h1 className={[commonStyles.boldText, 'text-[32px] text-center'].join(" ")}>Some WL are waiting for you on <br /> Twitter  </h1>
                <a href="https://twitter.com/RunesAcademy" target="_blank">
                    <button className=" rounded-lg px-6 py-3 border mt-4">Twitter</button>
                </a>
                {/* <CounterBlock addFlexCent="addFlexCent" /> */}
            </div>

        </section>
    )
}
