import {injectGlobal} from 'styled-components';

export const App = ({children}) => {
  resetStyles();
  return children;
};

const resetStyles = () => injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    color: #fff;
    font-size: 1.5vh;
    font-family: Helvetica, Arial, sans-serif;
  }

  html,
  body {
    background-color: #484848;
    height: 100%;
  }

  img {
    border: 0;
  }

  #game {
    height: 100%;
  }

  #game > div {
    height: 100%;
  }

  /* Grid */

  @media (max-width: 800px) {
    .github-fork-ribbon-wrapper {
      display: none;
    }
  }

  /* Scrollbar */

  ::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, .05);
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .3);
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-button {
    display: none;
    background-color: transparent;
  }

  ::-webkit-scrollbar-corner {
    background-color: #000;
  }
`;
