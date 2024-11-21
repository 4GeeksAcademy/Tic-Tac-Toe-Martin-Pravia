import React from "react";

const Tablero = ({
  board,
  setBoard,
  symbolPlayer,
  setSymbolPlayer,
  setWinner,
  winner,
  player1,
  player2,
}) => {
  const change = (index, board, symbolPlayer) => {
    // console.log("Cambiando valor: ", index);
    // console.log(board);
    if (board[index] !== null || winner) return;
    const newBoard = [...board];
    const moves = newBoard.filter((box) => box !== null).length;
    console.log(moves);
    newBoard[index] =
      moves % 2 === 0 ? symbolPlayer : symbolPlayer === "X" ? "O" : "X";
    setBoard(newBoard);

    const gameWinner = whoWins(newBoard);
    if (gameWinner) {
      console.log("Hay ganador: ", gameWinner);
      setWinner(gameWinner);
    }
  };

  const whoWins = (newBoard) => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let combination of combinations) {
      const [a, b, c] = combination;
      if (newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        console.log("La combinacion ganadora es: ", combination);
        return newBoard[a];
      }
    }
    return null;
  };

  const getWinnerName = (winnerSymbol) => {
    if (symbolPlayer === winnerSymbol) {
      return player1;
    } else {
      return player2;
    }
  };
  return (
    <div className="container bg-primary-subtle" id="main">
      <div className="row text-center">
        <span id="turn">Tic Tac Toe in React.js</span>
      </div>
      <div className="row justify-content-center align-items-center">
        <div id="winnerAlert" className="text-center mt-4">
          {winner && (
            <div className="text-center mt-4">
              <p>The winner is {getWinnerName(winner)}</p>
            </div>
          )}
        </div>
        <div className="col-3 text-center">
          <button
            type="button"
            className="btn btn-success"
            id="replay"
            onClick={() => {
              setBoard([null, null, null, null, null, null, null, null, null]);
              setWinner(null);
            }}
          >
            Play again
          </button>
        </div>
      </div>
      <div className="row text-center justify-content-center align-items-center">
        <div className="row justify-content-center align-items-center">
          <div
            className="box"
            id="box1"
            onClick={() => change(0, board, symbolPlayer)}
          >
            {board[0]}
          </div>
          <div
            className="box"
            id="box2"
            onClick={() => change(1, board, symbolPlayer)}
          >
            {board[1]}
          </div>
          <div
            className="box"
            id="box3"
            onClick={() => change(2, board, symbolPlayer)}
          >
            {board[2]}
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div
            className="box"
            id="box4"
            onClick={() => change(3, board, symbolPlayer)}
          >
            {board[3]}
          </div>
          <div
            className="box"
            id="box5"
            onClick={() => change(4, board, symbolPlayer)}
          >
            {board[4]}
          </div>
          <div
            className="box"
            id="box6"
            onClick={() => change(5, board, symbolPlayer)}
          >
            {board[5]}
          </div>
        </div>
        <div className="row justify-content-center align-items-center mb-5">
          <div
            className="box"
            id="box7"
            onClick={() => change(6, board, symbolPlayer)}
          >
            {board[6]}
          </div>
          <div
            className="box"
            id="box8"
            onClick={() => change(7, board, symbolPlayer)}
          >
            {board[7]}
          </div>
          <div
            className="box"
            id="box9"
            onClick={() => change(8, board, symbolPlayer)}
          >
            {board[8]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tablero;
