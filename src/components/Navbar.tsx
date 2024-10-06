'use client'

import Link from "next/link"
import styles from "./Navbar.module.css"
import commonStyles from "./CommonStyles.module.css"
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6"
import { sixtyfour } from "@/app/fonts";




export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className={styles.header}>
            <div className="flex items-center">
               <h1 className={[sixtyfour.className, " text-2xl"].join(' ')}>SleyMoon Protocol</h1>
                
            </div>
            <a href="https://twitter.com/RunesAcademy" target="_blank" rel="noopener noreferrer">
                <FaXTwitter color="#fff" size={24} />
            </a>
           
        </header>
    )
}

