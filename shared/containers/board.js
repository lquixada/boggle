import React from 'react';
import Board from '../components/board';
import * as actions from '../actions';
import {connect} from 'react-redux';
import shallowCompare from 'react-addons-shallow-compare';

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
