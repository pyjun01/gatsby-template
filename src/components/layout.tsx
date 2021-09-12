import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;

  header {
    font-size: 3rem;
    color: gray;
    font-weight: 700;
    margin: 3rem 0;
  }

  nav {
    ul {
      display: flex;
      padding-left: 0;
      list-style: none;

      li {
        padding-right: 2rem;

        a {
          color: black;
        }
      }
    }
  }

  main > h1:first-child {
    color: rebeccapurple;
  }
`;

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header>{data.site.siteMetadata.title}</header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </Container>
  );
}

export default Layout;
