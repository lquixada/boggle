/*
 * Attempt
 */
var React = require('react');
var style = require('./index.less');

var Attempt = React.createClass({
  getInitialState: function () {
    return {
      value: ''
    }
  },

  componentWillReceiveProps: function (nextProps) {
    if (!nextProps.started) {
      this.clear();
    }
  },

  componentDidUpdate: function () {
    this.focus();
  },

  clear: function () {
    this.setValue('');
  },

  focus: function () {
    this.refs.attempt.focus();
  },

  onEnter: function (evt) {
    if (evt.which === 13) {
      this.props.onEnter(evt);
      this.clear();
    }
  },

  updateValue: function (evt) {
    this.setValue(evt.target.value);
  },

  setValue: function (val) {
    this.setState({value: val});
  },

  render: function () {
    return (
      <div id="attempt">
        <input type="text" ref="attempt" value={this.state.value} onChange={this.updateValue} onKeyUp={this.onEnter}
          className="box"
          disabled={!this.props.started}
          placeholder={this.props.started? 'Type the word and hit Enter' : 'Press start to begin...'} />
      </div>
    );
  }
});

module.exports = Attempt;
