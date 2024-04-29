import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  function clickHandler(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    nextSquares = squares.slice();
    if (xIsNext === true) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);

    setxIsNext(!xIsNext);
  }
  let status;
  const winner = calculateWinner(squares);

  if (winner) {
    status = "Winner :" + winner;
  } else {
    status = "Next turn is :" + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div classNmae="status"> {status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => clickHandler(0)} />
        <Square value={squares[1]} onSquareClick={() => clickHandler(1)} />
        <Square value={squares[2]} onSquareClick={() => clickHandler(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => clickHandler(3)} />
        <Square value={squares[4]} onSquareClick={() => clickHandler(4)} />
        <Square value={squares[5]} onSquareClick={() => clickHandler(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => clickHandler(6)} />
        <Square value={squares[7]} onSquareClick={() => clickHandler(7)} />
        <Square value={squares[8]} onSquareClick={() => clickHandler(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}
