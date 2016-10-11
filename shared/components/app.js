import React from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import '../../styles/app.scss';

const App = ({children}) => (
  <div>
    <GitHubForkRibbon position="right"
                      color="red"
                      href="https://github.com/lquixada/boggle"
                      target="_blank" >
      Fork me on GitHub
    </GitHubForkRibbon>
    {children}
  </div>
);

export default App;
