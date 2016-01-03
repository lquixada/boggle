/*
 * App
 */

function App() {
  this.board = new BoardView();
  this.attempt = new AttemptView();
  this.dictionary = new Dictionary();
  this.score = new ScoreView();
  this.timer = new TimerView();
}

App.prototype = {
  render: function () {
    this.board.render();
    this.attempt.render();
    this.score.render();
    this.timer.render();
  },

  start: function () {
    this.board.start();
    this.attempt.start();
    this.score.start();
    this.timer.start();
  },

  checkOnEnter: function (e) {
    if (e.which===13) {
      this.check(e.target.value);
    }
  },

  check: function (word) {
    var that = this;

    if (this.checkBoard(word)) {
      this.checkDictionary(word, function (isValid) {
        that.score.add({
          word: word,
          scored: isValid
        })
      });
    } else {
      this.score.add({
        word: word,
        scored: false
      })
    }
  },

  checkBoard: function (word) {
    return this.board.check(word);
  },

  checkDictionary: function (word, cb) {
    return this.dictionary.check(word, cb);
  }
};
