import React, { Component } from 'react';
import './App.css';

// ract-bootstrap components
//import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

// Our speperately created components
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

// To use routing functionalities
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
 render() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <ul className="list">
            <li className="list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-item">
              <Link to="/about">About</Link>
            </li>
            <li className="list-item">
              <Link to="/contact">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
 }
}

export default App;