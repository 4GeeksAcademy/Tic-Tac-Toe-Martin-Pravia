import React from "react";

const ElegirJugador = ({ setPlayer1, setPlayer2, setSymbolPlayer }) => {
  return (
    <div className="App containerPlayer py-4">
      <h1 className="text-center text-info">Tic Tac Toe</h1>
      <h2 className="text-center text-danger">Pick A Weapon</h2>
      <div className="gameSetting bg-warning-subtle p-5">
        <div className="row selector justify-content-center text-center  d-flex">
          <h2>Choose Your Weapon</h2>
          <div className="col-4 justify-content-center">
            {" "}
            <input
              type="text"
              placeholder="Player 1 username"
              className="form-control my-2"
              onChange={(e) => setPlayer1(e.target.value)}
            />
          </div>
          <div className="col-4 align-items-center">
            <input
              type="text"
              placeholder="Player 2 username"
              className="form-control my-2"
              onChange={(e) => setPlayer2(e.target.value)}
            />
          </div>
          <div className=" row btn-group  ">
            <div className="col-2"></div>
            <div className="col-4 mx-auto">
              <button
                className="button btn btn-primary btn-lg fs-2"
                onClick={() => setSymbolPlayer("X")}
              >
                X
              </button>
            </div>
            <div className="col-4 mx-auto">
              <button
                className="button btn btn-info btn-lg fs-2"
                onClick={() => setSymbolPlayer("O")}
              >
                O
              </button>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElegirJugador;
