// Initialize scores
var scorePlayer1 = 0;
var scorePlayer2 = 0;

// Function to roll the dice
function rollDice() {
  // Generate random numbers for each dice
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Add rolling class to dice images
  document.querySelector(".img1").classList.add("rolling");
  document.querySelector(".img2").classList.add("rolling");

  setTimeout(() => {
    document.querySelector(".img1").classList.remove("rolling");
    document.querySelector(".img2").classList.remove("rolling");
    
    // Update dice images
    document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
    document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);
    
    
    // Determine the winner of this round
    if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
    scorePlayer1++;
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
    scorePlayer2++;
} else {
    document.querySelector("h1").textContent = "It's a Draw!";
}

// Update scores
document.querySelector("#score-player1").textContent = `Player 1: ${scorePlayer1}`;
document.querySelector("#score-player2").textContent = `Player 2: ${scorePlayer2}`;

// Check for winning conditions
if (scorePlayer1 === 5) {
    document.querySelector("h1").textContent = "Player 1 Wins the Game!";
    document.querySelector("#roll-button").disabled = true;
    document.querySelector("#game-winner").style.display = "block";
    document.querySelector("#winner-text").textContent = "Player 1";
} else if (scorePlayer2 === 5) {
    document.querySelector("h1").textContent = "Player 2 Wins the Game!";
    document.querySelector("#roll-button").disabled = true;
    document.querySelector("#game-winner").style.display = "block";
    document.querySelector("#winner-text").textContent = "Player 2";
}
}, 1000);
}

// Add event listener to roll button
document.querySelector("#roll-button").addEventListener("click", rollDice);

// Add event listener to reset button
document.querySelector("#reset-button").addEventListener("click", function() {
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  document.querySelector("h1").textContent = "Let's Play!";
  document.querySelector("#score-player1").textContent = `Player 1: 0`;
  document.querySelector("#score-player2").textContent = `Player 2: 0`;
  document.querySelector("#roll-button").disabled = false;
  document.querySelector("#game-winner").style.display = "none";
});