# Day 3 - Relationships with Sequelize
- `for in` iterates over an object. `for of` iterates over an array or string!

```
class License extends Model {}

License.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		}
		...
		driverId: {
			type: DataTypes.INTEGER,
			references: {
				model: "driver",
				key: "id", // id from other the `driver` table
			},
		},
	},
	{
		sequelize,
		...
		modelName: "driver",
	}
)

```

- `include` with Sequelize is like a JOIN.

```
License.belongsTo(Driver, {
	foreignKey: "driver_id",
})

Driver.hasMany(Car, {
	foreignKey: "driver_id",
	onDelete: "CASCADE",
})

Car.belongsTo(Driver, {
	
})

```

- SQL doesn’t car about one-to-one or one-to-many. But Sequelize does.

---

```
attributes: {
	include: [
		[
			sequelize.literal(
				"(SELECT SUM(mileage) FROM car WHERE car.driver_id = something"
			),
			"totalMileage",			
		],
	],
},

```


---
- ESLint.
- What’s commonJS?
- There’s an Airbnb lint rule!
- If you want to use ESLint, install it as a dependency.

---
- To create a many-to-many relationship, you have to create another table (a pivot table).

---
- When you create a project, start with the models! Models are like classes and also represent db tables.
- Get your models right in the start.
- There’s the specific one, and an `index.js` that relates them.
- Then there’s the `connection.js` and seed file.
- Then you can create a `server.js` with all the routes. Use Sequelize to get access to things.
- Might be good to start with POST to get data in the db. Then GET, then the more complicated ones, such as those routes that use something like `:id`.
- In short, start with data and go from there.

---
- The next challenge! 13.
- e-commerce site.
- Comes with started code.
- Express.js, Sequelize, and MySQL.
- There will be a lot of routes, maybe 4 per model (there are 4).
