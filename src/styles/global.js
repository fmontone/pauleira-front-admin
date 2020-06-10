import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`

  *, *::after, *::before {
   margin: 0;
   padding: 0;
   outline: none;
   box-sizing: border-box;
   -webkit-tap-highlight-color: transparent;
 }

 :focus {
    outline: none !important;
}

 html, body, #root {
   min-height: 100vh;
   display: flex;
   flex-direction: column;
 }

 body {
   -webkit-font-smoothing: antialiased;
   text-rendering: optimizeLegibility;
 }

 body, input, button, select, textarea, ul, ol {
   font-family: 'Rubik', Arial, Helvetica, sans-serif;
   font-weight: 300;
   color: ${colors.black};
 }

 /* HEADINGS ~ TITLES */

 h1, h2, h3, h4, h5, h6 {font-weight: 500;}

 h1 {
  font-size: 40px;
  letter-spacing: -0.02em;
  line-height: 44px;
 }

 h2 {
  font-size: 34px;
  letter-spacing: -0.02em;
  line-height: 40px;
 }

 h3 {
  font-family: Rubik;
  font-weight: 500;
  font-size: 23px;
  letter-spacing: -0.02em;
  line-height: 24px;
 }

 h4 {
  font-family: Rubik;
  font-weight: 500;
  font-size: 17px;
  letter-spacing: -0.02em;
 }

 h5 {
  font-family: Rubik;
  font-weight: 500;
  font-size: 11.4px;
  letter-spacing: -0.02em;
  line-height: 12px;
 }

 h6 {
  font-family: Rubik;
  font-weight: normal;
  font-size: 8.5px;
  line-height: 12px;
 }

 a {
   text-decoration: none;
   color: ${colors.statusInfo};
 }

 button {
   border: none;
   cursor: pointer;
 }

 .body-overflow-hidden {
   overflow: hidden;
 }

 /* FORMS */

 input {
  font-family: inherit;
  font-size: inherit;

  ::placeholder {
    color: ${colors.grey};
  }

  &[type=text], &[type=password] {
    display: block;
    width: 100%;
    height: 32px;
    padding: 4px;
    border-radius: 3px;
    border: 1px solid ${colors.grey};
    background: #fff;

}
 }

  /* BUTTONS */

  button {
    background-color: unset;
  }

`;
