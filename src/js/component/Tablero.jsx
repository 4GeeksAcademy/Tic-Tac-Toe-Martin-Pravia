import React from "react";

const Tablero = () => {
  return (
    <div className="container" id="main">
        <div className=" row text-center" >
      <span id="turn">Tic Tac Toe in React.js</span>
      <div className="row justify-content-center align-items-center">
        <div className="col-3 ">
      <button type="button" class="btn btn-success  " id="replay">Play again</button>
      </div>
      </div>
      </div>
      <div className="row text-center justify-content-center align-items-center">
        <div className="row justify-content-center align-items-center">
      <div className="box" id="box1">m</div>
      <div className="box" id="box2">m</div>
      <div className="box" id="box3">m</div>
      </div>
      <div className="row justify-content-center align-items-center">
      <div className="box" id="box4">m</div>
      <div className="box" id="box5">m</div>
      <div className="box" id="box6">m</div>
      </div>
      <div className="row justify-content-center align-items-center">
      <div className="box" id="box7">m</div>
      <div className="box" id="box8">m</div>
      <div className="box" id="box9">m</div>
      </div>
    </div>
    </div>
  );
};

export default Tablero;
