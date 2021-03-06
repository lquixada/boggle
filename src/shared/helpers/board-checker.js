export class BoardChecker {
  constructor (matrix) {
    this.dim = 4
    this.matrix = matrix
  }

  get (i, j) {
    try {
      return this.matrix.get(i).get(j)
    } catch (e) {
      return '*'
    }
  }

  set (i, j, value) {
    try {
      return this.matrix.get(i).set(j, value)
    } catch (e) {
      return '*'
    }
  }

  hasWord (word) {
    word = word.toUpperCase()

    // Find the first letter
    for (let i = 0; i < this.dim; i++) {
      for (let j = 0; j < this.dim; j++) {
        if (this.get(i, j) === word.charAt(0)) {
          // From there, find the sequence, letter by letter
          if (this.findSequence(word, i, j)) {
            return true
          }
        }
      }
    }

    return false
  }

  findSequence (seq, i, j) {
    if (seq.length <= 1) {
      return true
    }

    const found = this.get(i, j)

    // Mark temporarily in order to not traverse the same cell twice
    this.set(i, j, ' ')

    for (let u = -1; u <= 1; u++) {
      for (let v = -1; v <= 1; v++) {
        if (this.get(i + u, j + v) === seq.charAt(1)) {
          if (this.findSequence(seq.substr(1), i + u, j + v)) {
            this.set(i, j, found)
            return true
          }
        }
      }
    }

    this.set(i, j, found)
    return false
  }
}
