import data from "../assets/data";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/technology.module.css";

import bgMobile from "../assets/technology/background-technology-mobile.jpg"
import bgTablet from "../assets/technology/background-technology-tablet.jpg"
import bgDesktop from "../assets/technology/background-technology-desktop.jpg"
import handleLinks from "../helpers/linksAnimation";
import Background from "../helpers/bodyBackground";
import { useState } from "react";

export default function Technology() {
	const [linkActive, setLinkActive] = useState(data.technologies[0].name.replace(/\s+/g, ''));

	function handleNav(e) {
		handleLinks(e, styles);
		setLinkActive(e.target.value)
	}

	return (
		<Layout title="Space tourism | Technology">
			<main className={`mainPage ${styles.mainPage}`}>
				<h1 className={`title ${styles.title}`}><span>03</span> SPACE LAUNCH 101</h1>
				<div className={styles.main}>
					<nav className={styles.techNav}>
						{
							data.technologies.map((technology, i) => {
								return (
									<button
										key={technology.name + "button"}
										className={`${styles.techBtn} ${technology.name.replace(/\s+/g, '') === linkActive ? styles.btnActive : ""}`}
										value={technology.name.replace(/\s+/g, '')}
										onClick={handleNav}
									>
										{i + 1}
									</button>
								)
							})
						}
					</nav>
					<div className={styles.infoContainer}>
						{
							data.technologies.map((technology, i) => (
								<article
									key={technology.name}
									className={`${technology.name.replace(/\s+/g, '')}-card ${i === 0 ? "" : styles.sliderHidden}`}
								>
									<p className={styles.terminology}>The terminology...</p>
									<h2 className="subtitle">{technology.name}</h2>
									<p className="paragraph">{technology.description}</p>
								</article>
							))
						}
					</div>
					<div className={styles.techImages}>
						{
							data.technologies.map((technology, i) => {
								return (
									<div
										key={technology.name + "img"}
										className={`${styles.techImg} ${technology.name.replace(/\s+/g, '')}-img ${i === 0 ? "" : styles.imgHidden}`}
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