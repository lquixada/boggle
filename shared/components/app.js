import '../../styles/app.scss';
import React from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';

class App extends React.Component {
  render() {
    return (
      <div>
        <GitHubForkRibbon position="right"
                          color="red"
                          href="https://github.com/lquixada/boggle"
                          target="_blank" >
          Fork me on GitHub
        </GitHubForkRibbon>
        {this.props.children}
      </div>
    );
  }
}

export default App;
