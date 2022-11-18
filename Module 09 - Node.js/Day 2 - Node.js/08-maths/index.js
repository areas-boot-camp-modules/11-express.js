const { quotient } = require("./maths")
const math = require("./maths")

const operation = process.argv[2]
const firstNumber = parseInt(process.argv[3])
const secondNumber = parseInt(process.argv[4])

switch (operation) {
  case "add":
  case "sum":
    console.log( math.sum(firstNumber, secondNumber) )
    break
  case "difference":
  case "minus":
  case "subtract":
    console.log( math.difference(firstNumber, secondNumber) )
    break
  case "product":
    console.log( math.product(firstNumber, secondNumber) )
    break
  case "divide":  
  case "quotient":
    console.log( math.quotient(firstNumber, secondNumber) )
    break
  default:
    console.log("Please specify an operator and two numbers.")
}
