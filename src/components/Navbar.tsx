'use client'

import Link from "next/link"
import styles from "./Navbar.module.css"
import { FaXTwitter } from "react-icons/fa6"
// import { sixtyfour } from "@/app/fonts";




export default function Navbar() {

    return (
        <header className={styles.header}>
            <Link href={"/"}>
                <img src="/flashArbitrage.png" width={200} />
            </Link>
            <a href="https://x.com/flash_arb" target="_blank" rel="noopener noreferrer">
                <FaXTwitter color="#fff" size={24} />
            </a>
           
        </header>
    )
}

