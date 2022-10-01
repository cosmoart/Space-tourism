import Link from 'next/link'
import Head from 'next/head'

import styles from '../styles/index.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>Space tourism | Home</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:title" content="Space tourism | Home" />
				<meta property="og:image" content="https://github.com/cosmoart/Space-tourism/raw/main/screenshots/home-desktop.webp" />
			</Head>
			<main className={styles.main}>
				<div>
					<h1 className={styles.title}>So, you want to travel to <br /><span>Space</span></h1>
					<p className='paragraph'>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<Link href="/destination"><a className={styles.exploreBtn}>Explore</a></Link>
				<footer className={styles.atributtion}>
					<small>
						<span>Made with ♥️ by <a href="https://github.com/cosmoart" target="_blank" rel="noopener noreferrer">Cosmo</a> - <a href="https://github.com/cosmoart/Space-tourism" target="_blank" rel="noopener noreferrer">Repository</a></span>
					</small>
				</footer>
			</main>
			<div id={styles.bg}></div>
		</>
	)
}