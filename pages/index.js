import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/index.module.css'
import Layout from '../components/Layout'

import bgMobile from "../assets/home/background-home-mobile.jpg"
import bgTablet from "../assets/home/background-home-tablet.jpg"
import bgDesktop from "../assets/home/background-home-desktop.jpg"

export default function Home() {
	console.log(bgMobile);
	return (
		<Layout title='Space tourism | Home'>
			<main className={styles.main}>
				<h1 className={styles.title}>So, you want to travel to <br /><span>Space</span></h1>
				<p>
					Let’s face it; if you want to go to space, you might as well
					genuinely go to outer space and not hover kind of on the edge of it.
					Well sit back, and relax because we’ll give you a truly out of this
					world experience!
				</p>
				<Link href="/destination"><a className={styles.exploreBtn}>Explore</a></Link>
				{/* <img src="Desktop - Home.jpg" alt="" id="bg" /> */}
			</main>
			<style jsx global>
				{`
				body {
					background: url(${bgMobile.src});
					background-size: cover;
				}

				@media (min-width: 40em) {
					body {
						background: url(${bgTablet.src});
						background-size: cover;
					}
				}
				@media (min-width: 64em) {
					body {
						background: url(${bgDesktop.src});
						background-size: cover;
					}
				}
				`}
			</style>
		</Layout>
	)
}
