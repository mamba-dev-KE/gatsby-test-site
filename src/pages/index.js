import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<p>Welcome to my Gatsby Site!</p>
			<StaticImage
				src="https://images.unsplash.com/photo-1642543492524-fa0e22fa25f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				alt="blog"
			/>
			<StaticImage src="../images/hero.jpg" alt="hero" />
		</Layout>
	);
};

export default IndexPage;
