import React, { useState } from "react";
import ElegirJugador from "./ElegirJugador.jsx";
import Tablero from "./Tablero.jsx";

//create your first component
const Home = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [symbolPlayer, setSymbolPlayer] = useState("");
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [winner, setWinner] = useState(null);

  return (
    <>
      {player1 !== "" && player2 !== "" && symbolPlayer !== "" ? (
        <Tablero
          board={board}
          setBoard={setBoard}
          symbolPlayer={symbolPlayer}
          setSymbolPlayer={setSymbolPlayer}
          winner={winner}
          setWinner={setWinner}
        />
      ) : (
        <ElegirJugador
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setSymbolPlayer={setSymbolPlayer}
        />
      )}
    </>
  );
};

export default Home;
