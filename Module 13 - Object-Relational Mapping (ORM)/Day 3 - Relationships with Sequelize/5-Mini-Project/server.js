const express = require("express")

const { Traveller } = require("./models")

const sequelize

const app = express()

app.use(express.json())

app.get("/api/travellers", (req, res) => {

})

app.post("/api/travellers", (req, res) => {
  req.body
  const { name, email } = req.body
  Traveller.create({ name, email }).then((result) {
    res.json(result)
  })
})

sequelize.sync({ force: fasle }).then(() => {
  app.listen(3001)
})
