/*
 * Die
 */

function Die(letters) {
  this.sides = letters.split('');
}

Die.prototype = {
  roll: function () {
    return _.sample(this.sides);
  }
};

/*
 * Board
 */
function Board() {
  this.dim =  4;
  this.minLength = 3;
  this.dice = [
    new Die('AOBBOJ'),
    new Die('WHGEEN'),
    new Die('NRNZHL'),
    new Die('NAEAGE'),
    new Die('DIYSTT'),
    new Die('IESTSO'),
    new Die('AOTTWO'),
    new Die('HQUMNI'),
    new Die('RYTLTE'),
    new Die('POHCSA'),
    new Die('LREVYD'),
    new Die('EXLDIR'),
    new Die('IENSUE'),
    new Die('SFFKAP'),
    new Die('IOTMUC'),
    new Die('EHWVTR')
  ];
  this.reset();
}

Board.prototype = {
  get: function (i, j) {
    try {
      return this.matrix[i][j];
    } catch(e) {
      return '*';
    }
  },

  place: function (drawn) {
    var grouped = _.groupBy(drawn, function(letter, i) {
      return (i%this.dim);
    }, this);

    return _.toArray(grouped);
  },

  shake: function () {
    return _.map(this.dice, function (die) {
      return die.roll();
    });
  },

  start: function () {
    var drawn = this.shake();
    this.matrix = this.place(drawn);
  },

  stop: function () {
    this.reset();
  },

  reset: function () {
    this.matrix = [
      ['*', '*', '*', '*'],
      ['*', '*', '*', '*'],
      ['*', '*', '*', '*'],
      ['*', '*', '*', '*']
    ];
  },

  check: function (word) {
    if (word.length < this.minLength) {
      return false;
    }

    word = word.toUpperCase();

    // Find the first letter
    for (var i=0; i<this.dim; i++) {
      for (var j=0; j<this.dim; j++) {
        if (this.get(i, j) === word.charAt(0)) {
          // From there, find the sequence, letter by letter
          if (this.findSequence(word, i, j)) {
            return true;
          }
        }
      }
    }

    return false;
  },

  findSequence: function (seq, i, j) {
    var found;

    if (seq.length<=1) {
      return true;
    }

    found = this.matrix[i][j];

    // Mark temporarily in order to not traverse the same cell twice
    this.matrix[i][j] = ' ';

    for (var u=-1; u<=1; u++) {
      for (var v=-1; v<=1; v++) {
        if (this.get(i+u, j+v) === seq.charAt(1)) {
          if (this.findSequence(seq.substr(1), i+u, j+v)) {
            this.matrix[i][j] = found;
            return true;
          }
        }
      }
    }

    this.matrix[i][j] = found;
    return false;
  }
};

function BoardView() {
  this.elementId = '#board';
  this.board = new Board();
}

BoardView.prototype = {
  check: function (word) {
    return this.board.check(word);
  },

  render: function (board) {
    _.render(this.elementId, {board: this.board.matrix});
  },

  start: function () {
    this.board.start();
    this.render();
  },

  stop: function () {
    this.board.stop();
    this.render();
  }
};
