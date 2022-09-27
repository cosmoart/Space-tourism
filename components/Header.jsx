import logoIMG from "../assets/shared/logo.svg"
import Link from "next/link"
import Image from "next/image"
import styles from "/styles/Header.module.css"
import { useEffect, useState } from "react"

import iconClose from "../assets/shared/icon-close.svg"
import iconHamburguer from "../assets/shared/icon-hamburger.svg"
import { useRouter } from "next/router"

export default function Header() {
	let route = useRouter()
	const [isTablet, setIsTablet] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		(window.innerWidth >= 480 && window.innerWidth <= 800) ? setIsTablet(true) : setIsTablet(false);
		window.addEventListener("resize", () => (window.innerWidth >= 480 && window.innerWidth <= 800) ? setIsTablet(true) : setIsTablet(false));
	}, []);

	useEffect(() => {
		let currentLink = document.querySelector(`a[href="${route.pathname}"]`)
		currentLink && currentLink.parentElement.classList.add(styles.currentLink)
	}, [route]);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Image src={logoIMG} alt="" />
			</div>
			<div className={styles.navContainer} style={{ zIndex: showMenu ? "50" : "-50" }}>
				<nav className={`${showMenu ? styles.navShow : ""}`}>
					<ul>
						<li><Link href="/"><a>{!isTablet && <span>00</span>} Home</a></Link></li>
						<li><Link href="/destination"><a>{!isTablet && <span>01</span>} Destination</a></Link></li>
						<li><Link href="/crew"><a>{!isTablet && <span>02</span>} Crew</a></Link></li>
						<li><Link href="/technology"><a>{!isTablet && <span>03</span>} Technology</a></Link></li>
					</ul>
				</nav>
			</div>
			<button className={`${styles.menuBtn}`} aria-label={showMenu ? "Close menu" : "Open menu"} onClick={() => setShowMenu(!showMenu)}>
				{showMenu ? <Image alt="" src={iconClose} /> : <Image alt="" src={iconHamburguer} />}
			</button>
		</header >
	)
}