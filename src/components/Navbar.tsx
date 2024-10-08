'use client'

import Link from "next/link"
import styles from "./Navbar.module.css"
import { FaXTwitter } from "react-icons/fa6"

export default function Navbar() {

    return (
        <header className={styles.header}>
            <Link href={"/"}>
                <img src="/flasharbitrage.png" width={200} />
            </Link>
            <a href="https://x.com/flash_arb" target="_blank" rel="noopener noreferrer">
                <FaXTwitter color="#fff" size={24} />
            </a>
        </header>
    )
}

