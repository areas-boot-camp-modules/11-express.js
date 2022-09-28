// coffee order

let customerDrinkOrder = {
  name: "Coffee",
  numberOfSugars: 0,
  ready: true
};

console.log(customerDrinkOrder.name + " - " + customerDrinkOrder.numberOfSugars + " sugar(s)");

if (customerDrinkOrder.ready === true) {
  console.log("Your order is ready!");
} else if (customerDrinkOrder !== false) {
  console.log("Your order is not ready :(");
} else {
  console.log("Sorry, something went wrong.");
}
