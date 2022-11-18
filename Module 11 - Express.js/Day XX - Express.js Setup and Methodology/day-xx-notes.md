# Express.js Setup and Methodology
- POST, GET, DELETE, PATCH.
- Is a route an endpoint?
- Front end uses fetch to interact with a server API.

```
const express = require("express")
const path = require("path")

const app = express()
const PORT = 3001

// this is middleware. middleware is like a plugin. this one serves routes.
app.use(express.static("public"))

// GET route
app.get("/" , (rep, res) => {
	res.send("Navigate to /send or /routes")
})

// GET route
app.get("/send", (req, res) => {
	res.sendFile(path.join(__dirname, "public/sendFile.html"))
})

// GET route
app.get("/routes", (req, res) => {
	res.sendFile(path.join(__dirname, "public/routes.html"))
})

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`)
})

```

- What if there’s JSON?

```
...
app.get("/", (request, response) => {
	response.send(
		`<p>Hello, World.</p>`
	)
})

app.get("/api", (request, response) => {
	response.json({
		term: "api",
		description: "I am a description.",
	})
})

...

```

- Query parameters.

```
...
app.get("/api/terms", (response, request) => {
	res.json(termData)
})

// the thing after the colon is a key (query parameter)
app.get("/api/terms/:term", (response, request) => {
	// code... req.params.
	// this gets the param out.
	const requestedTerm = req.params.term.toLowerCase()
})

// put this at the end!
app.get("*", (response, response)) => {
	res.send(`404 page, go here, blah blah blah`)
})

```

server.js
```
...
const petData = require("./db/animals.json")

...
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(express.static("public"))

app.get("/", (request, response) => {
	response.sendFile(path.join(__dirname, "index.html"))
})

```

index.js
```
...
const getTerms = async () => {
	const result = await fetch("/api/terms", {
		method: "GET",
	})
	const json = await result.json()
	return json
}

...

```

- Static assets.

```
...
// Use a public folder for all static files. Don’t create a route for each file!
app.use(express.static("public"))

...

```

- Any time you use middleware, you use app.use().