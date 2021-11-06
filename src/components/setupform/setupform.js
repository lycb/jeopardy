import React, { Component } from 'react';

export default class SetUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "numTeams": this.props.teams.length
    };

    this.handleScoreUnitChange = this.handleScoreUnitChange.bind(this);
    this.handleTeamsChange = this.handleTeamsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePropertyChange = this.handlePropertyChange.bind(this);
  }

  handleScoreUnitChange(event) {
    this.props.handleScoreUnitChange(event)
  }

  handleTeamsChange(index) {
    return this.props.onTeamsChange(index)
  }

  handlePropertyChange(event) {
    this.setState(prevState => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      return { [name]: value }
    });
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
    const numTeams = this.state.numTeams;

    return (
      <form id='setUpForm' name='setUpForm' onSubmit={this.handleSubmit}>
        <div className='form-select-component-wrapper'>
          <label>
            Number of Teams:
            <select name='numTeams' value={numTeams} onChange={this.handlePropertyChange}>
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