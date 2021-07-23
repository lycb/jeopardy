import React from 'react';
import './board.css';

function Board() {
  return (
    <div>
      <h1>Board</h1>
      <iframe src="coffin.mp3" allow="autoplay" id="iframeAudio" className="mp3Player"></iframe> 
    </div>
  );
}

export default Board;
