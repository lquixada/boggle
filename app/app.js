/*
 * App
 */

function App() {
  this.dictionary = new Dictionary();
}

App.prototype = {
  render: function () {
    this.renderBoard();
    this.renderTimer();
  },

  renderBoard: function () {
    this.board = new BoardView();
    this.board.render();
  },

  renderTimer: function () {
    this.timer = new TimerView();
    this.timer.render();
  },

  start: function () {
    this.board.start();
    this.timer.start();
  },

  checkOnEnter: function (e) {
    if (e.which===13) {
      this.check(e.target.value);
    }
  },

  check: function (word) {
    console.log('checking "'+word+'":');
    if (this.checkBoard(word)) {
      console.log('✔ board');

      this.checkDictionary(word, function (isValid) {
        var result = (isValid? '✔' : '✘');
        console.log(result+' dictionary');
        console.log('---');
      })
    } else {
      console.log('✘ board');
    }
  },

  checkBoard: function (word) {
    return this.board.check(word);
  },

  checkDictionary: function (word, cb) {
    return this.dictionary.check(word, cb);
  },
}

app = new App();
