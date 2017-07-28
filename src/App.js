import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './Home';
import PeopleList from './PeopleList';
import PersonDetail from './PersonDetail';

import './App.css';

const App = () => (
  <Router>
    <Home>
      <Route exact path="/people" component={PeopleList} />
      <Route path="/people/:id" component={PersonDetail} />
    </Home>
  </Router>
);

export default App;
