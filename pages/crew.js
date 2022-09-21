import Image from "next/image";
import Layout from "../components/Layout";
import data from "../assets/data";

import bgMobile from "../assets/crew/background-crew-mobile.jpg"
import bgTablet from "../assets/crew/background-crew-tablet.jpg"
import bgDesktop from "../assets/crew/background-crew-Desktop.jpg"

export default function Crew() {
	return (
		<Layout title="Space tourism | Crew">
			<h1>02 Meet your crew</h1>
			{
				data.crew.map((crewMember) => {
					return (
						<div key={crewMember.name}>
							<Image src={crewMember.img} alt={crewMember.name + " photograft"} placeholder="blur" />
							<h2>{crewMember.role}</h2>
							<h3>{crewMember.name}</h3>
							<p>{crewMember.bio}</p>
						</div>
					);
				})
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