import { useState } from "react";
import "./App.css";

function App() {
  const [gameBoard, setGameBoard] = useState<string[]>(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [gameActive, setGameActive] = useState(true);
  const [status, setStatus] = useState(`Player X's turn`);

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

  const handleCellClick = (index: number) => {
    if (gameBoard[index] !== "" || !gameActive) {
      return;
    }

    const newBoard = [...gameBoard];
    newBoard[index] = currentPlayer;
    setGameBoard(newBoard);

    // Check for win
    const hasWon = winningConditions.some(
      ([a, b, c]) =>
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
    );

    if (hasWon) {
      setStatus(`Player ${currentPlayer} wins!`);
      setGameActive(false);
      return;
    }

    // Check for draw
    if (!newBoard.includes("")) {
      setStatus("Game ended in a draw!");
      setGameActive(false);
      return;
    }

    // Continue game
    const nextPlayer = currentPlayer === "X" ? "O" : "X";
    setCurrentPlayer(nextPlayer);
    setStatus(`Player ${nextPlayer}'s turn`);
  };

  const restartGame = () => {
    setGameBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setGameActive(true);
    setStatus(`Player X's turn`);
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div id="status">{status}</div>
      <div className="board">
        {gameBoard.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleCellClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
}

export default App;
