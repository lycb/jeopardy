import React, { Component } from 'react';

export default class SetUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "numTeams": '0',
      "scoreUnit": 'money',
      "teams": []
    };

    this.handleChangeProperty = this.handleChangeProperty.bind(this);
    this.handleChangeArray = this.handleChangeArray.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeProperty(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleChangeArray(index) {
    // const target = event.target;
    // const value = target.value;

    // this.setState({
    //   teams: [ ...this.state.teams, value ]
    // });

    // return this.state.teams;

    return event => {
      let teams = [...this.state.teams];
      let team = {...teams[index]};
      team = event.target.value;
      teams[index] = team;
      this.setState({teams});
    };
  }

  handleSubmit(event) {
    event.preventDefault();    
    let json = JSON.stringify(this.state);
  }
  
  handleUpload(file) {
    // use JSON.parse(JSON string)
  }
  render() {
    return (
      <form id='setUpForm' name='setUpForm' onSubmit={this.handleSubmit}>
        <div className='form-select-component-wrapper'>
        <label>
          Number of Teams:
          <select name='numTeams' value={this.state.numTeams} onChange={this.handleChangeProperty}>
            <option value="0">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>

        <div className="team-name-wrapper">
          {
            this.state.numTeams === "1" ? (
              <div className="team-team-boxes">
                <label>
                  Team 1 Name:
                  <input type="text" name="team1" onChange={this.handleChangeArray(0)} />
                </label>
              </div>
            ) : this.state.numTeams === "2" ? (
              <div className="team-team-boxes">
                <label>
                  Team 1 Name:
                  <input type="text" name="team1" onChange={this.handleChangeArray(0)} />
                </label>
                <label>
                  Team 2 Name:
                  <input type="text" name="team2" onChange={this.handleChangeArray(1)} />
                </label>
              </div>
            ) : this.state.numTeams === "3" ? (
              <div className="team-team-boxes">
                <label>
                  Team 1 Name:
                  <input type="text" name="team1" onChange={this.handleChangeArray(0)} />
                </label>
                <label>
                  Team 2 Name:
                  <input type="text" name="team2" onChange={this.handleChangeArray(1)} />
                </label>
                <label>
                  Team 3 Name:
                  <input type="text" name="team3" onChange={this.handleChangeArray(2)} />
                </label>
              </div>
             ) : this.state.numTeams === "4" ? (
              <div className="team-team-boxes">
                <label>
                  Team 1 Name:
                  <input type="text" name="team1" onChange={this.handleChangeArray(0)} />
                </label>
                <label>
                  Team 2 Name:
                  <input type="text" name="team2" onChange={this.handleChangeArray(1)} />
                </label>
                <label>
                  Team 3 Name:
                  <input type="text" name="team3" onChange={this.handleChangeArray(2)} />
                </label>
                <label>
                  Team 4 Name:
                  <input type="text" name="team4" onChange={this.handleChangeArray(3)} />
                </label>
              </div>
            ) : null
          }
        </div>
        </div>

         <div className='form-select-component-wrapper'>
        <label>
          Score Unit:
          <select name='scoreUnit' value={this.state.scoreUnit} onChange={this.handleChangeProperty}>
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