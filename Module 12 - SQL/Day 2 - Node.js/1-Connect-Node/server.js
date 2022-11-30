// Import Express.js and MySQL
const express = require('express');
const mysql = require('mysql2');

// Define PORT (what’s available or 3001)
const PORT = process.env.PORT || 3001;
// Define app.
const app = express();

// Make Express.js URL encoded and JSON available.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a connection to “classlist_db” db.
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Enternam3!',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

// Run a query and console.log the results.
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// Run the app.
app.use((req, res) => {
  res.status(404).end();
});

// Listen on the port.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
