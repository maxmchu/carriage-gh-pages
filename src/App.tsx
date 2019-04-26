import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Carriage from './Carriage';


class App extends Component {

  public render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Carriage} />
            <Route component={Carriage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
