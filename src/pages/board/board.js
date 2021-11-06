import React, { Component } from 'react';
import GameBoard from '../../components/gameboard/gameboard';
import './board.css';

export default class Board extends Component {
  render() {
    const scoreUnit = this.props.scoreUnit
    const teams = this.props.teams
    const board = this.props.board

    return (
      <div>
        <h1>Board</h1>
        <iframe title="Spotify" src="https://open.spotify.com/embed/playlist/6Vhr7sjnlyomFN6WRTNZJt" width="250" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <GameBoard
          scoreUnit={scoreUnit}
          teams={teams}
          board={board} />
      </div>
    );
  }
}
