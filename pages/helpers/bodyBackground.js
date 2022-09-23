export default function Background({ bgMobile, bgTablet, bgDesktop }) {
	return (
		<style jsx global>
			{`
				body {
					background: url(${bgMobile});
					background-size: 100vw 100vh;
					background-attachment: fixed;
				}
				@media (min-width: 40em) {
					body {
						background: url(${bgTablet});
						background-size: 100vw 100vh;
						background-attachment: fixed;
					}
				}
				@media (min-width: 50em) {
					body {
						background: url(${bgDesktop});
						background-size: 100vw 100vh;
						background-attachment: fixed;
					}
				}
				`}
		</style>
	)
}

