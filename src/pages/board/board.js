import React from 'react';
import GameBoard from '../../components/gameboard/gameboard';
import './board.css';

function Board() {
  return (
    <div>
      <h1>Board</h1>
      <iframe src="https://open.spotify.com/embed/playlist/6Vhr7sjnlyomFN6WRTNZJt" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <GameBoard />
    </div>
  );
}

export default Board;
