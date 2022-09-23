import data from "../assets/data";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/technology.module.css";
import Background from "./helpers/bodyBackground";

import bgMobile from "../assets/technology/background-technology-mobile.jpg"
import bgTablet from "../assets/technology/background-technology-tablet.jpg"
import bgDesktop from "../assets/technology/background-technology-desktop.jpg"

export default function Technology() {

	function handleLinks(e) {
		document.querySelectorAll(`[class*="-card"]`).forEach((card) => {
			if (String(card.classList).includes(e.target.value)) {
				card.classList.remove(styles.hidden);
			} else {
				card.classList.add(styles.hidden);
			}
		});
	}

	return (
		<Layout title="Space tourism | Technology">
			<main className="mainPage">
				<h1 className="title"><span>03</span> SPACE LAUNCH 101</h1>
				<div className={styles.main}>
					<nav className={styles.techNav}>
						{
							data.technologies.map((technology, i) => {
								return (
									<button
										key={technology.name + "button"}
										className={styles.techBtn} value={technology.name}
										onClick={handleLinks}
									>
										{i + 1}
									</button>
								)
							})
						}
					</nav>
					<div>
						{
							data.technologies.map((technology, i) => (
								<article
									key={technology.name}
									className={`${technology.name}-card ${i === 0 ? "" : styles.hidden}`}
								>
									<p>The terminology...</p>
									<h2 className="subtitle">{technology.name}</h2>
									<p className="paragraph">{technology.description}</p>
								</article>
							))
						}
					</div>
					<div>
						{
							data.technologies.map((technology, i) => {
								return (
									<div
										key={technology.name + "img"}
										className={`${i === 0 ? "" : styles.hidden}`}
									>
										<Image src={technology.images.portrait} alt={technology.name} placeholder="blur" />
									</div>
								)
							})
						}
					</div>
				</div>
			</main>
			<Background bgMobile={bgMobile.src} bgTablet={bgTablet.src} bgDesktop={bgDesktop.src} />
		</Layout >
	)
}