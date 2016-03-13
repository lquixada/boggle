/*
 * Attempt
 */

define(['react', 'react-dom'], function (React, ReactDOM) {
  'use strict';

  var Attempt = React.createClass({
    displayName: 'Attempt',

    getInitialState: function () {
      return {
        value: ''
      };
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
      var attempt = ReactDOM.findDOMNode(this.refs.attempt);

      attempt.focus();
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
      this.setState({ value: val });
    },

    render: function () {
      return React.createElement(
        'div',
        { id: 'attempt' },
        React.createElement('input', { type: 'text', ref: 'attempt', value: this.state.value, onChange: this.updateValue, onKeyUp: this.onEnter,
          className: 'box',
          disabled: !this.props.started,
          placeholder: this.props.started ? 'Type the word and hit Enter' : 'Press start to begin...' })
      );
    }
  });

  return Attempt;
});
