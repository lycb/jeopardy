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
      <h1>Jeopardy</h1>
      <img src="pepedancing.gif" alt="this slowpoke moves"  width="250" />
      <img src="pepedancing.gif" alt="this slowpoke moves"  width="250" />
      <img src="pepedancing.gif" alt="this slowpoke moves"  width="250" />
      <SetUpForm
        scoreUnit={scoreUnit}
        numTeams={numTeams}
        teams={teams}
        onScoreUnitChange={this.props.onScoreUnitChange}
        onNumTeamsChange={this.props.onNumTeamsChange}
        onTeamsChange={this.props.onTeamsChange} />
      </div>
    );
  }
}
