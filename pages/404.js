import Layout from "../components/Layout"
import styles from "../styles/404.module.css"

import bgMobile from "../assets/home/background-home-mobile.jpg"
import bgTablet from "../assets/home/background-home-tablet.jpg"
import bgDesktop from "../assets/home/background-home-desktop.jpg"
import Link from "next/link"
import Background from "./helpers/bodyBackground"

export default function NotFound() {
	return (
		<Layout title="Page not found">
			<main className={styles.main}>
				<h1>Error 404, page not found</h1>
				<Link href="/">Got to home</Link>
			</main>
			<Background bgMobile={bgMobile.src} bgTablet={bgTablet.src} bgDesktop={bgDesktop.src} />
		</Layout >
	)
}