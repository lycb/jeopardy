import React from 'react';
import './gameboard.css'

export default function GameBoard(props) {
  const board = props.board;

  const handleOnClick = (e, question) => {
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
              {board.map((points, pointsIndex) => (
                <td>
                {points.map((question, questionIndex) => (
                  question.point ? <button className="question-button" onClick={(event) => handleOnClick(event, question)}>{question.point}</button> : null
                ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

      