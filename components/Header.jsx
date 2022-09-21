import logoIMG from "../assets/shared/logo.svg";
import Link from "next/link"
import Image from "next/image";
import style from "/styles/Header.module.css";

export default function Header() {
	return (
		<header className={style.header}>
			<Image src={logoIMG} alt="" />
			<nav>
				<ul>
					<li><Link href="/"><a><span>00</span> Home</a></Link></li>
					<li><Link href="/destination"><a><span>01</span> Destination</a></Link></li>
					<li><Link href="/crew"><a><span>02</span> Crew</a></Link></li>
					<li><Link href="/technology"><a><span>03</span> Technology</a></Link></li>
				</ul>
			</nav>
		</header>
	)
}