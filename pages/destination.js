import Image from "next/image"
import Layout from "../components/Layout"
import data from "../assets/data"
import styles from "../styles/destination.module.css"

import bgMobile from "../assets/destination/background-destination-mobile.jpg"
import bgTablet from "../assets/destination/background-destination-tablet.jpg"
import bgDesktop from "../assets/destination/background-destination-desktop.jpg"

import handleLinks from "./helpers/linksAnimation"
import Background from "./helpers/bodyBackground"
import { useState } from "react"

export default function Destination() {
	const [linkActive, setLinkActive] = useState(data.planets[0].name);

	function handleNav(e) {
		handleLinks(e, styles);
		setLinkActive(e.target.value)
	}

	return (
		<Layout title="Space tourism | Destination">
			<main className={`mainPage ${styles.mainPage}`}>
				<h1 className="title"><span>01</span> Pick your destination</h1>
				<div className={styles.planetsMain}>
					<div className={styles.planetsImages}>
						{
							data.planets.map((planet, i) => {
								return (
									<div
										className={`${styles.planetsImg} ${planet.name}-img  ${i === 0 ? "" : styles.imgHidden}`}
										key={planet.distance}
									>
										<Image placeholder="blur" width={planet.image.width} height={planet.image.height} src={planet.image} alt={`${planet.name} photography`} />
									</div>
								)

							})
						}
					</div>
					<div className={styles.planetInfoContainer}>
						<div className={styles.planetsInfo}>
							<nav className={styles.planetsNav}>
								<ul>
									{
										data.planets.map((planet) => {
											return (
												<li key={planet.distance} className={linkActive === planet.name ? styles.linkNavActive : ""}>
													<button onClick={handleNav} value={planet.name}>{planet.name}</button>
												</li>
											)
										})
									}
								</ul>
							</nav>
							{
								data.planets.map((planet, i) => (
									<article key={planet.distance} className={`${i === 0 ? "" : styles.sliderHidden} ${planet.name + "-card"}`}>
										<h2 className={styles.planetTitle}>{planet.name}</h2>
										<p className="paragraph">{planet.description}</p>
										<div className={styles.planetData}>
											<p>Avg. Distance <br /><span>{planet.distance}</span></p>
											<p>Est. Travel time <br /><span>{planet.travel}</span></p>
										</div>
									</article>
								))
							}
						</div>
					</div>
				</div>
			</main>
			<Background bgMobile={bgMobile.src} bgTablet={bgTablet.src} bgDesktop={bgDesktop.src} />
		</Layout>
	)
}