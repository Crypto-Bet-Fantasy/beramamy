import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { hiddenOnMobile } from "@/utils/styles"
import { TeamCard } from "./CommonUI"
import { h1Title } from "@/app/fonts"


const teamMembers = [
    {
        name: "Unhealthy",
        profile: "unhealth.jpeg",
        post: "CEO - Co Founder",
        content: "Corporate finance - Runes OG",
        twitter: 'https://twitter.com/0x_Unhealthy'
    },
    {
        name: "Dadev",
        profile: "dadev.jpeg",
        post: "CTO - Co Founder",
        content: "Fullstack Web3 developer - Runes OG",
        twitter: 'https://twitter.com/dadev42'
    },

    // {
    //     name: "Rick",
    //     post: "Asset Manager",
    //     content: "2017 OG",
    //     twitter: ''
    // },
    {
        name: "Otto",
        profile: "otto.jpeg",
        post: "PM & Product",
        content: "Cooking products since 2017",
        twitter: 'https://twitter.com/0xOttoMotto'
    },
    {
        name: "Kamal",
        profile: "kamal.jpeg",
        post: "CM",
        content: "4 years in crypto ",
        twitter: 'https://twitter.com/harlard_runes'
    },

]
const teamMembers_2 = [
    {
        name: "Anton BT",
        profile: "anton.jpeg",
        post: "Collab Manager",
        content: "4 years in crypto - Spend his time in AMAs",
        twitter: 'https://twitter.com/antonweb3strat'
    },
    // {
    //     name: "Leif",
    //     post: "Designer",
    //     content: "4 years in crypto",
    //     twitter: ''
    // },
    {
        name: "billy.99",
        profile: "billy.jpeg",
        post: "Collab & advisor",
        content: "Always networking with the right persons at the right moment",
        twitter: 'https://twitter.com/tobitoxyz'
    },
    {
        name: "Drop",
        profile: "drop.jpeg",
        post: "Fullstack dev",
        content: "human debugger",
        twitter: ''
    },
]

export default function TeamSection() {
    return (
        <section className={commonStyles.padding} >
            <div className=" text-center pb-[6rem]">
                <h1 className={[h1Title, 'text-[48px]'].join(' ')}>Our Team</h1>
                <p className="pt-3">Our OG Task Force of Web3 Natives</p>
            </div>

            <div className='grid tablet:grid-cols-4 grid-cols-1 place-content-center place-items-center'>
                {teamMembers.map((member, idx) => (
                    <TeamCard key={idx} name={member.name} post={member.post} content={member.content} X={member.twitter} profile={member.profile} />
                ))}
            </div>
            <div className='grid tablet:grid-cols-3 grid-cols-1 place-content-center place-items-center mt-6 gap-2'>
                {teamMembers_2.map((member, idx) => (
                    <TeamCard key={idx} name={member.name} post={member.post} content={member.content} X={member.twitter} profile={member.profile} />
                ))}
            </div>

        </section>
    )
}
