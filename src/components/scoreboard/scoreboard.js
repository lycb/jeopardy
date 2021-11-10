import React from 'react';
import './scoreboard.css'

export default function ScoreBoard(props) {
  const board = props.board;
  const teams = props.teams;
  const unit = props.scoreUnit;

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
              team.point?<td>{team.point} {unit}</td>:<td>0 {unit}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

      