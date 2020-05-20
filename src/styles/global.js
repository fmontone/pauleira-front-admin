import { createGlobalStyle } from 'styled-components';

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
 }

 body {
   -webkit-font-smoothing: antialiased;
   text-rendering: optimizeLegibility;
 }

 body, input, button, select, textarea, ul, ol {
   font-family: Arial, Helvetica, sans-serif;
   font-weight: 300;
 }
 `;
