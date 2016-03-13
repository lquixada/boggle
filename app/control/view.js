/*
 * Control
 */

define(['react', 'text!app/control/style.css'], function (React, css) {
  'use strict';

  var ControlView = React.createClass({
    displayName: 'ControlView',

    getInitialState: function () {
      return {
        started: false
      };
    },

    start: function () {
      this.setState({ started: true });
    },

    stop: function () {
      this.setState({ started: false });
    },

    toggle: function () {
      if (this.state.started) {
        app.stop();
      } else {
        app.start();
      }
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
        React.createElement(
          'button',
          { type: 'button', onClick: this.toggle },
          this.state.started ? 'stop!' : 'start!'
        )
      );
    }
  });

  return ControlView;
});
