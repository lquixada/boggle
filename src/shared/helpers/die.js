import sample from 'lodash/sample'

export class Die {
  constructor (letters) {
    this.sides = letters.split('')
  }

  roll () {
    return sample(this.sides)
  }
}
