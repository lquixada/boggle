/*
 * Control
 */

define([
  'react'
], function (React, css) {
  'use strict';

  var ControlView = React.createClass({
    render: function () {
      return (
        <div id="control">
          <button type="button" onClick={this.props.onClick}>{this.props.started?'stop!':'start!'}</button>
        </div>
      );
    }
  });

  return ControlView;
});
