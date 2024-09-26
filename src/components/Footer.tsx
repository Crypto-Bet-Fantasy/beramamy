import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className="flex justify-center py-[4rem]">
            <img src="/runes-logo.svg" width={80} height={80} alt="" />
        </footer>
    )
}

