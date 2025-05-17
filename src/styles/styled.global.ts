import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: ${({ theme }) => theme.fonts.Rubik};
  font-size: 1rem;
  line-height: 1;
  background-color: #FCFAFE;
}
h1,
h2,
h3,
h4,
h5,
h6,
p{
  padding: 0;
  margin: 0;
}
button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}

html:focus-within {
  scroll-behavior: smooth;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
`;

export const RootContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px ${({ theme }) => theme.spacing?.container || "20px"};
  padding-bottom: 50px;
`;