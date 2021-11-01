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

  // TODO https://github.com/lycb/jeopardy/issues/2
  handleSubmit() {
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
    return (
      <div className="board-wrapper">
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <div className="category">
            <h2>Category 1</h2>
            <div className="form-section">
              <label htmlFor="category1_name">
              Category Name:
                <input type="text" id="category1_name" onChange={this.handleChange(0, 0, "category_name")} value={this.state.board[0][0].category_name} />
              </label>
            </div>            

            <div className="form-section">
              <label>
              100 Points Question:
                <input type="text" onChange={this.handleChange(0, 1, "question")} value={this.state.board[0][1].question} />
              </label>
              <label>
              100 Points Answer:
                <input type="text" onChange={this.handleChange(0, 1, "answer")} value={this.state.board[0][1].answer} />
              </label>
            </div>

            <div className="form-section">
              <label>
              200 Points Question:
                <input type="text" onChange={this.handleChange(0, 2, "question")} value={this.state.board[0][2].question} />
              </label>
              <label>
              200 Points Answer:
                <input type="text" onChange={this.handleChange(0, 2, "answer")} value={this.state.board[0][2].answer} />
              </label>
            </div>

            <div className="form-section">
              <label>
              300 Points Question:
                <input type="text" onChange={this.handleChange(0, 3, "question")} value={this.state.board[0][3].question} />
              </label>
              <label>
              300 Points Answer:
                <input type="text" onChange={this.handleChange(0, 3, "answer")} value={this.state.board[0][3].answer} />
              </label>
            </div>

            <div className="form-section">
              <label>
              400 Points Question:
                <input type="text" onChange={this.handleChange(0, 4, "question")} value={this.state.board[0][4].question} />
              </label>
              <label>
              400 Points Answer:
                <input type="text" onChange={this.handleChange(0, 4, "answer")} value={this.state.board[0][4].answer} />
              </label>
            </div>

            <div className="form-section">
              <label>
              500 Points Question:
                <input type="text" onChange={this.handleChange(0, 5, "question")} value={this.state.board[0][5].question} />
              </label>
              <label>
              500 Points Answer:
                <input type="text" onChange={this.handleChange(0, 5, "answer")} value={this.state.board[0][5].answer} />
              </label>
            </div>

            <div className="form-section">
              <label>
              600 Points Question:
                <input type="text" onChange={this.handleChange(0, 6, "question")} value={this.state.board[0][6].question} />
              </label>
              <label>
              600 Points Answer:
                <input type="text" onChange={this.handleChange(0, 6, "answer")} value={this.state.board[0][6].answer} />
              </label>
            </div>
          </div>

          <div className="category">
            <h2>Category 2</h2>
            <div className="form-section">
              <label htmlFor="category1_name">
              Category Name:
                <input type="text" id="category1_name" onChange={this.handleChange(1, 0, "category_name")} value={this.state.board[1][0].category_name} />
              </label>
            </div>            

            <div className="form-section">
              <label>
              100 Points Question:
                <input type="text" onChange={this.handleChange(1, 1, "question")} value={this.state.board[1][1].question} />
              </label>
              <label>
              100 Points Answer:
                <input type="text" onChange={this.handleChange(1, 1, "answer")} value={this.state.board[1][1].answer} />
              </label>
            </div>

            <div className="form-section">
              <label>
              200 Points Question:
                <input type="text" onChange={this.handleChange(1, 2, "question")} value={this.state.board[1][2].question} />
              </label>
              <label>
              200 Points Answer:
                <input type="text" onChange={this.handleChange(1, 2, "answer")} value={this.state.board[1][2].answer} />
              </label>
            </div>

            <div className="form-section">
              <label>
              300 Points Question:
                <input type="text" onChange={this.handleChange(1, 3, "question")} value={this.state.board[1][3].question} />
              </label>
              <label>
              300 Points Answer:
                <input type="text" onChange={this.handleChange(1, 3, "answer")} value={this.state.board[1][3].answer} />
              </label>
            </div>

            <div className="form-section">
              <label>
              400 Points Question:
                <input type="text" onChange={this.handleChange(1, 4, "question")} value={this.state.board[1][4].question} />
              </label>
              <label>
              400 Points Answer:
                <input type="text" onChange={this.handleChange(1, 4, "answer")} value={this.state.board[1][4].answer} />
              </label>
            </div>

            <div className="form-section">
              <label>
              500 Points Question:
                <input type="text" onChange={this.handleChange(1, 5, "question")} value={this.state.board[1][5].question} />
              </label>
              <label>
              500 Points Answer:
                <input type="text" onChange={this.handleChange(1, 5, "answer")} value={this.state.board[1][5].answer} />
              </label>
            </div>

            <div className="form-section">
              <label>
              600 Points Question:
                <input type="text" onChange={this.handleChange(1, 6, "question")} value={this.state.board[1][6].question} />
              </label>
              <label>
              600 Points Answer:
                <input type="text" onChange={this.handleChange(1, 6, "answer")} value={this.state.board[1][6].answer} />
              </label>
            </div>
          </div>
          <input type="submit"/>
        </form>
      </div>
    )};
}

