import React from 'react';
import {connect} from 'react-redux';
import Score from '../components/score';

class ScoreContainer extends React.Component {
  render() {
    return (
      <Score counter={this.props.counter} attempts={this.props.attempts} />
    );
  }
}

const mapStateToProps = ({attempts, counter}) => ({attempts, counter});

export default connect(mapStateToProps)(ScoreContainer);
