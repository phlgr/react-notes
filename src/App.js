import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './pages/Home';
import NewNote from './pages/NewNote';
import AllNotes from './pages/AllNotes';
import EditNote from './pages/EditNote';

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
        <Route path="/newNote">
          <NewNote />
        </Route>
        <Route path="/allNotes">
          <AllNotes />
        </Route>
        <Route path="/editNote/:noteId">
          <EditNote></EditNote>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
