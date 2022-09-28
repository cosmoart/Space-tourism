import Head from "next/head";
import FollowCursor from "./followCursor";
import Header from "./Header";

export default function Layout({ children, title = "Space tourism" }) {

	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<title>{title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				{/* <!-- Meta --> */}
				<meta name="author" content="CosmoArt" />
				<meta name="theme-color" content="#181929" />
				<meta name="description" content="" />
				<meta name="robots" content="index, nofollow" />

				{/* <!-- Open Graph --> */}
				<meta property="og:title" content={title} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="" />
				<meta property="og:url" content="" />
				<meta property="og:description" content="" />
				<link rel="shortcut icon" href="favicon.svg" type="image/svg+xml" />
			</Head>
			<Header />
			{children}
			<FollowCursor />
		</>
	)
}