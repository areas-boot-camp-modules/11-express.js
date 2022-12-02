require("dotenv").config()
const mysql = require("mysql2")
const express = require("express")

app.use(express.json())

const connection = mysql.createConnection({
  host: "process.env.DB_HOST",
  user: "process.env.DB_USER",
  database: "process.env.DB_DB",
  password: "process.env.DB_PASS",
})

// SELECT * FROM movies;
// connection.query(`SELECT * FROM movies`, function (err, results) {
//   console.log(results)
// })

function getMovies() {
  return new Promise((resolve) => {
    connection.query
  })
}

app.get("/api/movies", (req, res) => {
  getMovies().then((allMovies) => {
    res.JSON(allMovies)
  })
})

app.post("/api/add-movie", (req, res) => {
  const { name } = req.body
  connection.query(`INSERT INTO movies (name) VALUES (?)`, name, (err, result) => {
    res.status(200)
    res.end()
  })
})

app.listen(3001)
