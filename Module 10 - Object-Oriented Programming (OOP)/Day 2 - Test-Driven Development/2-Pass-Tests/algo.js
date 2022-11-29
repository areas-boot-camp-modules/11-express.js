function Algo() {}

Algo.prototype.reverse = function(string) {
  // TODO: Your code here
  return string.split("").reverse().join("")
};

Algo.prototype.isPalindrome = function(string) {
  // TODO: Your code here
  if (string === this.reverse(string)) {
    true
  }
  return false
};

Algo.prototype.capitalize = function(string) {
  // TODO: Your code here
  let words = string.split(" ")
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  }
  // didn't finish
};

module.exports = Algo;
