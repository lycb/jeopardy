import React, { Component } from 'react';
import GameBoard from '../../components/gameboard/gameboard';
import ScoreBoard from '../../components/scoreboard/scoreboard';
import './board.css';

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "turnIndex": 0
    }

    this.onAnswered = this.onAnswered.bind(this);
  }

  onAnswered(category, index, teamindex) {
    if (parseInt(teamindex,10) !== -1) {
      this.setState({ turnIndex: parseInt(teamindex,10) });
    }
    
    this.props.onAnswered(category, index);
  }

  render() {
    const scoreUnit = this.props.scoreUnit
    const teams = this.props.teams
    const board = this.props.board

    return (
      <div>
        <div className="top-board">
          {teams.length > 0 ? <h1 className="turn-indicator">It's team {teams[this.state.turnIndex].name ? teams[this.state.turnIndex].name : this.state.turnIndex + 1}'s turn!</h1> : null}
          <ScoreBoard
            scoreUnit={scoreUnit}
            teams={teams}/>
        </div>
        <GameBoard
          scoreUnit={scoreUnit}
          teams={teams}
          board={board} 
          onAnswered={this.onAnswered}
          onPointsChange={this.props.onPointsChange}/>
        <div className="bot-board">
          <iframe width="400" height="100" src="https://www.youtube.com/embed/videoseries?list=PLql_LE4BdRHebM1tp0-XnsIQxVrpSnrTe&autoplay=1&loop=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}
