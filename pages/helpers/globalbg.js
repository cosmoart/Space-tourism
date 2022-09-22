export default function Background({ bgMobile, bgTablet, bgDesktop }) {
	return (
		<style jsx global>
			{`
				body {
					background: url(${bgMobile});
					background-size: cover;
				}
				@media (min-width: 40em) {
					body {
						background: url(${bgTablet});
						background-size: cover;
					}
				}
				@media (min-width: 64em) {
					body {
						background: url(${bgDesktop});
						background-size: cover;
					}
				}
				`}
		</style>
	)
}

