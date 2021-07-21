import React, { Component } from 'react';

export default class SetUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTeams: '1',
      scoreUnit: 'money'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();    
    let formData = new FormData(event.target);
    let object = {};
    for (var [key, value] of formData.entries()) { 
      object[key] = value;
    }
    let json = JSON.stringify(object);
  }

  // TODO: move this to the question form in the edit page so that user can download
  downloadJSON(json) {
    json = [json];
    const element = document.createElement("a");
    const file = new Blob(json, { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "jeopardy_file.json";
    element.click();
  }

  handleUpload(file) {
    // use JSON.parse(JSON string)
  }

  render() {
    return (
      <form id='setUpForm' name='setUpForm' onSubmit={this.handleSubmit}>
        <div className='form-select-component-wrapper'>
        <label>
          Number of Teams:
          <select name='numTeams' value={this.state.numTeams} onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>
        </div>

         <div className='form-select-component-wrapper'>
        <label>
          Score Unit:
          <select name='scoreUnit' value={this.state.scoreUnit} onChange={this.handleChange}>
            <option value="money">$$$</option>
            <option value="points">Points</option>
          </select>
        </label>
        </div>
        <button type="submit">Play</button>
      </form>
    );
  }
}