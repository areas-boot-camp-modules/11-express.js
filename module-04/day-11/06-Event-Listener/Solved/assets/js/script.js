// declare variables
let count = 0;
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let displayCount = document.querySelector("#count");

// change displayed count
function setCounterText() {
  displayCount.textContent = count;
}

// increment count
increment.addEventListener("click", function() {
  count++;
  setCounterText();
});

// decrement count (if > 0)
decrement.addEventListener("click", function() {
  if (count > 0) {
    count--;
    setCounterText();
  };
});
