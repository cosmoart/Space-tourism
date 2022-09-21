import data from "../assets/data";
import Image from "next/image";
import Layout from "../components/Layout";

import bgMobile from "../assets/technology/background-technology-mobile.jpg"
import bgTablet from "../assets/technology/background-technology-tablet.jpg"
import bgDesktop from "../assets/technology/background-technology-desktop.jpg"

export default function Technology() {
	return (
		<Layout title="Space tourism | Technology">
			<h1>03 SPACE LAUNCH 101</h1>
			{
				data.technologies.map((technology) => (
					<div key={technology.name}>
						<h2>{technology.name}</h2>
						<Image src={technology.images.portrait} alt={technology.name} placeholder="blur" />
						<p>{technology.description}</p>
					</div>
				))
			}
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