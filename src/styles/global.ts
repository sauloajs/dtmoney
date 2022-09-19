import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #202024;

    --green: #00875f;
    --green-dark: #015f43;
    --green-light: #00b37e;

    --red: #f75a68;
    --red-dark: #aa2834;

    --text-title: #e1e1e6;
    --text-body: #c4c4cc;

    --placeholder: #7c7c8a;

    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    } 

    @media (max-width: 728px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: var(--text-body);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
    color: var(--white);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;