/*
 * Score
 */

function ScoreView() {
  this.elementId = '#score';
  this.reset();
}

ScoreView.prototype = {
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
    _.render(this.elementId, {
      counter: this.counter,
      attempts: this.attempts
    });
  },

  check: function (word) {
    var found = _.findWhere(this.attempts, {word: word})
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
