import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';


class Attempt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      minLength: 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleChange(evt) {
    this.setValue(evt.target.value);
  }

  handleEnter(evt) {
    if (this.state.value.length < this.state.minLength) {
      return;
    }

    if (evt.which === 13) {
      this.props.addCheckedAttempt(this.state.value);
      this.reset();
    }
  }

  setValue(value) {
    this.setState({value: value.trim()});
  }

  reset() {
    this.setValue('');
    this.refs.attempt.focus();
  }

  render() {
    return (
      <div id="attempt">
        <input
          type="text"
          className="box"
          ref="attempt"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyUp={this.handleEnter}
          disabled={!this.props.started}
          placeholder={this.props.started ? 'Type the word and hit Enter!' : 'Press start to begin...'} />
      </div>
    );
  }
}

const mapStateToProps = ({ started }) => ({ started });

export default connect(mapStateToProps, actions)(Attempt);
