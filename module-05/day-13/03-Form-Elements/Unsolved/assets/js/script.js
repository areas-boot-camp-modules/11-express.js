let shoppingForm = $("#shopping-form")
let shoppingList = $("#shopping-list")
let shoppingInput = $("#shopping-input")
let shoppingButton = $("#shopping-button")

// Add the user’s shopping list item to a shopping list.
function addShoppingListItem(event) {
  // Don’t refresh the page.
  event.preventDefault()
  // Save the user’s shopping item to a new variable.
  let shoppingListItem = $("input").val()
  // If there’s nothing in the field, exit the function.
  if (shoppingListItem === "") { return }
  // Take the user’s shopping item, wrap it with <li> and append it to the shopping list.
  shoppingListItem = $("<li>" + shoppingListItem + "</li>")
  shoppingList.append(shoppingListItem)
  // Clear the input field.
  shoppingInput.val("")
}

// Add a listener to the shopping button.
shoppingButton.click(addShoppingListItem)
