import React from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';

const Ribbon = () => (
  <GitHubForkRibbon position="right"
    color="red"
    href="https://github.com/lquixada/boggle"
    target="_blank" >
      Fork me on GitHub
  </GitHubForkRibbon>
);

export default Ribbon;
