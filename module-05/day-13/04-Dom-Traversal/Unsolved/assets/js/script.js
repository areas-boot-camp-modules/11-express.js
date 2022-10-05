// Assemble: Create/select DOM elements
var rootElement = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootElement.children("ul").children().css("background-color", "white")

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
rootElement.children().eq(3).children(":first-child").text("O")
