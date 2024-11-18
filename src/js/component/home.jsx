import React, { useState } from "react";
import ElegirJugador from "./ElegirJugador.jsx";
import Tablero from "./Tablero.jsx";

//create your first component
const Home = () => {
  const [player1, setPlayer1] = useState("Pedro");
  const [player2, setPlayer2] = useState("Martin");
  const [symbolPlayer, setSymbolPlayer] = useState("X");
  const [board, setBoard] = useState([
    null,
    "0",
    null,
    null,
    null,
    null,
    "X",
    null,
    "0",
  ]);

  return (
    <>
      {player1 !== "" && player2 !== "" && symbolPlayer !== "" ? (
        <Tablero
          board={board}
          setBoard={setBoard}
          symbolPlayer={symbolPlayer}
          setSymbolPlayer={setSymbolPlayer}
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
