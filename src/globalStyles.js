import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5 {
    margin: 0;
    padding: 0;
}

h1,h2,h3,h4,h5 {
    display : inline-block;
}

body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro', sans-serif;    
}
`;

export default GlobalStyles;
