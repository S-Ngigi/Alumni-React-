import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Welcome from "./components/Welcome";
import Articles from "./components/Articles";
import NotFound from "./components/NotFound";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/articles" component={Articles} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
