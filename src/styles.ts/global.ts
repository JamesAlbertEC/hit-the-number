import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-high: #7ecb20;
    --primary-medium: #b2ff59;
    --primary-low: #e7ff8c;

    --secondary-high: #99cc60;
    --secondary-medium: #ccff90;
    --secondary-low: #ffffc2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--primary-medium);
    -webkit-font-smoothing: antialiased;
    display: flex;
    
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-family: 'Lobster', cursive;
  }

  button {
    cursor: pointer;
    background: var(--secondary-high);
    transition: 0.3s;

    &:hover{
      filter: brightness(1.7);
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.8);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--secondary-medium);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }
`;