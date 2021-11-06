import React from 'react';
import { useHistory } from "react-router-dom";

export default function SetUpForm(props) {
  // props
  const scoreUnit = props.scoreUnit;
  const teams = props.teams;
  const numTeams = props.numTeams;

  // history hook
  const history = useHistory();

  const handleScoreUnitChange = (event) => {
    props.onScoreUnitChange(event)
  }

  const handleTeamsChange = (index) => {
    return props.onTeamsChange(index)
  }

  const handleNumTeamsChange = (event) => {
    props.onNumTeamsChange(event)
  }

  const handlePlay = (event) => {
    event.preventDefault();
    history.push('/board');
  }

  const onFileSelect = (event) => {
    let file = event.target.files[0];

    if (file.type !== "application/json") {
      alert("Please upload a JSON file");
      event.target.value = null
    }

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      const JSONtext = (e.target.result)
      const board = JSON.parse(JSONtext);
    }
    fileReader.readAsText(file)
  }
    
  return (
    <div>
      <div className='form-select-component-wrapper'>
        <label>
          Number of Teams:
          <select name='numTeams' value={numTeams} onChange={handleNumTeamsChange}>
            <option value="0">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>

        <div className="team-name-wrapper">
          <div className="team-team-boxes">
            {[...Array(parseInt(numTeams, 10))].map((value, teamIndex) => (
              <label key={teamIndex}>
                Team {teamIndex+1} Name:
                <input type="text" name={"team" + teamIndex+1} onChange={handleTeamsChange(teamIndex)} value={teams[teamIndex] ? teams[teamIndex] : ""}/>
              </label>
            ))}
          </div>
        </div>
      </div>

       <div className='form-select-component-wrapper'>
      <label>
        Score Unit:
        <select name='scoreUnit' value={scoreUnit} onChange={handleScoreUnitChange}>
          <option value="money">$$$</option>
          <option value="points">Points</option>
        </select>
      </label>
      </div>
      <input  className="file-upload-input" type="file" id="file-input" onChange={onFileSelect} />
      <button onClick={handlePlay}>Play</button>
    </div>
  );
}