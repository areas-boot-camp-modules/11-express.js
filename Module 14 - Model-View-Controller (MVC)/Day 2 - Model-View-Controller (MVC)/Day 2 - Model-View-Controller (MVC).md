# Day 2 - Model-View-Controller (MVC)
- Working more with Handlebars.
- Today, we’ll learn about sessions and cookies.
- We’ll also learn about some concepts that will prepare us for components (like in React).
- Partials are like components. And they must be named a specific way.
- Partials are reusable across multiple Handlebar templates. This is common for many frameworks.

```
{{#each galleries as |gallery|}}
	{{> galeries-details}}
{{/each}}

```

- The above makes properties available elsewhere, so we only have to call `‌{{id}}` and not `‌{{gallery.id}}`, and so on.
- There’s a relationship between a Handlebar file and route.

---
- Custom helpers.
- `{{gallery.starting_date}}`
- `‌{{format_time gallery.ending_date}}`. This is a helper, found in the `util` folder.
- Nice way to format data.
```
format_time: (date) => {
	// code
}

```

---
- Sessions.
- A session is a string of text that represents a user. It’s stored in the back end.
- We can look someone up in the back end by their session.
- There’s Express.js session.
- Sessions are encrypted so others can’t create their own sessions.

```
...
	req.session.save(() => {
		if (req.session.countVisit) {
			req.session.countVisit++
		} else {
			req.session.countVisit = 1
		}
		
		res.render("homepage", {
			galleries,
			countViist: req.session.countVisit
		})
	})
} catch (err) {
	console.log(err)
	...
}

```

- A session is an object that unique for each user.

---
- Cookies.
- Cookies have a domain, path, expiration, size, HTTP-only, etc.

```
const sess = {
	secret: "Super sercet secret",
	cookie: {
		maxAge: 24 * 60 * 60 * 1000, // expires in 24 hours
	},
	resave: false,
	saveUnitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	})
}

```

- Cookies can be stored in the db.

---
- Middleware.
- Something you might find in a utils folder.
- How is this different than middleware for Express.js?

```
app.use((req, res, next) => {
	// code
})
```

```
module.exports = [
	// code 
]

```

- Custom middleware is different, as it’s not used on every route (just the ones we want).
- You can add multiple middleware to a route!

```
router.get("/gallery/:id", checkLogin, async (req, res) => {
	//
})

```

---
- There’s another way to do auth (bonus).
- Sessions and cookies.
- JWT is the new way, and more worthwhile to learn, apparently.
- See jwt.io.
- Part 1 is the algorithm, part 2 is the payload (not encrypted), and part 3 is a verification (encrypted hash using a back-end server token).
- More common because it’s a known standard.
- JWT is easier to debug.
- See node `jsonwebtoken`.
- First you sign a token, which you sign using a key in your .env file.

```
const jwt = require("jsonwebtoken")
...
const tokenData = {
	id: dbUserData.id,
}

jwt.sign(tokenData, process.env.JWT_KEY)

res.cookie("login_token", token, { maxAge: 60*60*24*7, httpOnly: true })

```

- Middleware includes `next`.
- Should take some time to learn this stuff.