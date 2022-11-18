const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

class Letter {
  constructor(letter) {
    this.letter = letter
    if (alphabet.includes(letter)) {
      this.visible = false
    } else {
      this.visible = true
    }
  }
  
  guess(letter) {
    if (letter === this.letter) {
      this.visible = true
      return true
    } else {
      return false
    }
  }

  toString() {
    if (this.visible === false && alphabet.includes(this.letter)) {
      return "_"
    } else {
      return this.letter
    }
  }

  getSolution() {
    return this.letter
  }
}

module.exports = Letter;
