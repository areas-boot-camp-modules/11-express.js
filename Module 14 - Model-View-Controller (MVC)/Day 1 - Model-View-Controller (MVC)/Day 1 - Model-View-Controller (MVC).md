# Day 1 - Model-View-Controller (MVC)
- Separation of concerns.
- The Model-View-Controller (MVC).
- The model could be a JSON or db. It stores data.
- The view is a page (could be HTML or CLI interface).
- Users use the controller. Could be something that takes user input and does something with it.
- There are also template engines. They have placeholders, functions, and other things.
- React is a front-end template engine. MVC is a primer to React.
- Handlebars.js. It’s an extension of mustache. It’s a templating language.
- There are other languages to look at.

Folders:
- models
- views
- controllers
- public (assets, like CSS)

server.js
```
const express = requir("express")

```

controllers/dish-routers.js
```
const express = requir("express").Router

```

- {{{ this }}} is like ${this} (it’s a placeholder).
- There’s a node module: `express-handlebars`.

```
app.engine("hanldebars", hbs.engine)
app.set("view engine", "handlebars")

```

---
```
// Get one dish (by its ID).
router.get("dish/:num", async (req.res) => {
	const dish = dishes[req.params.num-1]
	return res.render("dish", {
		dish_name: dish.dish_name,
	})
})

```

- {{{ body }}} is a special placeholder. Usually, it’s {{ placeholder }}. Should look into that.

---
dish-routes.js
```
dishes = [
	{
		id: 1
		dish_name: "PBJ",
		description: "Peanut butter and jelly sandwich.",
		has_nuts: true
	}
]

```

- `‌{{#each dishes as |dish|}}` ... `‌{{#each}}` is a for loop. It’s like `for (const dish of dishes)`. But in this case, you have to wrap (in other words, close the `#each`).
- You can also access items from an object with something like `{{ dish.id }}`.

---
```
// Get one dish without serializing data.
router.get("/dish/:id", async (req, res) => {
	try {
		const dishData = await Dish.findByPk(re.params.id)
		const dish = dishData.get({ plain: true})
		res.render("dish", dish)
	} catch (err) {
		res.status(500).json(err)
	}
})

```

---
- `document.location.reload()` to reload the page.
- Now we’re using routes to get pages, and ones for APIs. These should be organized in different files, since they do different things.

```
router.get

```

---
- In MVC, views call controllers.
