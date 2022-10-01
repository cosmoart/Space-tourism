import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/future/image"
import { useRouter } from "next/router"

import iconClose from "../assets/shared/icon-close.svg"
import iconHamburguer from "../assets/shared/icon-hamburger.svg"
import logoIMG from "../assets/shared/logo.svg"
import styles from "../styles/Header.module.css"

export default function Header() {
	let route = useRouter()
	const [isTablet, setIsTablet] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		(window.innerWidth >= 480 && window.innerWidth <= 800) ? setIsTablet(true) : setIsTablet(false);
		window.addEventListener("resize", () => (window.innerWidth >= 480 && window.innerWidth <= 800) ? setIsTablet(true) : setIsTablet(false));
	}, []);

	return (
		<header className={styles.header}>
			<Image src={logoIMG} alt="Logo" className={styles.logo} />
			<div className={styles.navContainer} style={{ zIndex: showMenu ? "50" : "-50" }}>
				<nav className={`${showMenu ? styles.navShow : ""}`}>
					<ul>
						<li className={route.pathname === "/" ? styles.currentLink : ""}>
							<Link href="/"><a>{!isTablet && <span>00</span>} Home</a></Link>
						</li>
						<li className={route.pathname === "/destination" ? styles.currentLink : ""}>
							<Link href="/destination"><a>{!isTablet && <span>01</span>} Destination</a></Link>
						</li>
						<li className={route.pathname === "/crew" ? styles.currentLink : ""}>
							<Link href="/crew"><a>{!isTablet && <span>02</span>} Crew</a></Link>
						</li>
						<li className={route.pathname === "/technology" ? styles.currentLink : ""}>
							<Link href="/technology"><a>{!isTablet && <span>03</span>} Technology</a></Link>
						</li>
					</ul>
				</nav>
			</div>
			<button className={`${styles.menuBtn}`} aria-label={showMenu ? "Close menu" : "Open menu"} onClick={() => setShowMenu(!showMenu)}>
				{showMenu ? <Image alt="" src={iconClose} /> : <Image alt="" src={iconHamburguer} />}
			</button>
		</header >
	)
}