// Import Express.js and MySQL
const express = require('express')
const mysql = require('mysql2')

// Declare app and port.
const app = express()
const PORT = process.env.PORT || 3001

// Declare middleware.
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Connect to MySQL database.
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Enternam3!',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
)

// Count the unique books by whether they’re in stock or not.
db.query(
  `SELECT
    COUNT(id) AS total_count
  FROM
    favorite_books
  GROUP BY
    in_stock`, function (err, results) {
  console.log(results)
})

// Total number of books, and the min, max, and avg quantities per section.
db.query(
  `SELECT
    SUM(quantity) AS total_in_section,
    MAX(quantity) AS max_quantity,
    MIN(quantity) AS min_quantity,
    AVG(quantity) AS avg_quantity
  FROM
    favorite_books
  GROUP BY
    section`, function (err, results) {
  console.log(results)
})

app.use((req, res) => {
  res.status(404).end()
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
