import React from 'react';
import {connect} from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import Score from '../components/score';

class ScoreContainer extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Score counter={this.props.counter} attempts={this.props.attempts} />
    );
  }
}

const mapStateToProps = ({attempts, counter}) => ({attempts, counter});

export default connect(mapStateToProps)(ScoreContainer);