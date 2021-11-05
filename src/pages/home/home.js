import React, { Component } from 'react';
import SetUpForm from '../../components/setupform/setupform';
import './home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const scoreUnit = this.props.scoreUnit;
    const teams = this.props.teams;

    return (
      <div>
      <h1>Jeopardy</h1>
      <img src="pepedancing.gif" alt="this slowpoke moves"  width="250" />
      <img src="pepedancing.gif" alt="this slowpoke moves"  width="250" />
      <img src="pepedancing.gif" alt="this slowpoke moves"  width="250" />
      <SetUpForm
        scoreUnit={scoreUnit}
        teams={teams}
        onScoreUnitChange={this.props.onScoreUnitChange}
        onTeamsChange={this.props.onTeamsChange} />
      </div>
    );
  }
}
