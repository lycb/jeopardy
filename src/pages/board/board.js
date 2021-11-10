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
        <iframe width="400" height="100" src="https://www.youtube.com/embed/videoseries?list=PLql_LE4BdRHebM1tp0-XnsIQxVrpSnrTe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <GameBoard
          scoreUnit={scoreUnit}
          teams={teams}
          board={board} />
      </div>
    );
  }
}
