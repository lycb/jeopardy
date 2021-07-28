import React, { Component } from 'react';
import './gameboard.css'

const Button = ({ onClick, score, id }) => (
  <div>
    <button className="question-button" id={id} onClick={onClick}>{score}</button>
  </div>
)

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
    };
  }

  handleOnClick(e) {
    e.preventDefault();
    let questions = e.target.id.split("-");
    
    return (<h1>{{questions}}</h1>)
    // this.displayQuestion(questions[0], questions[1]);
  }

  
  // TOOD do a pop up
  displayQuestion(category, row) {
  }

  render() {
    return (
      <div className="board-wrapper">
        <table className="board-table">
          <thead>
            <tr>
              <th>Category 1</th>
              <th>Category 2</th>
              <th>Category 3</th>
              <th>Category 4</th>
              <th>Category 5</th>
              <th>Category 6</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Button id="1-1" onClick={this.handleOnClick} score="100"/></td>
              <td><Button id="2-1" onClick={this.handleOnClick} score="100"/></td>
              <td><Button id="3-1" onClick={this.handleOnClick} score="100"/></td>
              <td><Button id="4-1" onClick={this.handleOnClick} score="100"/></td>
              <td><Button id="5-1" onClick={this.handleOnClick} score="100"/></td>
              <td><Button id="6-1" onClick={this.handleOnClick} score="100"/></td>
            </tr>
            <tr>
              <td><Button id="1-2" onClick={this.handleOnClick} score="200"/></td>
              <td><Button id="2-2" onClick={this.handleOnClick} score="200"/></td>
              <td><Button id="3-2" onClick={this.handleOnClick} score="200"/></td>
              <td><Button id="4-2" onClick={this.handleOnClick} score="200"/></td>
              <td><Button id="5-2" onClick={this.handleOnClick} score="200"/></td>
              <td><Button id="6-2" onClick={this.handleOnClick} score="200"/></td>
            </tr>
            <tr>
              <td><Button id="1-3" onClick={this.handleOnClick} score="300"/></td>
              <td><Button id="2-3" onClick={this.handleOnClick} score="300"/></td>
              <td><Button id="3-3" onClick={this.handleOnClick} score="300"/></td>
              <td><Button id="4-3" onClick={this.handleOnClick} score="300"/></td>
              <td><Button id="5-3" onClick={this.handleOnClick} score="300"/></td>
              <td><Button id="6-3" onClick={this.handleOnClick} score="300"/></td>
            </tr>
            <tr>
              <td><Button id="1-4" onClick={this.handleOnClick} score="400"/></td>
              <td><Button id="2-4" onClick={this.handleOnClick} score="400"/></td>
              <td><Button id="3-4" onClick={this.handleOnClick} score="400"/></td>
              <td><Button id="4-4" onClick={this.handleOnClick} score="400"/></td>
              <td><Button id="5-4" onClick={this.handleOnClick} score="400"/></td>
              <td><Button id="6-4" onClick={this.handleOnClick} score="400"/></td>
            </tr>
            <tr>
              <td><Button id="1-5" onClick={this.handleOnClick} score="500"/></td>
              <td><Button id="2-5" onClick={this.handleOnClick} score="500"/></td>
              <td><Button id="3-5" onClick={this.handleOnClick} score="500"/></td>
              <td><Button id="4-5" onClick={this.handleOnClick} score="500"/></td>
              <td><Button id="5-5" onClick={this.handleOnClick} score="500"/></td>
              <td><Button id="6-5" onClick={this.handleOnClick} score="500"/></td>
            </tr>
            <tr>
              <td><Button id="1-6" onClick={this.handleOnClick} score="600"/></td>
              <td><Button id="2-6" onClick={this.handleOnClick} score="600"/></td>
              <td><Button id="3-6" onClick={this.handleOnClick} score="600"/></td>
              <td><Button id="4-6" onClick={this.handleOnClick} score="600"/></td>
              <td><Button id="5-6" onClick={this.handleOnClick} score="600"/></td>
              <td><Button id="6-6" onClick={this.handleOnClick} score="600"/></td>
            </tr>
          </tbody>
        </table>
      </div>
  )};
}

      