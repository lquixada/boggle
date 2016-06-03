import _ from 'underscore';

class Board {
  constructor(matrix) {
    this.dim = 4;
    this.matrix = matrix;
  }

  get(i, j) {
    try {
      return this.matrix[i][j];
    } catch(e) {
      return '*';
    }
  }

  hasWord(word) {
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
  }

  findSequence(seq, i, j) {
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
}

export default Board;
