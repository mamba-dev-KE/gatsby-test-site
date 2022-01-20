import * as React from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map((item) => (
				<article key={item.id}>
					<h2>
						<Link to={`/blog/${item.slug}`}>{item.frontmatter.title}</Link>
					</h2>
					<p>Posted: {item.frontmatter.date}</p>
				</article>
			))}
		</Layout>
	);
};

export const query = graphql`
	query {
		allMdx(sort: { order: DESC, fields: frontmatter___date }) {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					title
				}
				id
				body
				slug
			}
		}
	}
`;
export default BlogPage;
