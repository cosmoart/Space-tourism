import Head from "next/head";
import { useEffect } from "react";
import Header from "./Header";

export default function Layout({ children, title = "Space tourism", bgClass = "home" }) {

	useEffect(() => {
		document.body.id = "body"
	}, []);

	return (
		<>
			<Head>
				<meta charset="UTF-8" />
				<title>{title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="shortcut icon" href="favicon.svg" type="image/svg+xml" />
			</Head>
			<Header />
			{children}
		</>
	)
}