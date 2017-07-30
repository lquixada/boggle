import React from 'react';
import {connect} from 'react-redux';
import Board from '../components/board';
import * as actions from '../actions';

class BoardContainer extends React.Component {
  render() {
    return (
      <Board matrix={this.props.matrix} />
    );
  }
}

const mapStateToProps = ({matrix}) => ({matrix});
export default connect(mapStateToProps)(BoardContainer);
