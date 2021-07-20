import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <header />
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/board'>Board</Link></li>
              <li><Link to='/edit'>Edit</Link></li>
            </ul>
          </nav>

          <Switch>
            <Route path='/board'>
              <Board />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/edit'>
              <Edit />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Board() {
  return <h2>Board</h2>;
}

function Edit() {
  return <h2>Edit</h2>;
}
