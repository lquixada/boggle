/*
 * Score
 */

define([
  'jquery',
  'underscore',
  'text!app/score/style.css',
  'text!app/score/template.tpl'
], function ($, _, css, html) {
  'use strict';

  function ScoreView() {
    this.elementId = '#score';
    this.template = this.compile();
    this.reset();
  }

  ScoreView.prototype = {
    compile: function () {
      var template = '<style>'+css+'</style>'+html;
      return _.template(template);
    },

    add: function (attempt) {
      if (attempt.scored) {
        this.counter += attempt.word.length;
      }

      this.attempts.push({
        word: attempt.word,
        score: (attempt.scored ? attempt.word.length : '✘')
      });

      this.render();
    },

    render: function () {
      var html = this.template({
        counter: this.counter,
        attempts: this.attempts
      });
      $(this.elementId).html(html);
    },

    check: function (word) {
      var found = _.findWhere(this.attempts, {word: word});
      return !Boolean(found);
    },

    start: function () {
      this.reset();
      this.render();
    },

    stop: function () {
      this.reset();
      this.render();
    },

    reset: function () {
      this.counter = 0;
      this.attempts = [];
    }
  };

  return ScoreView;
});
