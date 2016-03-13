define(["react","react-dom","app/attempt/view","app/board/view","app/control/view","app/score/view","app/clock/view"],function(a,b,c,d,e,f,g){"use strict";function h(){}var i=a.createClass({displayName:"App",getInitialState:function(){return{minLength:2,started:!1}},checkOnEnter:function(a){13===a.which&&this.check(a.target.value.toUpperCase())},check:function(a){var b=this;a.length<this.state.minLength||(this.checkScore(a)&&this.checkBoard(a)?this.checkDictionary(a,function(c){b.commit(a,c)}):this.commit(a,!1))},checkBoard:function(a){return this.board.check(a)},checkDictionary:function(a,b){return this.dictionary.check(a,b)},checkScore:function(a,b){return this.score.check(a)},commit:function(a,b){this.score.add({word:a,scored:b}),this.attempt.clear(),this.attempt.focus()},toggle:function(){this.setState({started:!this.state.started})},reset:function(){this.setState({started:!1})},render:function(){return a.createElement("main",null,a.createElement("header",null,a.createElement("div",{className:"container"},a.createElement("h1",null,"BOGGLE"),a.createElement(e,{started:this.state.started,onClick:this.toggle}),a.createElement(c,{started:this.state.started,onEnter:this.checkOnEnter}))),a.createElement("section",null,a.createElement("div",{className:"container"},a.createElement("aside",null,a.createElement(g,{started:this.state.started,onStop:this.reset}),a.createElement(f,{started:this.state.started})),a.createElement(d,{started:this.state.started}))),a.createElement("footer",null,a.createElement("div",{className:"container"},"© Copyright 2016 Leonardo Quixadá. All rights reserved. ",a.createElement("a",{href:"https://github.com/lquixada/boggle"},"Github"))))}});return h.prototype={check:function(a,b){var c="https://en.wiktionary.org/w/api.php?action=query&format=json&callback=?&titles=";return $.getJSON(c+a.toLowerCase(),function(a){b(!a.query.pages[-1])})}},i});