export default function Background({ bgMobile, bgTablet, bgDesktop }) {
	return (
		<style jsx global>
			{`
				body {
					background: url(${bgMobile}), #181929;
					background-size: 100vw 100vh;
					background-attachment: fixed;
				}
				@media (min-width: 30em) {
					body {
						background: url(${bgTablet}), #181929;
						background-size: 100vw 100vh;
						background-attachment: fixed;
					}
				}
				@media (min-width: 50em) {
					body {
						background: url(${bgDesktop}), #181929;
						background-size: 100vw 100vh;
						background-attachment: fixed;
					}
				}
				`}
		</style>
	)
}

