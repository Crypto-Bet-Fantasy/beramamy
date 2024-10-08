'use client'

import styles from "./Navbar.module.css"
import { FaXTwitter } from "react-icons/fa6"
import { sixtyfour } from "@/app/fonts";




export default function Navbar() {

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

