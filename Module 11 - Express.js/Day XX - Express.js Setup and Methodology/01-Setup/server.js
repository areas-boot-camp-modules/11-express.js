const express = require("express")
const path = require("path")

const app = express()
const PORT = 6969

// Invoke the app.
app.use( express.static("public") )

// GET route at /
app.get("/", (request, response) => response.send("Navigate to /send or /routes"))

// GET route at /send
app.get("/send", (request, response) =>
  response.sendFile(path.join(__dirname, "public/send.html"))
)

// GET route at /paths
app.get("/paths", (request, response) => {
  response.sendFile(path.join(__dirname, "public/paths.html"))
})

// Listen
app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}...`)
);
