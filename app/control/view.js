/*
 * Control
 */

define(['react', 'text!app/control/style.css'], function (React, css) {
  'use strict';

  var ControlView = React.createClass({
    displayName: 'ControlView',

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
          { type: 'button', onClick: this.props.onClick },
          this.props.started ? 'stop!' : 'start!'
        )
      );
    }
  });

  return ControlView;
});
