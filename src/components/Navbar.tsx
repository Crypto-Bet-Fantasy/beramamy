'use client'

import Link from "next/link"
import styles from "./Navbar.module.css"
import commonStyles from "./CommonStyles.module.css"
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6"




export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    // const MobileNav = () => {
    //     return (
    //         <div
    //             className={`absolute top-0 left-0 h-screen p-[2rem] z-10 w-screen bg-[#fff] flex flex-col justify-between items-start transform ${toggleMenu ? "-translate-x-0" : "-translate-x-full"
    //                 } transition-transform duration-300 ease-in-out filter  `}
    //         >
    //             <div className=" w-full">
    //                 <div
    //                     className="flex justify-between cursor-pointer mb-[2rem]"
    //                     onClick={() => setToggleMenu(!toggleMenu)}
    //                 >
    //                     <h1 className=" font-bold">Logo</h1>
    //                     <img src="/close.png" width={30} alt="" />
    //                 </div>
    //                 <nav className=" flex flex-col ">
    //                     <Link href={"#"} className="py-2">Invest Now</Link>
    //                     <Link href={"#"} className="py-2">About Us</Link>
    //                     <Link href={"#"} className="py-2">Contact Us</Link>
    //                     <Link href={"#"} className="py-2">More</Link>
    //                 </nav>

    //             </div>

    //         </div>
    //     );
    // }

    return (
        <header className={styles.header}>
            <div className="flex items-center">
                <img src="/runes-logo.svg" width={50} height={50} className="mr-[4rem]" />
                {/* <nav className={commonStyles.hiddenOnMobile}>
                    <Link href={"#"} className={styles.navLink}>About Us</Link>
                    <Link href={"#"} className={styles.navLink}>Dashboard</Link>
                    <Link href={"#"} className={styles.navLink}>Docs</Link>
                </nav> */}
            </div>
            <a href="https://twitter.com/RunesAcademy" target="_blank" rel="noopener noreferrer">
                <FaXTwitter color="#fff" size={24} />
            </a>
            {/* <div className={["cursor-pointer", commonStyles.hiddenOnDesktop].join(" ")} onClick={() => setToggleMenu(!toggleMenu)}>
                <img src="/menu.png" width={30} alt="" />
            </div> */}
            {/* <MobileNav /> */}
        </header>
    )
}

