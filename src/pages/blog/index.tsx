import React from 'react';

import { graphql, Link } from 'gatsby';

import Layout from '../../components/layout';

function BlogPage({ data }) {
  return (
    <Layout pageTitle='My Blog Posts'>
      {data.allMdx.nodes.map((v) => (
        <article key={v.id}>
          <h2>
            <Link to={`/blog/${v.slug}`}>{v.frontmatter.title}</Link>
          </h2>
          <p>Posted: {v.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
