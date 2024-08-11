import OrdinalsBotLogo from "@/app/icons/ordBots";
import styles from "./Header.module.css";

export default function Header () {
    return (
        <header className={styles.header}><h1 className={styles.title}>Eileen's demo for</h1> <OrdinalsBotLogo /></header>
    )
}