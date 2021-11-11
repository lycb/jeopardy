import React, { Component } from 'react';
import './scoreboard.css'

export default class ScoreBoard extends Component{
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    for (let i = 0; i < this.props.teams.length; i++) {
      if (this.props.teams[i].points !== nextProps.teams[i].points) {
        console.log("invoked")
        return true;
      }
    }
    return false;
  }

  render () {
    const teams = this.props.teams;
    console.log(teams)
    const unit = this.props.scoreUnit;

    return (
      <div className="scoreboard-wrapper">
        <table className="scoreboard-table">
          <thead className="scoreboard-head">
            <tr>
              {teams.map((team, teamIndex) => (
                <th>Team {team.name}</th>
              ))}
            </tr>
          </thead>
          <tbody className="scoreboard-body">
            <tr>
              {teams.map((team, teamIndex) => (
                team.points ?<td>{team.points} {unit}</td>:<td>0 {unit}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
}

      