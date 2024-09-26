import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { AdvtangeMobileCard, IconCard } from "./CommonUI"
import { hiddenOnMobile } from "@/utils/styles"
import { h1Title, orbitron } from "@/app/fonts"


const advtanges = [
    {
        title: "Unlock the Power of NFTs with Our Collection",
        content: "Discover the unique features that set our NFT Collection apart. From rarity and security to the potential for high returns, our collection offers it all."
    },
    {
        title: "Invest in Rare and Secure NFTs",
        content: "Our NFT Collection brings you a curated selection of rare and secure digital assets. Explore the possibilities and seize the opportunity to grow your portfolio."
    },
    {
        title: "Maximize Your Returns with NFT Investments",
        content: "Our NFT Collection offers the potential for high returns. Don't miss out on this exciting opportunity to invest in the future of blockchain technology."
    },

]



export default function AdvSection() {
    return (
        <section className={["text-center"].join(' ')}>
            <h1 className={[h1Title, 'text-[48px]'].join(' ')}>Bringing Mass Adoption to Runes Ecosystem with our Multichain Runes Keys NFT Collection</h1>

            <div className="tablet:flex justify-around gap-6 py-[4.5rem] w-full mx-auto">
                <IconCard title="Open Mint" content="Mint is open from 10 April to 17 AprilThere is no wallet limits for Keys you can Forge.Mint price is 0,0014 BTC" image="/Icon/btc.svg" label="BTC" />
                <IconCard title="Open Mint" label="ETH" content="Our NFT Collection brings you a curated selection of rare and secure digital assets. Explore the possibilities and seize the opportunity to grow your portfolio." image="/Icon/eth.svg" />
                <IconCard title="Coming Soon" label="SOL" content="Our NFT Collection offers the potential for high returns. Don't miss out on this exciting opportunity to invest in the future of blockchain technology." image="/Icon/sol.svg" />
            </div>
        </section>
    )
}