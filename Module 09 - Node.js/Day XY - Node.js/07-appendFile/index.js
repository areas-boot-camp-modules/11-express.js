// Import Node File System (fs).
const fs = require('fs')

// Append process.argv[2] to log.txt file, else pass error to error function.
fs.appendFile('log.txt', `${process.argv[2]}\n`, (error) =>
  // If error, console.log error, else log “Commit logged!”.
  err ? console.error(error) : console.log('Commit logged!')
)
