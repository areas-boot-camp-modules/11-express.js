// play
function play() {

  // declare the choices
  let gameChoices = ["R", "P", "S"];

  // prompt the player for their choice
  let humanChoice = prompt("Enter R, P, or S.");

  // if the player doesn’t enter R, P, or S, prompt again
  while ( gameChoices.includes(humanChoice) === false ) {
    humanChoice = prompt("You must enter R, P, or S.");
  };

  // format player’s choice
  if (humanChoice === "R") {
    humanChoice = "Rock";
  } else if (humanChoice === "P") {
    humanChoice = "Paper";
  } else if (humanChoice === "S") {
    humanChoice = "Scissors";
  };

  // make the computer’s choice
  let computerChoice = Math.floor( Math.random() * gameChoices.length );
  
  // format computer’s choice
  if (computerChoice === 0) {
    computerChoice = "Rock";
  } else if (computerChoice === 1) {
    computerChoice = "Paper";
  } else if (computerChoice === 2) {
    computerChoice = "Scissors";
  };

  // decide the game and display the results
  if (
    humanChoice === "Rock" && computerChoice === "Scissors" ||
    humanChoice === "Paper" && computerChoice === "Rock" ||
    humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
      results.wins++;
      alert(
        "You chose: " + humanChoice + ".\n" +
        "The computer chose: " + computerChoice + ".\n" +
        "You win! :)"
      );
  } else if (
    humanChoice === "Rock" && computerChoice === "Paper" ||
    humanChoice === "Paper" && computerChoice === "Scissors" ||
    humanChoice === "Scissors" && computerChoice === "Rock"
    ) {
      results.losses++;
      alert(
        "You chose: " + humanChoice + ".\n" +
        "The computer chose: " + computerChoice + ".\n" +
        "You lose! :("
      );
  } else if (
    humanChoice === computerChoice
    ) {
      results.ties++;
      alert(
        "You chose: " + humanChoice + ".\n" +
        "The computer chose: " + computerChoice + ".\n" +
        "You tie!"
      );
  };

}

// declare the results
let results = {
  wins: 0,
  losses: 0,
  ties: 0
};

// display the results
function displayTheResults() {
  alert(
    "Wins: " + results.wins + "\n" +
    "Losses: " + results.losses + "\n" +
    "Ties: " + results.ties
  );
};

// play again
function playAgain() {

  // declare the choices
  let playAgainChoices = ["Y", "N"];

  // prompt the player and store their choice
  let choice = prompt("Do you want to play again (enter Y or N)?");

  // if the player doesn’t enter Y or N, prompt again
  while (playAgainChoices.includes(choice) === false) {
    choice = prompt("You must enter Y or N.");
  };

  // play again until the player enter N
  while (choice === "Y") {
      play();
      displayTheResults();
      choice = prompt("Do you want to play again (enter Y or N)?");  
  };

  // if the player doesn’t enter Y or N, prompt again
  while (playAgainChoices.includes(choice) === false) {
    choice = prompt("You must enter Y or N.");
  };

  // thank the player for playing
  alert("Thanks for playing.");
  displayTheResults();

};

play();
displayTheResults();
playAgain();
