import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { h1Title } from "@/app/fonts"
import { CounterBlock } from "./CommonUI"

export default function HeroSection() {
    return (
        <>
            <section className={[' h-[950px] relative addBg'].join(' ')}>
                <Image src="/runes-hero.png" alt='background image'
                    layout='fill'
                    quality={100}
                    objectFit='cover'
                    priority
                    className='-z-10 bg-slate-500' />

                <div className="tablet:px-[6rem] px-4 pt-[15rem]">
                    <div className=" max-w-[560px] text-white">
                        <h1 className={[h1Title, 'text-[56px]'].join(' ')}>THE COMMUNITY <br />YOU NEED TO <br />OUTPERFORM <br />ON  RUNES</h1>
                        <p className=" py-[2rem]">Runes insiders have gathered to create a private Academy where lucky students will learn useful secrets...</p>

                    </div>
                    <div className=" text-black justify-between mt-[2rem] tablet:flex">
                        <a href="https://twitter.com/RunesAcademy" target="_blank" >
                            <button className=" bg-white px-6 h-[48px] rounded-[20px] font-bold">Get Your WL</button>
                        </a>
                        {/* <CounterBlock /> */}
                    </div>
                </div>
            </section>

        </>
    )
}
