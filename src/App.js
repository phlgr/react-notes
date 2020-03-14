import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <Link to="/">
        <Header />
      </Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/newNote"></Route>
        <Route path="/allNotes"></Route>
      </Switch>
    </Router>
  );
}

export default App;
