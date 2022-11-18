function User(username, email) {
  this.username = username
  this.email = email

  this.login = (username) => {
    if (this.username === username) {
      return true
    }
    return false
  }
}

module.exports = User
