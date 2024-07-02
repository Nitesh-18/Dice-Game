// Initialize scores
var scorePlayerA = 0;
var scorePlayerB = 0;

// Get sound elements
var rollSound = document.getElementById("roll-sound");
var winSound = document.getElementById("win-sound");

// Function to roll the dice
function rollDice() {
  // Play roll sound
  rollSound.play();

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
      document.querySelector("h1").textContent = "Player A Wins!";
      scorePlayerA++;
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").textContent = "Player B Wins!";
      scorePlayerB++;
    } else {
      document.querySelector("h1").textContent = "It's a Draw!";
    }

    // Update scores
    document.querySelector("#score-playerA").textContent = `Player A: ${scorePlayerA}`;
    document.querySelector("#score-playerB").textContent = `Player B: ${scorePlayerB}`;

    // Check for winning conditions
    if (scorePlayerA === 5) {
      document.querySelector("h1").textContent = "Player A Wins the Game!";
      document.querySelector("#roll-button").disabled = true;
      document.querySelector("#game-winner").style.display = "block";
      document.querySelector("#winner-text").textContent = "Player A";
      winSound.play();
    } else if (scorePlayerB === 5) {
      document.querySelector("h1").textContent = "Player B Wins the Game!";
      document.querySelector("#roll-button").disabled = true;
      document.querySelector("#game-winner").style.display = "block";
      document.querySelector("#winner-text").textContent = "Player B";
      winSound.play();
    }
  }, 1000);
}

// Add event listener to roll button
document.querySelector("#roll-button").addEventListener("click", rollDice);

// Add event listener to reset button
document.querySelector("#reset-button").addEventListener("click", function () {
  scorePlayerA = 0;
  scorePlayerB = 0;
  document.querySelector("h1").textContent = "Let's Play!";
  document.querySelector("#score-playerA").textContent = `Player A: 0`;
  document.querySelector("#score-playerB").textContent = `Player B: 0`;
  document.querySelector("#roll-button").disabled = false;
  document.querySelector("#game-winner").style.display = "none";
});
