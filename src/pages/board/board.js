import React from 'react';
import GameBoard from '../../components/gameboard/gameboard';
import './board.css';

function Board() {
  return (
    <div>
      <h1>Board</h1>
      <iframe src="coffin.mp3" title="coffin music" allow="autoplay;loop" id="iframeAudio" className="mp3Player"></iframe>
      <GameBoard />
    </div>
  );
}

export default Board;
