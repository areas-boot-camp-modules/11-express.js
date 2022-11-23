const express = require("express")

const PORT = 3001
const app = express()

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get("/api/reviews", (req, res) => {
  res.send("GET /api/reviews works!")
})

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
app.post("/api/reviews", (req, res) => {
  res.send("POST /api/reviews works!")
})

// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get("/api/upvotes", (req, res) => {
  res.send("GET /api/upvotes works!")
})

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
app.post("/api/upvotes", (req, res) => {
  res.send("POST /api/upvotes works!")
})

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
)
