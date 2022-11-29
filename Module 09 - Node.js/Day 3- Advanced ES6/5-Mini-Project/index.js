const fs = require("fs")
const inquire = require("inquirer")

inquire
  .prompt([
    {
      name: "first-name",
      type: "input",
      message: "What’s your first name?",
    },
    {
      name: "last-name",
      type: "input",
      message: "What’s your last name?",
    },
    {
      name: "location",
      type: "input",
      message: "What’s your location (for example, “Oakland, CA”)?",
    },
    {
      name: "bio",
      type: "input",
      message: "What’s your bio?",
    },
    {
      name: "linkedin",
      type: "input",
      message: "What’s your LinkedIn URL?",
    },
    {
      name: "github",
      type: "input",
      message: "What’s your GitHub URL?",
    },
  ])
  .then((answers) => {
    // Save template file to new variable.
    let contents = fs.readFileSync("template.html", "utf8")

    // Need to understand why there’s an array and what Object.entries does.
    for (const [key, value] of Object.entries(answers)) {
      // Replace stuff.
      contents = contents.replaceAll(`{${key}}`, value)
    }

    // Write result to results.html.
    fs.writeFileSync("result.html", contents)
    
  })
