import logoIMG from "../assets/shared/logo.svg";
import Link from "next/link"
import Image from "next/image";
import styles from "/styles/Header.module.css";
import { useEffect, useState } from "react";

import iconClose from "../assets/shared/icon-close.svg";
import iconHamburguer from "../assets/shared/icon-hamburger.svg"

export default function Header() {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		(window.innerWidth >= 800) ? setIsTablet(true) : setIsTablet(false);
		(window.innerWidth <= 481) ? setIsMobile(true) : setIsMobile(false)
		window.addEventListener("resize", () => {
			(window.innerWidth >= 800) ? setIsTablet(true) : setIsTablet(false);
			(window.innerWidth <= 481) ? setIsMobile(true) : setIsMobile(false)
		});
	}, []);

	return (
		<header className={styles.header}>
			<Image src={logoIMG} alt="" className={styles.logo} />
			<nav className={`${showMenu ? styles.navShow : styles.navHidden} ${isMobile ? styles.navMobile : ""}`}>
				<ul>
					<li><Link href="/"><a>{isTablet && <span>00</span>} Home</a></Link></li>
					<li><Link href="/destination"><a>{isTablet && <span>01</span>} Destination</a></Link></li>
					<li><Link href="/crew"><a>{isTablet && <span>02</span>} Crew</a></Link></li>
					<li><Link href="/technology"><a>{isTablet && <span>03</span>} Technology</a></Link></li>
				</ul>
			</nav>
			<button className={`${styles.closeBtn} ${isMobile ? "" : styles.hidden}`} aria-label={showMenu ? "Close menu" : "Open menu"} onClick={() => setShowMenu(!showMenu)}>
				{showMenu ? <Image alt="" src={iconClose} /> : <Image alt="" src={iconHamburguer} />}
			</button>
		</header>
	)
}