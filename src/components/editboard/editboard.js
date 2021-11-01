import React, { Component } from 'react';
import './editboard.css'
import {board_obj} from '../../board_object.js'


export default class EditBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category1_name: "",
      category2_name: "", 
      category3_name: "", 
      category4_name: "", 
      category5_name: "", 
      category6_name: "", 

      // Category 1 Q & A
      category1_100_q: "",
      category1_100_a: "",

      category1_200_q: "",
      category1_200_a: "",

      category1_300_q: "",
      category1_300_a: "",

      category1_400_q: "",
      category1_400_a: "",

      category1_500_q: "",
      category1_500_a: "",

      category1_600_q: "",
      category1_600_a: "",

      // Category 2 Q & A
      category2_100_q: "",
      category2_100_a: "",

      category2_200_q: "",
      category2_200_a: "",

      category2_300_q: "",
      category2_300_a: "",

      category2_400_q: "",
      category2_400_a: "",

      category2_500_q: "",
      category2_500_a: "",

      category2_600_q: "",
      category2_600_a: "",

      // Category 3 Q & A
      category3_100_q: "",
      category3_100_a: "",

      category3_200_q: "",
      category3_200_a: "",

      category3_300_q: "",
      category3_300_a: "",

      category3_400_q: "",
      category3_400_a: "",

      category3_500_q: "",
      category3_500_a: "",

      category3_600_q: "",
      category3_600_a: "",

      // Category 4 Q & A
      category4_100_q: "",
      category4_100_a: "",

      category4_200_q: "",
      category4_200_a: "",

      category4_300_q: "",
      category4_300_a: "",

      category4_400_q: "",
      category4_400_a: "",

      category4_500_q: "",
      category4_500_a: "",

      category4_600_q: "",
      category4_600_a: "",

      // Category 5 Q & A
      category5_100_q: "",
      category5_100_a: "",

      category5_200_q: "",
      category5_200_a: "",

      category5_300_q: "",
      category5_300_a: "",

      category5_400_q: "",
      category5_400_a: "",

      category5_500_q: "",
      category5_500_a: "",

      category5_600_q: "",
      category5_600_a: "",

      // Category 6 Q & A
      category6_100_q: "",
      category6_100_a: "",

      category6_200_q: "",
      category6_200_a: "",

      category6_300_q: "",
      category6_300_a: "",

      category6_400_q: "",
      category6_400_a: "",

      category6_500_q: "",
      category6_500_a: "",

      category6_600_q: "",
      category6_600_a: "",
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
  handleChange(state) {
    return event => {
      this.setState(({ details }) => ({
        details: { ...details, [state]: event.target.value }
      }));
    };
  }

  render() {
    return (
      <div className="board-wrapper">
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <div className="category">
            <h2>Category 1</h2>
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
          </div>
          <input type="submit"/>
        </form>
      </div>
  )};
}

      