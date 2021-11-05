import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/home/home';
import Board from './pages/board/board';
import Edit from './pages/edit/edit';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "scoreUnit": 'money',
      "teams": [],
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

    this.handleScoreUnitChange = this.handleScoreUnitChange.bind(this);
    this.handleTeamsChange = this.handleTeamsChange.bind(this);
    this.handleBoardChange = this.handleBoardChange.bind(this);
  }

  handleScoreUnitChange(event) {
    this.setState(prevState => {
      let numTeams = event.value;
      return { numTeams };
    });
  }

  handleTeamsChange(index) {
    return event => {
      this.setState(prevState => {
        let teams = prevState.teams;
        let team = teams[index];
        team = event.target.value;
        teams[index] = team;
        return { teams };
      });
    }
  }

  //  https://stackoverflow.com/questions/52235160/how-to-setstate-multiple-states/52235312
  handleBoardChange(category, index, name) {
    return event => {
      this.setState(prevState => {
        const board = [...prevState.board];
        board[category][index] = { ...board[category][index], [name]: event.target.value }
        return { board };
      })
    };
  }

  render() {
    const scoreUnit = this.state.scoreUnit;
    const teams = this.state.teams;
    const board = this.state.board;

    return (
      <div className='app'>
        <header />
        <Router>
          <div className='app-navigation-bar'>
            <nav>
              <ul className='app-navigation-bar-ul'>
                <li className='app-navigation-bar-li'><Link to='/'>Home</Link></li>
                <li className='app-navigation-bar-li'><Link to='/board'>Board</Link></li>
                <li className='app-navigation-bar-li'><Link to='/edit'>Edit</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route path='/board'>
                <Board
                  scoreUnit={scoreUnit}
                  teams={teams}
                  board={board} />
              </Route>
              <Route path='/edit'>
                <Edit
                  board={board}
                  onBoardChange={this.handleBoardChange} />
              </Route>
              <Route path='/'>
                <Home
                  scoreUnit={scoreUnit}
                  teams={teams}
                  onScoreUnitChange={this.handleScoreUnitChange}
                  onTeamsChange={this.handleTeamsChange} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
  }
