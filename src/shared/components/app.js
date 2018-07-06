import React, {Fragment} from 'react'
import {Helmet} from 'react-helmet'
import {injectGlobal} from 'styled-components'

import pkg from '../../../package'

export class App extends React.Component {
  componentWillMount () {
    resetStyles()
  }

  render () {
    return (
      <Fragment>
        <Helmet>
          <meta charset='utf-8' />
          <meta http-equiv='x-ua-compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='version' content={pkg.version} />
          {/* Disabled favicon for now, it is hitting the appController. */}
          <link rel='icon' href='data:,' />
          <title>Boggle</title>
        </Helmet>
        {this.props.children}
      </Fragment>
    )
  }
}

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

  #app {
    height: 100%;
  }

  #app > div {
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
`
