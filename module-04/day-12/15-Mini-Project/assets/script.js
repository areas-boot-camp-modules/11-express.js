// Save the start game button element
let startGameButton = document.body.querySelector("#start-game-button")
let secondsLeft = 10
console.log(secondsLeft) // **debug

function startGame() {

  function countdown() {  
    secondsLeft--
    console.log(secondsLeft) // **debug
    if (secondsLeft === 0) { clearInterval(timer) }
  }

  let timer = setInterval(countdown, 1000)

}

// Add a listener event to the start game button.
startGameButton.addEventListener("click", startGame)