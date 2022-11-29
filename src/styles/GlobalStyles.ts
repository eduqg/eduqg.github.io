import { createGlobalStyle, css, keyframes } from 'styled-components'

export default createGlobalStyle`
 :root {
    --primary: #1c4487;
    --primary-dark: #14245c;
    --black: #050505;
    --black-blue: #080b1c;
    --white: #fff;
    --almost-white: #f5f5f5;
    --gray: #90909A;
    --gray-blue: #909cac;
    --red: #da3344;
    --green: #27a544;
    --yellow: #fdc008;
    font-size: 60%;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    outline: 0;
    box-sizing:border-box;
  }

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

  body {
    background: var(--black-blue);
    color: var(--gray-blue);
    font-family: 'Lato', Arial, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizelegibility;
    font-size: 1.6rem;
  }


  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 400;
  }

  a,
  button {
    cursor: pointer;
    outline: none;
    font-size: 1.6rem;
    color: var(--almost-white);
    font-family: 'Lato', Arial, Arial, Helvetica, sans-serif;
  }

  #root {
    width: 100%;
  }

  @media screen and (min-width: 640px) {
    :root {
      font-size: 62.5%;
    }
  }

  @media screen and (min-width: 1280px) {
    :root {
      font-size: 65%;
    }
  }
`

export const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const hideToTop = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-50px);
  }
`

export const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const disableInteractons = css`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  pointer-events: none;
  user-select: none;
`

export const bounceAnimation = keyframes`
  0% {
    -webkit-transform: translateY(0);
  }
  75% {
    -webkit-transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(0);
  }
`
