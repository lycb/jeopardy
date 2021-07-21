import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

export default function App() {
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
              <Board />
            </Route>
            <Route path='/edit'>
              <Edit />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Homemade Jeopardy!</h2>;
}

function Board() {
  return <h2>Custom Game</h2>;
}

function Edit() {
  return <h2>Edit Game</h2>;
}
