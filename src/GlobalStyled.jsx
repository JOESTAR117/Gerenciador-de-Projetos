import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;

    html, body , #root{
      background-color: #ffffff;
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
    }
  }

`;
