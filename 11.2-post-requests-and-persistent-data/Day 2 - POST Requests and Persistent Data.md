# POST Requests and Persistent Data
- You can use Insomnia or Postman to text APIs.
- It’s like cURL, but just more powerful.
- Now let’s look at POST.
- You can use the same endpoint when you use another method, like POST.

```
app.post("/api/reviews", (res, req) => {
	res.json("")
})

```

- You can return something with res.send("Message")
- You can also use res.end().

- Body parsing.
- For GET, you can use query parameters.
- For POST, you use body.
- Use Content-Type to say what kind of content, such as application/json.
- req.query for GET.
- req.body for POST.
- With express, you also need to use middleware to process. For example, app.use(express.json()).
- Also, app.use(express.urlencoded()).

- Another middleware is app.use(express.static("public")) for creating routes for everything in the folder.
- res.status(200).json(reviews).
- What’s req.method?
- nodemon is a nice things that restarts server for you when the file changes!
