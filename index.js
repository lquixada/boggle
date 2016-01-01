function checkOnEnter(e) {
  if (e.which===13) {
    check(e.target.value, function (isValid) {
      console.log(isValid);
    })
  }
}

function check(word, cb) {
  $.getJSON('https://en.wiktionary.org/w/api.php?action=query&titles='+word+'&format=json&callback=?', function (data) {
    cb(!data.query.pages[-1]);
  });
}

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

var dices = [
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
var board = new Board(dices);

$(function () {
  var html;

  function renderBoard(board) {
    var source   = $('#entry-template').html();
    var template = Handlebars.compile(source);
    return template({board: board.matrix});
  }

  board.start();

  var html = renderBoard(board);

  $('#test').html(html);
});
