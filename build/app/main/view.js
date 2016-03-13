define(["react","react-dom","app/base/view","app/attempt/view","app/board/view","app/control/view","app/score/view","app/timer/view","text!app/main/style.css","text!app/main/template.tpl"],function(a,b,c,d,e,f,g,h,i,j){"use strict";function k(){this.elementId="#game",this.board=new e,this.control=new f,this.score=new g,this.timer=new h,this.minLength=2,this.dictionary=new l}function l(){}return k.prototype=_.extend(new c(i,j),{render:function(){this.renderTemplate(),this.attempt=b.render(a.createElement(d,null),document.getElementById("attempt")),this.board.render(),this.control.render(),this.score.render(),this.timer.render()},start:function(){var a=this;this.board.start(),this.control.start(),this.attempt.start(),this.score.start(),this.timer.start({onStop:function(){a.stop(),alert("Game over!")}})},stop:function(){this.board.stop(),this.control.stop(),this.attempt.stop(),this.score.stop(),this.timer.stop()},checkOnEnter:function(a){13===a.which&&this.check(a.target.value.toUpperCase())},check:function(a){var b=this;a.length<this.minLength||(this.checkScore(a)&&this.checkBoard(a)?this.checkDictionary(a,function(c){b.commit(a,c)}):this.commit(a,!1))},checkBoard:function(a){return this.board.check(a)},checkDictionary:function(a,b){return this.dictionary.check(a,b)},checkScore:function(a,b){return this.score.check(a)},commit:function(a,b){this.score.add({word:a,scored:b}),this.attempt.clear(),this.attempt.focus()}}),l.prototype={check:function(a,b){var c="https://en.wiktionary.org/w/api.php?action=query&format=json&callback=?&titles=";return $.getJSON(c+a.toLowerCase(),function(a){b(!a.query.pages[-1])})}},k});