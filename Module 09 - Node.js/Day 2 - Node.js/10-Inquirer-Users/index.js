const inquire = require("inquirer")
const fs = require("fs")

inquire
  .prompt([
    {
      type: "input",
      message: "What’s your name?",
      name: "name"
    },
    {
      type: "checkbox",
      choices: ["JavaScript", "Python", "Bash"],
      message: "What languages do you know?",
      name: "languages"
    },
    {
      type: "list",
      choices: ["Email", "Text", "Slack", "Discord"],
      message: "What is your preferred method of communication?",
      name: "communication"
    },

  ])
  .then((answers) => {
    console.log(answers)
    const formattedAnswers = JSON.stringify(answers)
    fs.writeFile("answers.md", formattedAnswers, (error) => {
      console.log(error)
    })
  })
