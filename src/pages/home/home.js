import React, { Component } from 'react';
import SetUpForm from '../../components/setupform/setupform';
import './home.css';

export default class Home extends Component {
  render() {
    const scoreUnit = this.props.scoreUnit;
    const numTeams = this.props.numTeams;
    const teams = this.props.teams;

    return (
      <div>
      <img src="logo.svg" alt="this slowpoke moves"  width="750" />
      <SetUpForm
        scoreUnit={scoreUnit}
        numTeams={numTeams}
        teams={teams}
        onScoreUnitChange={this.props.onScoreUnitChange}
        onNumTeamsChange={this.props.onNumTeamsChange}
        onBoardUpload={this.props.onBoardUpload}
        onTeamsChange={this.props.onTeamsChange} />
      </div>
    );
  }
}
