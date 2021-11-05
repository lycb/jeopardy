import React, { Component } from 'react';
import './editboard.css'
import {board_obj} from '../../board_object.js'

export default class EditBoard extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // TOOD https://github.com/lycb/jeopardy/issues/10
  displayQuestion(category, row) {
  }

  // Download board as JSON file
  handleSubmit(e) {
    e.preventDefault()
    const board = this.props.board
    const a = document.createElement('a');
    const file = new Blob([JSON.stringify(board)], { type: 'application/json;charset=utf-8'});
    a.href = URL.createObjectURL(file);
    a.download = 'jeopardy.json';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click()
    document.body.removeChild(a)
  }

  handleChange(category, index, name) {
    return this.props.onBoardChange(category, index, name)
  }

  render() {
    const board = this.props.board

    return (
      <div className="board-wrapper">
        <form className="edit-form" onSubmit={this.handleSubmit}>
          {/**
           * Loop over the board array - each "category" is one of the inner nested arrays
          */}
          {board.map((category, categoryIndex) => (
            <div className="category">
              <h2>Category {category[0].id}</h2>
              <div className="form-section">
                <label htmlFor={"category" + category[0].id + "_name"}>
                  Category Name:
                  <input type="text" id={"category" + category[0].id + "_name"} onChange={this.handleChange(categoryIndex, 0, "category_name")} value={category[0].category_name} />
                </label>
              </div>

              {/**
               * Loop over an array containing the 5 different question values to build the question-answer inputs
               * pointsIndex+1 accounts for the missing category_name item when you compare this points array to the original board category array
              */}
              {["100", "200", "300", "400", "500"].map((points, pointsIndex) => (
                <div className="form-section">
                  <label>
                    {points + " Points Question:"}
                    <input type="text" onChange={this.handleChange(categoryIndex, pointsIndex+1, "question")} value={category[pointsIndex+1].question} />
                  </label>
                  <label>
                    {points + " Points Answer:"}
                    <input type="text" onChange={this.handleChange(categoryIndex, pointsIndex+1, "answer")} value={category[pointsIndex+1].answer} />
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button type="submit">Download Board</button>
        </form>
      </div>
    )};
}

