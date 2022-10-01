import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head >
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				<meta name="author" content="CosmoArt" />
				<meta name="theme-color" content="#181929" />
				<meta name="description" content={`Solution by Cosmo for the famous frontend-mentor challenge "Space tourism", made with react, JS and CSS in NextJS`} />
				<meta name="robots" content="index, nofollow" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://space-tourist.vercel.app" />
				<meta property="og:description" content={`Solution by Cosmo for the famous frontend-mentor challenge "Space tourism", made with react, JS and CSS in NextJS`} />
				<link rel="shortcut icon" href="favicon.svg" type="image/svg+xml" />
			</Head>
			<body id='body'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}