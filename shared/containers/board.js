import React from 'react';
import Board from '../components/board';
import * as actions from '../actions';
import {connect} from 'react-redux';

class BoardContainer extends React.Component {
  render() {
    return (
      <Board matrix={this.props.matrix} />
    );
  }
}

const mapStateToProps = ({matrix}) => ({matrix});
export default connect(mapStateToProps)(BoardContainer);
