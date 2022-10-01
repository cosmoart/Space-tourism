import Link from "next/link"
import Head from "next/head"
import styles from "../styles/404.module.css"

export default function NotFound() {
	return (
		<>
			<Head>
				<title>Space tourism | Page not found</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:title" content="Space tourism | Page not found" />
				<meta property="og:image" content="https://github.com/cosmoart/Space-tourism/raw/main/screenshots/home-desktop.webp" />
			</Head>
			<main className={styles.main}>
				<h1>Error 404, page not found</h1>
				<Link href="/">Got to home</Link>
			</main>
			<div id={styles.bg}></div>
		</>
	)
}