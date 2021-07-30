import React from 'react';
import GameBoard from '../../components/gameboard/gameboard';
import './board.css';

function Board() {
  return (
    <div>
      <h1>Board</h1>
      <iframe className="musicPlayer" src="https://www.youtube.com/embed/j9V78UbdzWI?loop=1&playlist=j9V78UbdzWI&autoplay=1" title="Coffin Dance Song"></iframe>
      <GameBoard />
    </div>
  );
}

export default Board;
