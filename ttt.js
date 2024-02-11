var gameMode = document.getElementById("gameMode").value;

var currentPlayer = "O";
var won = false;

var gameModeDropDown = document.getElementById("gameMode")

gameModeDropDown.addEventListener("change", function() {
  if (gameModeDropDown.value == "playerVsComputer") {
    gameModeDropDown.style.width = "230px";
  }
  else {
    gameModeDropDown.style.width = "200px";
  }
})


function place(box) {
  var gameMode = document.getElementById("gameMode").value;
  if (gameMode == "playerVsComputer") {
    if (box.innerText != "" || won) return;
    box.innerText = "⭕";
    currentPlayer = "X";
    checkGameBoard();

    setTimeout(computerTurn, 1000);
  }
  else {
    if (box.innerText != "" || won)
      return;
    if (currentPlayer == "O")
      box.innerText = "⭕";
    else {
      box.innerText = "❌";
    }
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
    checkGameBoard();
  }
}
function computerTurn() {
  // get all available spaces on the game board
  var availableSpaces = [];
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      if (document.getElementById(i + "_" + j).innerText == "") {
        availableSpaces.push(document.getElementById(i + "_" + j));
      }
    }
  }

  // choose a random available space
  var randomIndex = Math.floor(Math.random() * availableSpaces.length);
  var chosenSpace = availableSpaces[randomIndex];

  // place the computer's symbol in the chosen space
  chosenSpace.innerText = "❌";
  currentPlayer = "O";
  checkGameBoard();
}

function checkGameBoard() {
  for (var i = 0; i <= 2; i++) {
    checkWinner(document.getElementById(i + "_0").innerText, document.getElementById(i + "_1").innerText, document.getElementById(i + "_2").innerText);
    checkWinner(document.getElementById("0_" + i).innerText, document.getElementById("1_" + i).innerText, document.getElementById("2_" + i).innerText);
  }
  checkWinner(document.getElementById("0_0").innerText, document.getElementById("1_1").innerText, document.getElementById("2_2").innerText);
  checkWinner(document.getElementById("0_2").innerText, document.getElementById("1_1").innerText, document.getElementById("2_0").innerText);
}
function checkWinner(first, second, third) {
  if (first != "" && first == second && first == third) {
    alert("Winner!");
    won = true;
  }
}

function resetGame() {
  // clear the game board
  for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
      document.getElementById(i + "_" + j).innerText = "";
    }
  }
  // reset the game state
  currentPlayer = "O";
  won = false;
}