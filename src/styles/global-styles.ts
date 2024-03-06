'use client';

import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      vertical-align: baseline;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }
    html {
      font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px)
    }
    html,
    body,
    #__next {
      background: ${theme.colors.white};
      color: ${theme.colors.text.main};
      height: 100%;
    }
    body {
      font-family: ${theme.font.family};
      text-align: left;
      overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: ${theme.font.weight.regular};
      color: ${theme.colors.text.heading};
    }
    ol,
    ul {
      list-style: none;
    }
    body,
    input,
    textarea,
    select,
    button {
      font:
        ${theme.font.weight.light} ${theme.font.sizes.large}
          ${theme.font.family},
        sans-serif;
    }
    span {
      display: inline-block;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    p {
      font-size: ${theme.font.sizes.small};
    }
    button {
      cursor: pointer;
    }
    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    ::-webkit-scrollbar {
      width: 7px !important;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.gray[50]} !important;
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.colors.primary.main} !important;
      border-radius: 50px !important;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.gradient} !important;
    }
  `}
`;

export default GlobalStyles;
