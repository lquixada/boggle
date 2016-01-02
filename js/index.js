function Die(letters) {
  this.sides = letters.split('');
}

Die.prototype = {
  roll: function () {
    return _.sample(this.sides);
  }
};

function Board(dice) {
  this.dim =  4;
  this.minLength = 3;
  this.dice = dice;
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
}

dice = [
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
  new Die('EHWVTR'),
];

board = new Board(dice);
board.start();

function App() {
  this.templateId = '#template';
  this.boardId = '#board';
}

App.prototype = {
  render: function (board) {
    var source   = $(this.templateId).html();
    var compiled = _.template(source);
    var html = compiled({board: board.matrix});
    $(this.boardId).html(html);
  },

  checkOnEnter: function (e) {
    if (e.which===13) {
      this.check(e.target.value, function (isValid) {
        console.log(isValid);
      })
    }
  },

  check: function (word, cb) {
    $.getJSON('https://en.wiktionary.org/w/api.php?action=query&titles='+word+'&format=json&callback=?', function (data) {
      cb(!data.query.pages[-1]);
    });
  }
}

app = new App();
