import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
	margin: 0;
	padding: 0;
    font-family: 'Exo 2', sans-serif;
  }
  body,
  h1, h2, h3, h4, h5, h6,
  p, blockquote, pre,
  a, abbr, acronym, address,
  img, ol, ul, li,
  table, caption, tbody, tfoot, thead, tr, th, td,
  figure {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;