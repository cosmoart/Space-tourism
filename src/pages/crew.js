import { useState } from "react";
import Image from "next/future/image";
import Head from "next/head";

import styles from "../styles/crew.module.css"
import handleLinks from "../helpers/linksAnimation";
import data from "../assets/data";

export default function Crew() {
	const [linkActive, setLinkActive] = useState(data.crew[0].name.replace(/\s+/g, ''));

	function handleNav(e) {
		handleLinks(e, styles);
		setLinkActive(e.target.value)
	}

	return (
		<>
			<Head>
				<title>Space tourism | Crew</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:title" content="Space tourism | Crew" />
				<meta property="og:image" content="https://github.com/cosmoart/Space-tourism/raw/main/screenshots/crew-desktop.webp" />
			</Head>
			<main className="mainPage">
				<h1 className="title"><span>02</span> Meet your crew</h1>
				<div className={styles.crewMain}>
					<div className={styles.crewInfo}>
						<nav>
							{
								data.crew.map((crewMember) => {
									return (
										<button
											key={crewMember.name + "link"}
											aria-label={crewMember.name}
											className={`${linkActive === crewMember.name.replace(/\s+/g, '') ? styles.linkActive : ""} ${styles.crewBtn}`}
											onClick={handleNav}
											value={crewMember.name.replace(/\s+/g, '')}
										>
										</button>
									)
								})
							}
						</nav>
						<div className={styles.cardsContainer}>
							{
								data.crew.map((crewMember, i) => {
									return (
										<article
											key={crewMember.name}
											className={`${crewMember.name.replace(/\s+/g, '')}-card ${i === 0 ? "" : styles.sliderHidden}`}
										>
											<h2 className={styles.crewName}>
												<span>{crewMember.role}</span><br />
												<span>{crewMember.name}</span>
											</h2>
											<p className="paragraph">{crewMember.bio}</p>
										</article>
									);
								})
							}
						</div>
					</div>
					<div className={styles.crewImages}>
						{
							data.crew.map((crewMember, i) => {
								return (
									<div
										className={`${styles.crewImg} ${crewMember.name.replace(/\s+/g, '')}-img ${i === 0 ? "" : styles.imgHidden}`}
										key={crewMember.name + "image"}
									>
										<Image
											src={crewMember.img}
											alt={crewMember.name + " photograft"}
											placeholder="blur"
										/>
									</div>
								)
							})
						}
					</div>
				</div>
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
			</main>
		</>
	)
}