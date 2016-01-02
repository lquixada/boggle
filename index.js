function Die(letters) {
  this.sides = letters.split('');
}

Die.prototype = {
  roll: function () {
    return _.sample(this.sides);
  }
};

function Board(dice) {
  this.size =  4;
  this.dice = dice;
}

Board.prototype = {
  place: function (drawn) {
    var grouped = _.groupBy(drawn, function(letter, i) {
      return (i%this.size);
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
    var template = Handlebars.compile(source);
    var html = template({board: board.matrix});
    $(this.boardId).html(html);
  },

  checkOnEnter(e) {
    if (e.which===13) {
      this.check(e.target.value, function (isValid) {
        console.log(isValid);
      })
    }
  },

  check(word, cb) {
    $.getJSON('https://en.wiktionary.org/w/api.php?action=query&titles='+word+'&format=json&callback=?', function (data) {
      cb(!data.query.pages[-1]);
    });
  }
}

app = new App();

$(function () {
  app.render(board);
});
