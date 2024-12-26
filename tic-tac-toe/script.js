let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const statusDisplay = document.getElementById("status");
const cells = document.querySelectorAll(".cell");
const restartButton = document.getElementById("restart");

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

  if (gameBoard[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  gameBoard[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;

  checkWin();
  checkDraw();

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (gameActive) {
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      gameActive = false;
      statusDisplay.textContent = `Player ${currentPlayer} wins!`;
      return;
    }
  }
}

function checkDraw() {
  if (!gameBoard.includes("") && gameActive) {
    gameActive = false;
    statusDisplay.textContent = "Game ended in a draw!";
  }
}

function restartGame() {
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach((cell) => (cell.textContent = ""));
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
restartButton.addEventListener("click", restartGame);
