import React from 'react';
import EditBoard from '../../components/editboard/editboard';
import './edit.css';

function Edit() {
  return (
    <div>
      <h1>Edit Game</h1>
      <div className="board-wrapper">
        <EditBoard />
      </div>
    </div>
  );
}

export default Edit;
