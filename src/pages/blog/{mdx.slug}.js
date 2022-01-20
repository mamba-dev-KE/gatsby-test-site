import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import Layout from "../../components/Layout";

const BlogPost = ({ data }) => {
	const image = getImage(data.mdx.frontmatter.hero_image);
	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<p>Posted: {data.mdx.frontmatter.date}</p>
			<GatsbyImage image={image} alt={data.mdx.frontmatter.hero_alt} />
			<MDXRenderer>{data.mdx.body}</MDXRenderer>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			body
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				hero_alt
				hero_image {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`;

export default BlogPost;
