import Image from "next/image";
import Layout from "../components/Layout";
import data from "../assets/data";
import styles from "../styles/crew.module.css"
import Background from "./helpers/bodyBackground";

import bgMobile from "../assets/crew/background-crew-mobile.jpg"
import bgTablet from "../assets/crew/background-crew-tablet.jpg"
import bgDesktop from "../assets/crew/background-crew-Desktop.jpg"
import handleLinks from "./helpers/linksAnimation";

export default function Crew() {
	const linksInfo = [
		{ className: `[class*="-card"]`, hidden: styles.hidden },
		{ className: `[class*="-img"]`, hidden: styles.sliderBottom }
	]

	return (
		<Layout title="Space tourism | Crew">
			<main className="mainPage">
				<h1 className="title"><span>02</span> Meet your crew</h1>
				<div className={styles.crewMain}>
					<div>
						{
							data.crew.map((crewMember, i) => {
								return (
									<article
										key={crewMember.name}
										className={`${crewMember.name.replace(/\s+/g, '')}-card ${i === 0 ? "" : styles.hidden}`}
									>
										<h2 className="subtitle">
											{crewMember.role}<br /><span>{crewMember.name}</span>
										</h2>
										<p className="paragraph">{crewMember.bio}</p>
									</article>
								);
							})
						}
						<nav>
							{
								data.crew.map((crewMember) => {
									return (
										<button
											key={crewMember.name + "link"}
											aria-label={crewMember.name} className={styles.crewBtn}
											onClick={e => handleLinks(e, linksInfo)}
											value={crewMember.name.replace(/\s+/g, '')}
										>
										</button>
									)
								})
							}
						</nav>
					</div>
					<div className={styles.crewImages}>
						{
							data.crew.map((crewMember, i) => {
								return (
									<div
										className={`${crewMember.name.replace(/\s+/g, '')}-img ${i === 0 ? "" : styles.sliderBottom}`}
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
			</main>
			<Background bgMobile={bgMobile.src} bgTablet={bgTablet.src} bgDesktop={bgDesktop.src} />
		</Layout >
	)
}