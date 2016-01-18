/*
 * Score
 */

define(['jquery', 'underscore', 'text!app/score/template.tpl'], function ($, _, tpl) {
  'use strict';

  function ScoreView() {
    this.elementId = '#score';
    this.reset();
  }

  ScoreView.prototype = {
    template: _.template(tpl),

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
