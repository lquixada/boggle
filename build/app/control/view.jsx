/*
 * Control
 */

define([
  'react',
  'text!app/control/style.css'
], function (React, css) {
  'use strict';

  var ControlView = React.createClass({
    render: function () {
      return (
        <div>
          <style type="text/css">{css}</style>
          <button type="button" onClick={this.props.onClick}>{this.props.started?'stop!':'start!'}</button>
        </div>
      );
    }
  });

  return ControlView;
});
