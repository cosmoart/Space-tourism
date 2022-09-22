import Image from "next/image";
import Layout from "../components/Layout";
import data from "../assets/data";
import styles from "../styles/crew.module.css"
import Background from "./helpers/globalbg";

import bgMobile from "../assets/crew/background-crew-mobile.jpg"
import bgTablet from "../assets/crew/background-crew-tablet.jpg"
import bgDesktop from "../assets/crew/background-crew-Desktop.jpg"

export default function Crew() {

	function handleLinks() {
		document.querySelectorAll(`[class*="-card"]`).forEach((card) => {
			if (!String(card.classList).includes(e.target.textContent)) {
				card.classList.add(styles.hidden);
			} else {
				card.classList.remove(styles.hidden);
			}
		});
	}

	return (
		<Layout title="Space tourism | Crew">
			<main className="mainPage">
				<h1 className="subtitle"><span>02</span> Meet your crew</h1>
				<div className={styles.crewMain}>
					<div>
						{
							data.crew.map((crewMember, i) => {
								return (
									<article
										key={crewMember.name}
										className={i === 0 ? "" : styles.hidden}
									>
										<h2 className={styles.crewName}>
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
											ariaLabel={crewMember.name} className={styles.crewBtn}
											onClick={handleLinks}>
										</button>
									)
								})
							}
						</nav>
					</div>
					<div>
						{
							data.crew.map((crewMember, i) => {
								return (
									<div
										className={i === 0 ? "" : styles.hidden}
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
		</Layout>
	)
}