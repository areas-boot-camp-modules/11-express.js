# Day 2 - Node.js
- `PRIMARY KEY (dept_no)`
- `UNIQUE KEY (dept_name)`
- You can only have one primary key per table, but many unique keys per table.

```
CREATE TABLE employees (
	emp_no INT NOT NULL,
	...
	PRIMARY KEY (emp_no)
);

```

- `SELECT COUNT(*) FROM employees`
- `DESCRIBE employees`
- `SELECT COUNT(*) FROM employees WHERE first_name = "Oscar";`

```
CREATE TABLE students (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	...
);

```

- `AUTO_INCREMEMNT` adds an ID for you.

```
const mysql = require("mysql2")

const PORT = process.env.PORT || 3001
const app = express()

const db = mysql.createConnection(
	{
		host: "localhost",
		user: "root",
		password: "",
		database: "a_db",
	},
	console.log("Connected to db.")
)

db.query("SELECT * FROM students", function(err, results) {
	console.log(results)
})

```

---
- Not a good idea to hard-code the password. Should set them up in the environment and get them from there (but how?).

```
CREATE TABLE course (
	id INT NOT NULL,
	course_title VARCHAR(30) NOT NULL,
	course_description TEXT NOT NULL,
	active BOOLEAN NOT NULL,
	date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO
	courses(id, course_title)
VALUES
	(1, "Economics 101")
	(2, "Advanced Economics")
```

- Dates: DATE, TIME, DATETIME. DATETIME is the most common.
- You can add DEFAULT and set it to anything. If no value provided, the DEFAULT is inserted.
- You can event default to NULL, but that’s already the default.

---
- Schemas.
- All the SQL to create tables.

---
- Foreign keys.
- It’s supposed to maintain a relationship between tables.

```
CREATE TABLE instructors (
	id INT NOT NULL,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	PRIMARY KEY (id)
);

CREATE TABLE courses (
	id INT,
	course_title VARCHAR(30) NOT NULL,
	instructor_id INT,
	order_details TEXT,
	FOREIGN KEY (instructor_id) REFERENCES instructors(id) ON DELETE SET NULL
);

```
