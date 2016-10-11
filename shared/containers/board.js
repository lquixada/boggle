import React from 'react';
import {connect} from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';
import Board from '../components/board';
import * as actions from '../actions';

class BoardContainer extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <Board matrix={this.props.matrix} />
    );
  }
}

const mapStateToProps = ({matrix}) => ({matrix});
export default connect(mapStateToProps)(BoardContainer);
