import React from 'react';
import { Link } from 'react-router';

class Title extends React.Component {
  render() {
    return (
      <h1><Link to="/">BOGGLE</Link></h1>
    );
  }
}

export default Title;
