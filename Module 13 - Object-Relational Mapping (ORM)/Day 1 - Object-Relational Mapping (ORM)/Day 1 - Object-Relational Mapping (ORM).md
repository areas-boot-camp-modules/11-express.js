# Day 1 - Object-Relational Mapping (ORM)
- Object-oriented programming.
- Instead of writing a query, you create a class.
- Kind of works like classes and object from before.
- Sequelize! It’s an ORM (object-relational mapper). It a Node.js module.
- There are a lot of features!

```
const Sequelize = require("sequelize")

const sequelize = new Sequelize(
	// db
	"library_db",
	// user
	"root",
	// password
	"",
	{
		host: "localhost",
		dialect: "mysql",
		port: "3306"
	}
)

```

---
Books.js
```
const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Book extends Model {}

Book.init(
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		author: {
			type: DataTypes.STRING,
		},
		...
	},
	{
		sequelize,
		timestamps: false,
		underscored: true,
		modelName: "book",
		freezeTableName: true,
	}
)

```

- Database prefer lowercase and underscores in some cases. So we might say `isSomething` in JS, but it should be `is_something` for the db.
- Book.init sets up the table.
- First object contains field data (it’s like CREATE TABLE).
- For example, DataTypes.INTEGER is like INT in SQL.
- Sequelize is doing the magic.
- See docs for mapping.
- Book.init is like CREATE TABLE.
- If we were to switch from MySQL to PostgreSQL, the JS code wouldn’t need to change.
- Sequelize uses the plural version of a word for databases (Books not Book). But there’s a way to override.
- Sequelize uses plural names.

---
- Book.findOne uses a WHERE clause, not a primary key.
- Book.destroy to DELETE + WHERE clause equivalent.
- Book.update also.

---
```
router.get("/:id", async (req, res) => {
	try {
		const bookData = await Book.findByPk(req.params.id)
		res.json(bookData)
	} catch (error) {
		console.error(error)
	}
})

```
