/*
 * App
 */

function App() {
  this.board = new BoardView();
  this.control = new ControlView();
  this.attempt = new AttemptView();
  this.score = new ScoreView();
  this.timer = new TimerView();

  this.dictionary = new Dictionary();
}

App.prototype = {
  render: function () {
    this.board.render();
    this.control.render();
    this.attempt.render();
    this.score.render();
    this.timer.render();
  },

  start: function () {
    var that = this;

    this.board.start();
    this.control.start();
    this.attempt.start();
    this.score.start();
    this.timer.start({
      onStop: function () {
        that.stop();
        alert('Game over!');
      }
    });
  },

  stop: function () {
    this.board.stop();
    this.control.stop();
    this.attempt.stop();
    this.score.stop();
    this.timer.stop();
  },

  checkOnEnter: function (e) {
    if (e.which === 13) {
      this.check(e.target.value.toUpperCase());
    }
  },

  check: function (word) {
    var that = this;

    if (this.checkScore(word) && this.checkBoard(word)) {
      this.checkDictionary(word, function (isValid) {
        that.commit(word, isValid);
      });
    } else {
      this.commit(word, false);
    }
  },

  checkBoard: function (word) {
    return this.board.check(word);
  },

  checkDictionary: function (word, cb) {
    return this.dictionary.check(word, cb);
  },

  checkScore: function (word, cb) {
    return this.score.check(word);
  },

  commit: function (word, scored) {
    this.score.add({
      word: word,
      scored: scored
    });

    this.attempt.clear();
    this.attempt.focus();
  }
};
