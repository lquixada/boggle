define(["react"],function(a,b){"use strict";var c=a.createClass({displayName:"ControlView",render:function(){return a.createElement("div",{id:"control"},a.createElement("button",{type:"button",onClick:this.props.onClick},this.props.started?"stop!":"start!"))}});return c});