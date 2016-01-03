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
      word: attempt.word.toUpperCase(),
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

  start: function () {
    this.reset();
    this.render();
  },

  reset: function () {
    this.counter = 0;
    this.attempts = [];
  }
};
