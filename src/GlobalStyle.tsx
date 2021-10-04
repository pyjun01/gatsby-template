import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6,p,span {
    margin: 0;
    font-size: inherit;
  }

  ul, ol, li {
    list-style: none;
  }
`;

export default GlobalStyle;
