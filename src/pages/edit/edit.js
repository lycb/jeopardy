import React, { Component } from 'react';
import EditBoard from '../../components/editboard/editboard';
import './edit.css';

export default class Edit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const board = this.props.board;

    return (
      <div>
        <h1>Edit Game</h1>
        <div className="board-wrapper">
          <EditBoard
            board={board}
            onBoardChange={this.props.onBoardChange} />
        </div>
      </div>
    );
  }
}
