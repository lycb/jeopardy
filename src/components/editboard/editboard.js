import React, { Component } from 'react';
import './editboard.css'

export default class EditBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category1_name: "", 
      
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
        details: { ...details, [name]: event.target.value }
      }));
    };
  }

  render() {
    return (
      <div className="board-wrapper">
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <div>
            <h2>Category 1</h2>
            <label>
              Category Name:
              <input type="text" value={this.state.category1_name} onChange={this.handleChange("category1_name")} />
            </label>

            <label>
              100 Points Question:
              <input type="text" value={this.state.category1_100_q} onChange={this.handleChange("category1_100_q")} />
            </label>
            <label>
              100 Points Answer:
              <input type="text" value={this.state.category1_100_a} onChange={this.handleChange("category1_100_a")} />
            </label>

            <label>
              200 Points Question:
              <input type="text" value={this.state.category1_200_q} onChange={this.handleChange("category1_200_q")} />
            </label>
            <label>
              200 Points Answer:
              <input type="text" value={this.state.category1_200_a} onChange={this.handleChange("category1_200_a")} />
            </label>
          </div>
        </form>
      </div>
  )};
}

      