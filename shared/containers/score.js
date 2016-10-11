import React from 'react';
import Score from '../components/score';
import {connect} from 'react-redux';

class ScoreContainer extends React.Component {
  render() {
    return (
      <Score counter={this.props.counter} attempts={this.props.attempts} />
    );
  }
}

const mapStateToProps = ({attempts, counter}) => ({attempts, counter});

export default connect(mapStateToProps)(ScoreContainer);
