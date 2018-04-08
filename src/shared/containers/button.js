import React from 'react';
import {connect} from 'react-redux';

import Button from '../components/button';
import * as actions from '../actions';

export class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getText() {
    if (this.props.started) {
      return 'stop';
    }

    return 'start';
  }

  handleClick() {
    if (this.props.started) {
      this.props.stopGame();
    } else {
      this.props.startGame();
    }
  }

  render() {
    return (
      <Button onClick={this.handleClick} text={this.getText()} />
    );
  }
}

const mapStateToProps = ({started}) => ({started});
export default connect(mapStateToProps, actions)(ButtonContainer);
