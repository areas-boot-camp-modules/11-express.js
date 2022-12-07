# Day 2 - Authentication
- RESTful (representational stateless transactions) APIs.
- RESTful calls are independent from one another.
- There’s caching for APIs. Can reduce resources.
- RESTful also uses a set of response codes.

```
const router = require("express").Router()
const User = require("../../models/User")


router.get("/", async (req, res) => {
	const userData = await User.findAll().catch((err) => {
		res.status(500).json(err)
	})
	res.json(userData)
})

router.post("/", async (req, res) => {
	try {
		const userData = await User.create(req.body)
		res.status(200).json(userData)
	} catch (err) {
		res.status(400).json(err)
	}
})

module.exports = router

```

- Mozilla’s a good place to look up response codes.
- ASIDE: VS Code can indent your code with “Reindent...”.
---

```
User.init(
	{
		email: {
			type: DataTypes.STRING,
			unique: true,
			validate: {
				isEmail: true,
			}
		}
	}
)

```

- There are validations and constraints for data.
- For example, if you make a call and it’s not a valid email, that a validation error. If you try to write when it should be a unique value, that’s a constraint.
---
- bcrypt

```
const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../../models/User")

router.post("/", async (req,res) => {
	try {
		const newUser = req.body
		// Hash password 10 times.
		newUser.password = await bcrypt.hash(req.body.password, 10)
		// Create new user with hash password and save to db.
		const userData = await User.create(newUser)
		res.status(200).json(userData)
	} catch (err) {
		res.status(400).json(err)
	}
})


```

---
- Hooks.
- It’s like middleware?
- A way to react.
- There are some hooks we can use with Sequelize.

```
{
	hooks: {
		// Before saving username, make it all lowercase.
		beforeCreate: (newUserData) => {
			newUserData.email = newUserData.email.toLowerCase()
			return newUserData
		},
		beforeUpdate: (updateUserData) => {
			updateUserData.email = updateUserData.email.toLowerCase()
			return updateUserData
		},
	},
	sequelize,
	...
}
```

---
- Instance methods.

```
class User extends Model {
	hasPets() {
		if (this.numberOfPets > 0) {
			return true
		} else {
			return false
		}
	}
}

```

- With above, you can use user.hasPets() elsewhere
- If you put methods in class, they have access to fields.
