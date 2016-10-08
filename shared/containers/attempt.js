import React from 'react';
import Attempt from '../components/attempt';
import * as actions from '../actions';
import {connect} from 'react-redux';

class AttemptContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      minLength: 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleChange({target}) {
    this.setValue(target.value);
  }
  
  handleEnter(evt) {
    if (this.state.value.length < this.state.minLength) {
      return;
    }

    if (evt.which === 13) {
      this.props.addCheckedAttempt(this.state.value);
      this.reset();
      evt.target.focus();
    }
  }

  setValue(value) {
    this.setState({value: value.trim()});
  }

  reset() {
    this.setValue('');
  }

  render() {
    return (
      <Attempt value={this.state.value}
        started={this.props.started}
        onChange={this.handleChange}
        onEnter={this.handleEnter} />
    );
  }
}

const mapStateToProps = ({ started }) => ({ started });
export default connect(mapStateToProps, actions)(AttemptContainer);
