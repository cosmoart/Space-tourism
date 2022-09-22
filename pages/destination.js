import Image from "next/image";
import Layout from "../components/Layout";
import data from "../assets/data";
import styles from "../styles/destination.module.css"
import Background from "./helpers/globalbg";

import bgMobile from "../assets/destination/background-destination-mobile.jpg"
import bgTablet from "../assets/destination/background-destination-tablet.jpg"
import bgDesktop from "../assets/destination/background-destination-desktop.jpg"

export default function Destination() {

	function handleLinks(e) {
		document.querySelectorAll(`[class*="-card"]`).forEach((card) => {
			if (String(card.classList).includes(e.target.textContent)) {
				card.classList.remove(styles.sliderRight);
			} else {
				card.classList.add(styles.sliderRight);
			}
		});
		document.querySelectorAll(`[class*="-img"]`).forEach(img => {
			if (String(img.classList).includes(e.target.textContent)) {
				img.classList.remove(styles.planetImgHidden);
			} else {
				img.classList.add(styles.planetImgHidden);
			}
		})
	}

	return (
		<Layout title="Space tourism | Destination">
			<main className="mainPage">
				<h1 className="subtitle"><span>01</span> Pick your destination</h1>
				<div className={styles.planetsMain}>
					<div className={styles.planetsImages}>
						{
							data.planets.map((planet, i) => {
								return (
									<div
										className={`${planet.name}-img ${styles.planetsImg} ${i === 0 ? "" : styles.planetImgHidden}`}
										key={planet.distance}
									>
										<Image placeholder="blur" width={planet.image.width} height={planet.image.height} src={planet.image} alt={`${planet.name} photography`} />
									</div>
								)

							})
						}
					</div>
					<div className={styles.planetsInfo}>
						<nav className={styles.planetsNav}>
							<ul>
								{
									data.planets.map((planet) => <li key={planet.distance}><button onClick={handleLinks}>{planet.name}</button></li>)
								}
							</ul>
						</nav>
						{
							data.planets.map((planet, i) => (
								<article key={planet.distance} className={`${i === 0 ? "" : styles.sliderRight} ${planet.name + "-card"}`}>
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
			</main>
			<Background bgMobile={bgMobile.src} bgTablet={bgTablet.src} bgDesktop={bgDesktop.src} />
		</Layout>
	)
}