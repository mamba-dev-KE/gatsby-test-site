import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			<ul>
				{data.allMdx.nodes.map((item) => (
					<article key={item.id}>
						<h2>{item.frontmatter.Title}</h2>
						<p>Posted: {item.frontmatter.Date}</p>
						<MDXRenderer>{item.body}</MDXRenderer>
					</article>
				))}
			</ul>
		</Layout>
	);
};

export default BlogPage;
export const query = graphql`
	query {
		allMdx(sort: { order: DESC, fields: frontmatter___Date }) {
			nodes {
				frontmatter {
					Date(formatString: "MMMM D, YYYY")
					Title
				}
				id
				body
			}
		}
	}
`;
