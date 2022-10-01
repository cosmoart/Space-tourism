import { useState } from "react";
import Image from "next/future/image";
import Head from "next/head";

import data from "../assets/data";
import handleLinks from "../helpers/linksAnimation";
import styles from "../styles/technology.module.css";

export default function Technology() {
	const [linkActive, setLinkActive] = useState(data.technologies[0].name.replace(/\s+/g, ''));

	function handleNav(e) {
		handleLinks(e, styles);
		setLinkActive(e.target.value)
	}

	return (
		<>
			<Head>
				<title>Space tourism | Technology</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:title" content="Space tourism | Technology" />
				<meta property="og:image" content="https://github.com/cosmoart/Space-tourism/raw/main/screenshots/tech-desktop.webp" />
			</Head>
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
									<span className={styles.terminology}>The terminology...</span>
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
									<Image
										className={`${styles.techImg} ${technology.name.replace(/\s+/g, '')}-img ${i === 0 ? "" : styles.imgHidden}`}
										key={technology.name + "img"}
										src={technology.images.portrait}
										alt={technology.name}
										placeholder="blur"
									/>
								)
							})
						}
					</div>
				</div>
			</main>
			<div id={styles.bg}></div>
			<style jsx global>
				{`
					#__next{
						min-height: 100vh;
					}
					.mainPage{
						height: 100%;
					}
					`}
			</style>
		</>
	)
}