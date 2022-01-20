import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<p>Welcome to my Gatsby Site!</p>
			<StaticImage src="../images/hero.jpg" alt="hero" />
		</Layout>
	);
};

export default IndexPage;
