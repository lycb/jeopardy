import React, { Component } from 'react';

export default class SetUpForm extends Component {
  constructor(props) {
    super(props);

    this.handleScoreUnitChange = this.handleScoreUnitChange.bind(this);
    this.handleTeamsChange = this.handleTeamsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNumTeamsChange = this.handleNumTeamsChange.bind(this);
  }

  handleScoreUnitChange(event) {
    this.props.onScoreUnitChange(event)
  }

  handleTeamsChange(index) {
    return this.props.onTeamsChange(index)
  }

  handleNumTeamsChange(event) {
    this.props.onNumTeamsChange(event)
  }

  handleSubmit(event) {
    event.preventDefault();
    let json = JSON.stringify(this.state);
  }

  handleUpload(file) {
    // use JSON.parse(JSON string)
  }
  render() {
    const scoreUnit = this.props.scoreUnit;
    const teams = this.props.teams;
    const numTeams = this.props.numTeams;

    return (
      <form id='setUpForm' name='setUpForm' onSubmit={this.handleSubmit}>
        <div className='form-select-component-wrapper'>
          <label>
            Number of Teams:
            <select name='numTeams' value={numTeams} onChange={this.handleNumTeamsChange}>
              <option value="0">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>

          <div className="team-name-wrapper">
            <div className="team-team-boxes">
              {[...Array(parseInt(numTeams))].map((value, teamIndex) => (
                <label>
                  Team {teamIndex+1} Name:
                  <input type="text" name={"team" + teamIndex+1} onChange={this.handleTeamsChange(teamIndex)} value={teams[teamIndex] ? teams[teamIndex] : ""} />
                </label>
              ))}
            </div>
          </div>
        </div>

         <div className='form-select-component-wrapper'>
        <label>
          Score Unit:
          <select name='scoreUnit' value={scoreUnit} onChange={this.handleScoreUnitChange}>
            <option value="money">$$$</option>
            <option value="points">Points</option>
          </select>
        </label>
        </div>
        <button type="submit">Play</button>
      </form>
    );
  }
}