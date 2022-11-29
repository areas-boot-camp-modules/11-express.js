const Letter = require("./Letter");

class Word {
  constructor(word) {
    this.letters = [...word].map((letter) => {
      return new Letter(letter)
    })
  }
  guessLetter(letter) {
    let finalResult = false
    this.letters.forEach((letterObject) => {
      const result = letterObject.guess(letter)
      if (result) {
        finalResult = true
      }
    })
    return finalResult
  }
  guessedCorrectly() {
    for (const letter of this.letters) {
      if (letter.visible === false) {
        return false
      } else {
        return true
      }
    }
  }
  toString() {
    
  }
}

module.exports = Word;
