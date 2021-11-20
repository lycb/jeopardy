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
  const [correctTeamIndex, setCorrectTeamIndex] = useState(-1);
  const [incorrectTeamArray, setIncorrectTeamArray] = useState([]);

  const toggleShowAnswers = () => {
    setShowAnswers(!showAnswers);
  }

  const onConfirm = (event) => {
    props.onPointsChange(correctTeamIndex, incorrectTeamArray, point);
    props.onAnswered(parseInt(props.category, 10), parseInt(props.index,10), correctTeamIndex);
    props.handleClose();
  }

  const onIncorrectChecked = (event) => {
    let currentArray = incorrectTeamArray;
    let check = event.target.checked;
    let value = parseInt(event.target.value, 10);
    let index;
    if (check) {
      currentArray.push(value);
    } else {
      index = currentArray.indexOf(value)
      currentArray.splice(index, 1)
    }
    setIncorrectTeamArray(currentArray)
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
            Correct: 
            <select className="popup-selector" name='team' value={teams.name} onChange={(event) => setCorrectTeamIndex(event.target.value)}>
              <option key={-1} value={-1}>No one</option>
              {teams.map((team, teamIndex) => (
                team.name ? <option key={teamIndex} value={team.id}>Team {team.name}</option> : <option key={teamIndex} value={team.id}>Team {teamIndex + 1}</option>
              ))}
            </select>
            </label>

            <label className="select-team-label-wrapper">
              Incorrect: 
              {teams.map((team, teamIndex) => (
                 <label key={teamIndex}>
                 {team.name ? <span>Team {team.name}</span> : <span>Team {teamIndex + 1}</span>}
                 <input
                   className="popup-checkbox"
                   name={teamIndex}
                   onChange={onIncorrectChecked}
                   type="checkbox"
                   value={teamIndex}
                 />
                 </label>
              ))}
            </label>
          </div>
          <button className="popup-button" onClick={onConfirm}>Confirm</button>

        </div>
      </div>
    </div>
  );
}