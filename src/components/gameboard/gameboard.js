import React, { Component } from 'react';
import './gameboard.css'

export default class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e, question, category, index) {
    return this.props.markQuestionResolved(category, index);
  }
  render() {
    const board = this.props.board;

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
                    question.point ? <button key={questionIndex} className="question-button" onClick={(event) => this.handleOnClick(event, question, categoryIndex, questionIndex)}>{question.point}</button> : null
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
}

      