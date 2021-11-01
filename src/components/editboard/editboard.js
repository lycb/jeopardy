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
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 200,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 300,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 400,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 500,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 600,
            "question": "question",
            "answer": "answer"
          }
        ],
        // Category 2 board [1]
        [
          {
            "id": 2,
            "category_name": "name"
          },
          {
            "point": 100,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 200,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 300,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 400,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 500,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 600,
            "question": "question",
            "answer": "answer"
          }
        ],
        // Category 3 board [2]
        [
          {
            "id": 3,
            "category_name": "name"
          },
          {
            "point": 100,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 200,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 300,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 400,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 500,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 600,
            "question": "question",
            "answer": "answer"
          }
        ],
        // Category 4 board [3]
        [
          {
            "id": 4,
            "category_name": "name"
          },
          {
            "point": 100,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 200,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 300,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 400,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 500,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 600,
            "question": "question",
            "answer": "answer"
          }
        ],
        // Category 5 board [4]
        [
          {
            "id": 5,
            "category_name": "name"
          },
          {
            "point": 100,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 200,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 300,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 400,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 500,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 600,
            "question": "question",
            "answer": "answer"
          }
        ],
        // Category 6 board [5]
        [
          {
            "id": 6,
            "category_name": "name"
          },
          {
            "point": 100,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 200,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 300,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 400,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 500,
            "question": "question",
            "answer": "answer"
          },
          {
            "point": 600,
            "question": "question",
            "answer": "answer"
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
    console.log(this.state)
  }

  //  https://stackoverflow.com/questions/52235160/how-to-setstate-multiple-states/52235312
  handleChange(category, index, name) {
    return event => {
      this.setState(({ board }) => ({
        board: { ...board, [category]: [...this.state.board[category][index], event.target.value }]
      }));
      console.log(this.state)
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
      <input type="text" id="category1_name" onChange={this.handleChange(0, 0, "[0][0].category_name")} value={this.state.board[0][0].category_name} />
      </label>
      </div>            

      <div className="form-section">
      <label>
      100 Points Question:
      <input type="text" value={this.state.category1_100_q} onChange={this.handleChange("category1_100_q")} />
      </label>
      <label>
      100 Points Answer:
      <input type="text" value={this.state.category1_100_a} onChange={this.handleChange("category1_100_a")} />
      </label>
      </div>

      <div className="form-section">
      <label>
      200 Points Question:
      <input type="text" value={this.state.category1_200_q} onChange={this.handleChange("category1_200_q")} />
      </label>
      <label>
      200 Points Answer:
      <input type="text" value={this.state.category1_200_a} onChange={this.handleChange("category1_200_a")} />
      </label>
      </div>

      <div className="form-section">
      <label>
      300 Points Question:
      <input type="text" value={this.state.category1_300_q} onChange={this.handleChange("category1_300_q")} />
      </label>
      <label>
      300 Points Answer:
      <input type="text" value={this.state.category1_300_a} onChange={this.handleChange("category1_300_a")} />
      </label>
      </div>

      <div className="form-section">
      <label>
      400 Points Question:
      <input type="text" value={this.state.category1_400_q} onChange={this.handleChange("category1_400_q")} />
      </label>
      <label>
      400 Points Answer:
      <input type="text" value={this.state.category1_400_a} onChange={this.handleChange("category1_400_a")} />
      </label>
      </div>

      <div className="form-section">
      <label>
      500 Points Question:
      <input type="text" value={this.state.category1_500_q} onChange={this.handleChange("category1_500_q")} />
      </label>
      <label>
      500 Points Answer:
      <input type="text" value={this.state.category1_500_a} onChange={this.handleChange("category1_500_a")} />
      </label>
      </div>

      <div className="form-section">
      <label>
      600 Points Question:
      <input type="text" value={this.state.category1_600_q} onChange={this.handleChange("category1_600_q")} />
      </label>
      <label>
      600 Points Answer:
      <input type="text" value={this.state.category1_600_a} onChange={this.handleChange("category1_600_a")} />
      </label>
      </div>
      </div>

          {/*<div className="category">
            <h2>Category 2</h2>
            <div className="form-section">
              <label>
                Category Name:
                <input type="text" value={this.state.category1_name} onChange={this.handleChange("category1_name")} />
              </label>
            </div>            

            <div className="form-section">
              <label>
                100 Points Question:
                <input type="text" value={this.state.category1_100_q} onChange={this.handleChange("category1_100_q")} />
              </label>
              <label>
                100 Points Answer:
                <input type="text" value={this.state.category1_100_a} onChange={this.handleChange("category1_100_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                200 Points Question:
                <input type="text" value={this.state.category1_200_q} onChange={this.handleChange("category1_200_q")} />
              </label>
              <label>
                200 Points Answer:
                <input type="text" value={this.state.category1_200_a} onChange={this.handleChange("category1_200_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                300 Points Question:
                <input type="text" value={this.state.category1_300_q} onChange={this.handleChange("category1_300_q")} />
              </label>
              <label>
                300 Points Answer:
                <input type="text" value={this.state.category1_300_a} onChange={this.handleChange("category1_300_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                400 Points Question:
                <input type="text" value={this.state.category1_400_q} onChange={this.handleChange("category1_400_q")} />
              </label>
              <label>
                400 Points Answer:
                <input type="text" value={this.state.category1_400_a} onChange={this.handleChange("category1_400_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                500 Points Question:
                <input type="text" value={this.state.category1_500_q} onChange={this.handleChange("category1_500_q")} />
              </label>
              <label>
                500 Points Answer:
                <input type="text" value={this.state.category1_500_a} onChange={this.handleChange("category1_500_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                600 Points Question:
                <input type="text" value={this.state.category1_600_q} onChange={this.handleChange("category1_600_q")} />
              </label>
              <label>
                600 Points Answer:
                <input type="text" value={this.state.category1_600_a} onChange={this.handleChange("category1_600_a")} />
              </label>
            </div>
          </div>

          <div className="category">
            <h2>Category 3</h2>
            <div className="form-section">
              <label>
                Category Name:
                <input type="text" value={this.state.category1_name} onChange={this.handleChange("category1_name")} />
              </label>
            </div>            

            <div className="form-section">
              <label>
                100 Points Question:
                <input type="text" value={this.state.category1_100_q} onChange={this.handleChange("category1_100_q")} />
              </label>
              <label>
                100 Points Answer:
                <input type="text" value={this.state.category1_100_a} onChange={this.handleChange("category1_100_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                200 Points Question:
                <input type="text" value={this.state.category1_200_q} onChange={this.handleChange("category1_200_q")} />
              </label>
              <label>
                200 Points Answer:
                <input type="text" value={this.state.category1_200_a} onChange={this.handleChange("category1_200_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                300 Points Question:
                <input type="text" value={this.state.category1_300_q} onChange={this.handleChange("category1_300_q")} />
              </label>
              <label>
                300 Points Answer:
                <input type="text" value={this.state.category1_300_a} onChange={this.handleChange("category1_300_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                400 Points Question:
                <input type="text" value={this.state.category1_400_q} onChange={this.handleChange("category1_400_q")} />
              </label>
              <label>
                400 Points Answer:
                <input type="text" value={this.state.category1_400_a} onChange={this.handleChange("category1_400_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                500 Points Question:
                <input type="text" value={this.state.category1_500_q} onChange={this.handleChange("category1_500_q")} />
              </label>
              <label>
                500 Points Answer:
                <input type="text" value={this.state.category1_500_a} onChange={this.handleChange("category1_500_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                600 Points Question:
                <input type="text" value={this.state.category1_600_q} onChange={this.handleChange("category1_600_q")} />
              </label>
              <label>
                600 Points Answer:
                <input type="text" value={this.state.category1_600_a} onChange={this.handleChange("category1_600_a")} />
              </label>
            </div>
          </div>

          <div className="category">
            <h2>Category 4</h2>
            <div className="form-section">
              <label>
                Category Name:
                <input type="text" value={this.state.category1_name} onChange={this.handleChange("category1_name")} />
              </label>
            </div>            

            <div className="form-section">
              <label>
                100 Points Question:
                <input type="text" value={this.state.category1_100_q} onChange={this.handleChange("category1_100_q")} />
              </label>
              <label>
                100 Points Answer:
                <input type="text" value={this.state.category1_100_a} onChange={this.handleChange("category1_100_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                200 Points Question:
                <input type="text" value={this.state.category1_200_q} onChange={this.handleChange("category1_200_q")} />
              </label>
              <label>
                200 Points Answer:
                <input type="text" value={this.state.category1_200_a} onChange={this.handleChange("category1_200_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                300 Points Question:
                <input type="text" value={this.state.category1_300_q} onChange={this.handleChange("category1_300_q")} />
              </label>
              <label>
                300 Points Answer:
                <input type="text" value={this.state.category1_300_a} onChange={this.handleChange("category1_300_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                400 Points Question:
                <input type="text" value={this.state.category1_400_q} onChange={this.handleChange("category1_400_q")} />
              </label>
              <label>
                400 Points Answer:
                <input type="text" value={this.state.category1_400_a} onChange={this.handleChange("category1_400_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                500 Points Question:
                <input type="text" value={this.state.category1_500_q} onChange={this.handleChange("category1_500_q")} />
              </label>
              <label>
                500 Points Answer:
                <input type="text" value={this.state.category1_500_a} onChange={this.handleChange("category1_500_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                600 Points Question:
                <input type="text" value={this.state.category1_600_q} onChange={this.handleChange("category1_600_q")} />
              </label>
              <label>
                600 Points Answer:
                <input type="text" value={this.state.category1_600_a} onChange={this.handleChange("category1_600_a")} />
              </label>
            </div>
          </div>

          <div className="category">
            <h2>Category 5</h2>
            <div className="form-section">
              <label>
                Category Name:
                <input type="text" value={this.state.category1_name} onChange={this.handleChange("category1_name")} />
              </label>
            </div>            

            <div className="form-section">
              <label>
                100 Points Question:
                <input type="text" value={this.state.category1_100_q} onChange={this.handleChange("category1_100_q")} />
              </label>
              <label>
                100 Points Answer:
                <input type="text" value={this.state.category1_100_a} onChange={this.handleChange("category1_100_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                200 Points Question:
                <input type="text" value={this.state.category1_200_q} onChange={this.handleChange("category1_200_q")} />
              </label>
              <label>
                200 Points Answer:
                <input type="text" value={this.state.category1_200_a} onChange={this.handleChange("category1_200_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                300 Points Question:
                <input type="text" value={this.state.category1_300_q} onChange={this.handleChange("category1_300_q")} />
              </label>
              <label>
                300 Points Answer:
                <input type="text" value={this.state.category1_300_a} onChange={this.handleChange("category1_300_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                400 Points Question:
                <input type="text" value={this.state.category1_400_q} onChange={this.handleChange("category1_400_q")} />
              </label>
              <label>
                400 Points Answer:
                <input type="text" value={this.state.category1_400_a} onChange={this.handleChange("category1_400_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                500 Points Question:
                <input type="text" value={this.state.category1_500_q} onChange={this.handleChange("category1_500_q")} />
              </label>
              <label>
                500 Points Answer:
                <input type="text" value={this.state.category1_500_a} onChange={this.handleChange("category1_500_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                600 Points Question:
                <input type="text" value={this.state.category1_600_q} onChange={this.handleChange("category1_600_q")} />
              </label>
              <label>
                600 Points Answer:
                <input type="text" value={this.state.category1_600_a} onChange={this.handleChange("category1_600_a")} />
              </label>
            </div>
          </div>

          <div className="category">
            <h2>Category 6</h2>
            <div className="form-section">
              <label>
                Category Name:
                <input type="text" value={this.state.category1_name} onChange={this.handleChange("category1_name")} />
              </label>
            </div>            

            <div className="form-section">
              <label>
                100 Points Question:
                <input type="text" value={this.state.category1_100_q} onChange={this.handleChange("category1_100_q")} />
              </label>
              <label>
                100 Points Answer:
                <input type="text" value={this.state.category1_100_a} onChange={this.handleChange("category1_100_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                200 Points Question:
                <input type="text" value={this.state.category1_200_q} onChange={this.handleChange("category1_200_q")} />
              </label>
              <label>
                200 Points Answer:
                <input type="text" value={this.state.category1_200_a} onChange={this.handleChange("category1_200_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                300 Points Question:
                <input type="text" value={this.state.category1_300_q} onChange={this.handleChange("category1_300_q")} />
              </label>
              <label>
                300 Points Answer:
                <input type="text" value={this.state.category1_300_a} onChange={this.handleChange("category1_300_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                400 Points Question:
                <input type="text" value={this.state.category1_400_q} onChange={this.handleChange("category1_400_q")} />
              </label>
              <label>
                400 Points Answer:
                <input type="text" value={this.state.category1_400_a} onChange={this.handleChange("category1_400_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                500 Points Question:
                <input type="text" value={this.state.category1_500_q} onChange={this.handleChange("category1_500_q")} />
              </label>
              <label>
                500 Points Answer:
                <input type="text" value={this.state.category1_500_a} onChange={this.handleChange("category1_500_a")} />
              </label>
            </div>

            <div className="form-section">
              <label>
                600 Points Question:
                <input type="text" value={this.state.category1_600_q} onChange={this.handleChange("category1_600_q")} />
              </label>
              <label>
                600 Points Answer:
                <input type="text" value={this.state.category1_600_a} onChange={this.handleChange("category1_600_a")} />
              </label>
            </div>
          </div>*/}
          <input type="submit"/>
          </form>
          </div>
          )};
}

