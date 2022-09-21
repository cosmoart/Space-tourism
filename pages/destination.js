import Image from "next/image";
import Layout from "../components/Layout";
import data from "../assets/data";

import bgMobile from "../assets/destination/background-destination-mobile.jpg"
import bgTablet from "../assets/destination/background-destination-tablet.jpg"
import bgDesktop from "../assets/destination/background-destination-desktop.jpg"

export default function Destination() {

	// document.querySelectorAll(".planet-link").forEach((link) =>
	// 	link.addEventListener("click", (e) => {
	// 		document.querySelectorAll(`[class*="-card"]`).forEach((card) => {
	// 			if (!String(card.classList).includes(e.target.textContent)) {
	// 				card.classList.add("hidden");
	// 			} else {
	// 				card.classList.remove("hidden");
	// 			}
	// 		});
	// 	})
	// );

	return (
		<Layout title="Space tourism | Destination">
			<main>
				<h1>01 <span>Pick your destination</span></h1>
				<div className="planets-main">
					{
						data.planets.map(planet => <Image key={planet.distance} placeholder="blur" width={300} height={300} src={planet.image} alt={planet.name} className={planet.name === "Moon" ? "planet-img" : "planet-img hidden"} />)
					}
					<div>
						<nav className="planets-nav">
							<ul>
								{
									data.planets.map(planet => <li key={planet.distance}><button className="planet-link">{planet.name}</button></li>)
								}
							</ul>
						</nav>
						{
							data.planets.map(planet => (
								<article key={planet.distance} className={`${planet.name + "-card"} ${planet.name !== "Moon" && "hidden"}`}>
									<h2>{planet.name}</h2>
									<p>{planet.description}</p>
									<div>
										<p>Avg. Distance{planet.distance}</p>
										<p>Est. Travel time{planet.travel}</p>
									</div>
								</article>
							))
						}
					</div>
				</div>
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
						background: url(${bgMobile.src});
						background-size: cover;
					}
				}
			`}</style>
		</Layout>
	)
}