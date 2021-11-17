import React, { useState } from 'react';
import './popupcard.css'

export default function PopUpCard(props) {
  // props
  const question = props.content.question
  const answer = props.content.answer
  const point = props.content.point
  
  let teams = props.teams

  // state
  const [showAnswers, setShowAnswers] = useState(false);
  const [selectedTeamIndex, setTeamIndex] = useState(-1);

  const toggleShowAnswers = () => {
    setShowAnswers(!showAnswers);
  }

  const onConfirm = (event) => {
    if (event.target.value !== null && event.target.value !== "Select" && selectedTeamIndex !== -1) {
      props.onPointsChange(selectedTeamIndex, point);
    }
    props.onAnswered(parseInt(props.category, 10), parseInt(props.index,10), selectedTeamIndex);
    props.handleClose();
  }

  return (
    <div>
      <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="question-wrapper">
          {question}
        </div>
        <button className="popup-button" onClick={toggleShowAnswers}>Show Answers</button>
        {showAnswers && <div className="answers-wrapper">{answer}</div>}
        <div className="select-team-dropdown">
          <label className="select-team-label-wrapper">
          Select team: 
          <select className="popup-selector" name='team' value={teams.name} onChange={(event) => setTeamIndex(event.target.value)}>
            <option key={-1} value={-1}>No one</option>
            {teams.map((team, teamIndex) => (
              team.name ? <option key={teamIndex} value={team.id}>Team {team.name}</option> : <option key={teamIndex} value={team.id}>Team {teamIndex + 1}</option>
            ))}
          </select>
        </label>
        <button className="popup-button" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
    </div>
  );
}