import React, { useState } from 'react';
import './gameboard.css'

import PopUpCard from '../popupcard/popupcard';

export default function GameBoard(props) {
  const board = props.board;
  const teams = props.teams;

  const [isOpen, setIsOpen] = useState(false);
  const [questionObj, setQuestionObj] = useState("");
  const [questionCategory, setCategory] = useState("");
  const [questionIndex, setIndex] = useState("");
  
  const handleOnClick = (e, question, category, index) => {
    togglePopup();
    setCategory(category);
    setIndex(index);
    setQuestionObj(question);
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="board-wrapper">
      <table className="board-table">
        <thead>
          <tr>
            {board.map((category, categoryIndex) => (
              category[0].category_name ? <th key={categoryIndex}>{category[0].category_name}</th> : <th key={categoryIndex}>Category {categoryIndex+1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[Array(6)].map((row, rowIndex) => (
            <tr key={rowIndex} >
              {board.map((category, categoryIndex) => (
                <td key={categoryIndex}>
                {category.map((question, questionIndex) => (
                  question.point ? <button key={questionIndex} className={`question-button${question.resolved ? "" : "-active"}`} onClick={(event) => handleOnClick(event, question, categoryIndex, questionIndex)}>{question.point}</button> : null
                ))}
                {isOpen && <PopUpCard
                  content={questionObj}
                  category={questionCategory}
                  index={questionIndex}
                  teams={teams}
                  handleClose={togglePopup}
                  onPointsChange={props.onPointsChange}
                  onAnswered={props.onAnswered}
                />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

      