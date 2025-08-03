import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [xplay, setXplay] = useState(true);

  const handleClick = (index) => {
    // Prevent clicking on already filled squares or if game is won
    if (state[index] !== null || checkWinner()) return;

    const copyState = [...state];
    copyState[index] = xplay ? "X" : "O";
    setState(copyState);
    setXplay(!xplay);
  };

  const checkWinner = () => {
    const comb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let win of comb) {
      const [a, b, c] = win;
      if (state[a] === state[b] && state[a] === state[c] && state[a] !== null) {
        return state[a]; // Return the winner ("X" or "O")
      }
    }
    return null; // No winner
  };

  const winner = checkWinner();

  return (
    <div className="container">
      {winner ? (
        <h2>🎉 Player {winner} Wins! 🎉</h2>
      ) : (
        <h3>Current Player: {xplay ? "X" : "O"}</h3>
      )}

      <div className="board-row">
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]} />
        <Square onClick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(3)} value={state[3]} />
        <Square onClick={() => handleClick(4)} value={state[4]} />
        <Square onClick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(6)} value={state[6]} />
        <Square onClick={() => handleClick(7)} value={state[7]} />
        <Square onClick={() => handleClick(8)} value={state[8]} />
      </div>

      {winner && (
        <button
          onClick={() => {
            setState(Array(9).fill(null));
            setXplay(true);
          }}
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default Board;
