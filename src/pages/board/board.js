import React, { Component } from 'react';
import GameBoard from '../../components/gameboard/gameboard';
import ScoreBoard from '../../components/scoreboard/scoreboard';
import './board.css';

export default class Board extends Component {
  render() {
    const scoreUnit = this.props.scoreUnit
    const teams = this.props.teams
    const board = this.props.board

    return (
      <div>
        <h1>Board</h1>
        <iframe width="400" height="100" src="https://www.youtube.com/embed/videoseries?list=PLql_LE4BdRHebM1tp0-XnsIQxVrpSnrTe&autoplay=1&loop=1&mute=1" allow="autoplay" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <GameBoard
          scoreUnit={scoreUnit}
          teams={teams}
          board={board} 
          onAnswered={this.props.onAnswered}/>
        <ScoreBoard
          scoreUnit={scoreUnit}
          teams={teams}
          board={board} />
      </div>
    );
  }
}
