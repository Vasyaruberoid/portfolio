import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after,{
padding:0;
margin:0;

body{
margin:0;
min-width:360px;
}

`;


export default GlobalStyles;
