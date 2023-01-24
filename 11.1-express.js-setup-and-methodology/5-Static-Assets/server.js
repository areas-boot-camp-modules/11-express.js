// Import Express.js and Path modules.
const express = require('express')
const path = require('path')

// Create the app and specify the port.
const app = express()
const PORT = 3001

// Serve all static assets out of the public folder.
app.use(express.static("public"))

// Define the GET route (this will load the index.html file by default).
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/public/")))

// Listen at port 3001.
app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
)
