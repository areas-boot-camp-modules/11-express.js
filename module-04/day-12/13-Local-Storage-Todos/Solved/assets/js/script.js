var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// Builds a list of todos
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // Clears list in preparation to update it, then updates the count?
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // Creates a list item element for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// Sets up the page on first load.
function init() {
  // TODO: What is the purpose of the following line of code?
  // Gets todos from storage and converts back to object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // Deals with case where there’s nothing in local storage.
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // This actually creates the list from the stored data.
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // Stores data to local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// Runs the function when the user clicks the button.
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // If there’s nothing, don’t add an item to the list (i.e. leave the function before running more code)
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
 // Adds new todo to list and resets the form
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  // Store the updated JSON object to local storage and update the list with the new item.
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
// Adds listener event to Complete button
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // Matches button to corresponding todo.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    // The local storage gets updated (the complete todo is gone) and rendered without that completed todo.
    storeTodos();
    renderTodos();
  }
});

init();
