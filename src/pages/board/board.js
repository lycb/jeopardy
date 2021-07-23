import React from 'react';
import './board.css';

function Board() {
  return (
    <div>
      <h1>Board</h1>
      <audio controls autoplay>
        <iframe src="coffin.mp3" allow="autoplay" id="iframeAudio"></iframe> 
      Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Board;
