let students = ["Christian", "Brenda"]

console.log(students);

console.log(students.length); // how many students in the array

console.log("Welcome, " + students[0] + "!");
console.log("Welcome, " + students[1] + "!");

students[0] = "Christian Areas";

console.log("Welcome, " + students[0] + "!");

if (students[0] === "Christian Areas") {
  console.log(students[0] + " added!")
} else
  console.log("FAIL!")
