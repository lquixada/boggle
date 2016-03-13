/*
 * Control
 */

define(['react'], function (React, css) {
  'use strict';

  var Button = React.createClass({
    displayName: 'Button',

    render: function () {
      return React.createElement(
        'div',
        { id: 'control' },
        React.createElement(
          'button',
          { type: 'button', onClick: this.props.onClick },
          this.props.started ? 'stop!' : 'start!'
        )
      );
    }
  });

  return Button;
});
