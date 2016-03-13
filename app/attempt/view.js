/*
 * Attempt
 */

define(['react', 'react-dom', 'text!app/attempt/style.css'], function (React, ReactDOM, css) {
  'use strict';

  var AttemptView = React.createClass({
    displayName: 'AttemptView',

    componentDidMount: function () {
      this.focus();
    },

    componentDidUpdate: function () {
      this.focus();
    },

    clear: function () {
      this.forceUpdate();
    },

    focus: function () {
      ReactDOM.findDOMNode(this.refs.attempt).focus();
    },

    render: function () {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'style',
          { type: 'text/css' },
          css
        ),
        React.createElement('input', { type: 'text', ref: 'attempt', className: 'box', onKeyUp: this.props.onEnter, disabled: !this.props.started,
          placeholder: this.props.started ? 'Type the word and hit Enter' : 'Press start to begin...' })
      );
    }
  });

  return AttemptView;
});
