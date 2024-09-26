import { hiddenOnMobile } from "@/utils/styles"
import commonStyles from "./CommonStyles.module.css"
import Link from "next/link"
import { orbitron } from "@/app/fonts"
import { FaDribbble, FaLinkedin, FaUser, FaXTwitter } from "react-icons/fa6"
import { FaUserCircle } from "react-icons/fa"



interface SimpleCardProps {
    title: string
    content: string
    toggle?: boolean
    image?: string
    label?: string
}

export const IconCard = ({ title, content, toggle, image, label }: SimpleCardProps) => {
    return (
        <div className=" text-center max-w-[400px] mx-auto mb-[4rem]">
            <div className="h-[64px]">

                <img src={image} className=" mx-auto" alt="" width={64} height={64} />
            </div>
            <div className="my-6">
                <h3 className={['text-xl mb-4 font-bold'].join(' ')}>{title}</h3>
                <p className={['text-base h-[72px]'].join(' ')}>{content}</p>
                <button className=" bg-white py-3 rounded-[20px] px-6 text-black mt-6">Forge {label} key</button>
            </div>
        </div>
    )
}


interface TeamCardProps {
    name: string
    post: string
    content: string
    toggle?: boolean
    profile?: string
    LinkedIn?: string
    X: string
    Dribble?: string
}
export const TeamCard = ({ name, content, post, profile, X }: TeamCardProps) => {
    return (
        <div className=" text-center my-4 w-[300px]">
            {profile ? <img src={profile} height={80} width={80} className="mx-auto my-6 rounded-full overflow-hidden" /> : <FaUserCircle size={80} className="mx-auto my-6" />}



            <h3 className={[commonStyles.boldText, ' text-lg tablet:text-[32px] '].join(' ')}>{name}</h3>
            <p>{post}</p>
            <p className={['text-base py-4 pr-4'].join(' ')}>{content}</p>
            <div className="flex gap-[12px] justify-center">
                {X && <Link href={X} target="_blank"> <FaXTwitter color="#fff" size={24} /></Link>}
                {/* <Link href={"#"}> <FaLinkedin color="#fff" size={24} /> </Link>
                <Link href={"#"}> <FaDribbble color="#fff" size={24} /> </Link> */}
            </div>
        </div>
    )
}
export const AdvtangeMobileCard = ({ title, content }: SimpleCardProps) => {
    return (
        <div className=" text-center my-[4rem]">
            <img src="/Icon/block-icons.svg" height={36} width={36} className="mx-auto my-6" />
            <h3 className={[commonStyles.boldText, 'text-[24px] '].join(' ')}>{title}</h3>
            <p className={['text-base py-4 pr-4'].join(' ')}>{content}</p>
            <div className="flex gap-[12px] justify-center items-center">
                <button className="px-6 py-3 border">Learn More</button>
                <Link href="#"> Sign Up</Link>
            </div>
        </div>
    )
}

interface CounterCardProps {
    time: string
    label: string

}




export const EarlyCard = ({ time, label }: CounterCardProps) => {
    return (
        <div className=" my-3 tablet:mr-6">
            <h1 className={[orbitron.className, "font-bold text-[48px]"].join(' ')}>{time}</h1>
            <p >{label}</p>
        </div>
    )
}

export const CounterCard = ({ time, label }: CounterCardProps) => {
    return (
        <div className=" my-3 tablet:mx-6 mr-6 ">
            <h1 className=" text-[70px]">{time}</h1>
            <p >{label}</p>
        </div>
    )
}

export const CounterBlock = ({ addFlexCent }: { addFlexCent?: string }) => {
    return (
        <div className={[orbitron.className, "mt-8 text-[24px] tablet:px-[4rem] text-white"].join(' ')}>
            <h2 className="tablet:ml-6">HALVING IN :</h2>
            <div className={`flex tablet:justify-center ${addFlexCent}`}>
                <CounterCard time="9" label="Days" />
                <CounterCard time="1" label="Hours" />
                <CounterCard time="59" label="Minutes" />
                <CounterCard time="59" label="Seconds" />
            </div>
        </div>
    )
}