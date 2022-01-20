import * as React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map((item) => (
				<article key={item.id}>
					<h2>
						<Link to={`/blog/${item.slug}`}>{item.frontmatter.Title}</Link>
					</h2>
					<p>Posted: {item.frontmatter.Date}</p>
				</article>
			))}
		</Layout>
	);
};

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
				slug
			}
		}
	}
`;
export default BlogPage;
