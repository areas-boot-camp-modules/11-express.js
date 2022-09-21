// Change the values and operators below to test your algorithm meets all conditions
var x = 25;
var expression1 = (x = 25);
var expression2 = (x >= 25);

// conditional
if (expression1 && expression2) {
  console.log("True ✅ True ✅");
} else if (expression1 && !expression2) {
  console.log("True ✅ False ❌");
} else if (!expression1 && expression2) {
  console.log("False ❌ True ✅");
} else if (!expression1 && !expression2) {
  console.log("False ❌ False ❌");
} else {
  console.log("Oops, something went wrong.")
}
