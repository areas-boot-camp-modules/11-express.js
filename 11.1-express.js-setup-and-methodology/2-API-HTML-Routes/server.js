// TODO: Import express
const express = require("express")
const path = require("path")

// TODO: Import 'terms.json' file
const terms = require("./terms.json")

// TODO: Initialize app variable
const app = express()
const PORT = 3001

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get("/api", (request, response) => {
  response.json(terms)
})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
)
