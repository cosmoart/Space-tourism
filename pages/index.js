import Link from 'next/link'
import styles from '../styles/index.module.css'
import Layout from '../components/Layout'
import Background from '../helpers/bodyBackground'

import bgMobile from "../assets/home/background-home-mobile.jpg"
import bgTablet from "../assets/home/background-home-tablet.jpg"
import bgDesktop from "../assets/home/background-home-desktop.jpg"

export default function Home() {
	return (
		<Layout title='Space tourism | Home'>
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
						<p>Made with ♥️ by <a href="https://github.com/cosmoart" target="_blank" rel="noopener noreferrer">Cosmo</a> - <a href="https://github.com/cosmoart/Space-tourism" target="_blank" rel="noopener noreferrer">Repository</a></p>
					</small>
				</footer>
			</main>
			<Background bgMobile={bgMobile.src} bgTablet={bgTablet.src} bgDesktop={bgDesktop.src} />
		</Layout>
	)
}