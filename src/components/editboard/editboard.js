import React, { Component } from 'react';
import './editboard.css'
import {board_obj} from '../../board_object.js'

export default class EditBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "board": [
        // Category 1 board [0]
        [
          {  
            "id": 1,
            "category_name": ""
          },
          {
            "point": 100,
            "question": "",
            "answer": ""
          },
          {
            "point": 200,
            "question": "",
            "answer": ""
          },
          {
            "point": 300,
            "question": "",
            "answer": ""
          },
          {
            "point": 400,
            "question": "",
            "answer": ""
          },
          {
            "point": 500,
            "question": "",
            "answer": ""
          },
          {
            "point": 600,
            "question": "",
            "answer": ""
          }
        ],
        // Category 2 board [1]
        [
          {
            "id": 2,
            "category_name": ""
          },
          {
            "point": 100,
            "question": "",
            "answer": ""
          },
          {
            "point": 200,
            "question": "",
            "answer": ""
          },
          {
            "point": 300,
            "question": "",
            "answer": ""
          },
          {
            "point": 400,
            "question": "",
            "answer": ""
          },
          {
            "point": 500,
            "question": "",
            "answer": ""
          },
          {
            "point": 600,
            "question": "",
            "answer": ""
          }
        ],
        // Category 3 board [2]
        [
          {
            "id": 3,
            "category_name": ""
          },
          {
            "point": 100,
            "question": "",
            "answer": ""
          },
          {
            "point": 200,
            "question": "",
            "answer": ""
          },
          {
            "point": 300,
            "question": "",
            "answer": ""
          },
          {
            "point": 400,
            "question": "",
            "answer": ""
          },
          {
            "point": 500,
            "question": "",
            "answer": ""
          },
          {
            "point": 600,
            "question": "",
            "answer": ""
          }
        ],
        // Category 4 board [3]
        [
          {
            "id": 4,
            "category_name": ""
          },
          {
            "point": 100,
            "question": "",
            "answer": ""
          },
          {
            "point": 200,
            "question": "",
            "answer": ""
          },
          {
            "point": 300,
            "question": "",
            "answer": ""
          },
          {
            "point": 400,
            "question": "",
            "answer": ""
          },
          {
            "point": 500,
            "question": "",
            "answer": ""
          },
          {
            "point": 600,
            "question": "",
            "answer": ""
          }
        ],
        // Category 5 board [4]
        [
          {
            "id": 5,
            "category_name": ""
          },
          {
            "point": 100,
            "question": "",
            "answer": ""
          },
          {
            "point": 200,
            "question": "",
            "answer": ""
          },
          {
            "point": 300,
            "question": "",
            "answer": ""
          },
          {
            "point": 400,
            "question": "",
            "answer": ""
          },
          {
            "point": 500,
            "question": "",
            "answer": ""
          },
          {
            "point": 600,
            "question": "",
            "answer": ""
          }
        ],
        // Category 6 board [5]
        [
          {
            "id": 6,
            "category_name": ""
          },
          {
            "point": 100,
            "question": "",
            "answer": ""
          },
          {
            "point": 200,
            "question": "",
            "answer": ""
          },
          {
            "point": 300,
            "question": "",
            "answer": ""
          },
          {
            "point": 400,
            "question": "",
            "answer": ""
          },
          {
            "point": 500,
            "question": "",
            "answer": ""
          },
          {
            "point": 600,
            "question": "",
            "answer": ""
          }
        ],
      ],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  //  https://stackoverflow.com/questions/52235160/how-to-setstate-multiple-states/52235312
  handleChange(category, index, name) {
    return event => {
      this.setState(prevState => {
        const board = [...prevState.board];
        board[category][index] = { ...board[category][index], [name]: event.target.value }
        return { board };
      })
    };
  }

  render() {
    const board = this.state.board

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

