import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Button from './components/Button';

function App() {
  return (
    <Router>
      <Link to="/">
        <Header />
      </Link>
      <Switch>
        <Route exact path="/">
          <Button>Hallo!</Button>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
