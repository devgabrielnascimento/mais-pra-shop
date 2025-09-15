import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { 
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
     align-items: stretch; 
    justify-content: flex-start
     min-height: 100vh;
    width: 100%;
    transition: background-color 200ms ease-in-out;
    
    
   scrollbar-width: none;
    background-color: ${({ theme }) => theme.colors.body};
  }
`;
