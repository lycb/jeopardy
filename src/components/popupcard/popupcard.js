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
      props.handleClose();
    }
  }

  return (
    <div>
      <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div className="question-wrapper">
          {question}
        </div>
        <button onClick={toggleShowAnswers}>Show Answers</button>
        {showAnswers && <div className="answers-wrapper">{answer}</div>}
        <div className="select-team-dropdown">
          <label>
          Select team: 
          <select name='team' value={teams.name} onChange={(event) => setTeamIndex(event.target.value)}>
            <option key={-1} value={null}>Select</option>
            {teams.map((team, teamIndex) => (
              <option key={teamIndex} value={team.id}>Team {team.name}</option>
            ))}
          </select>
        </label>
        <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
    </div>
  );
}