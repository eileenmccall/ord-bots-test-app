"use client";
import styles from "./Nav.module.css";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();
    const navConfig = [
        {
            route: "/",
            label: "Home",
            newTab: false
        },
        {
            route: "/retro",
            label: "Project Retrospective",
            newTab: false
        },
        {
            route: "https://github.com/eileenmccall/ord-bots-test-app",
            label: "Repo",
            newTab: true
        }
    ]

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                {navConfig.map((item, index) => {
                    return (
                        <li key={index} className={styles.navItem}>
                            <a className={`${styles.navLink} ${pathname === item.route ? styles.active : ""}`}
                                href={item.route}
                                {
                                    ...(item.newTab 
                                        ? { target: "_blank", rel: "noopener noreferrer" } 
                                        : {})
                                }
                            >
                                {item.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}