let container = document.querySelector(".container");

container.addEventListener("click", function(event) { // listening within the container div element
  let element = event.target; // taking the element and storing it as a variable

  if (element.dataset.state === "hidden") { // if data-state = hidden
    element.textContent = element.dataset.number; // put data-number inside element
    element.dataset.state = "not-hidden"; // set data-state = not-hidden
  } else if (element.dataset.state === "not-hidden") { // if data-state = not-hidden
    element.textContent = ""; // put nothing inside element
    element.dataset.state = "hidden"; // set data-state = hidden
  };

});
