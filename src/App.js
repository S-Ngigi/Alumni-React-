// * React & React-Router-Dom Manenos
import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

// * Redux Manenos
import {Provider} from "react-redux";
import {createStore} from "redux";

// * Reducer Manenos
import alumni_articles from "./reducers/indexReducer";

// * My components
import Welcome from "./components/Welcome";
import Articles from "./components/Articles";
import NotFound from "./components/NotFound";

// * Css
import './App.css';

let store = createStore(alumni_articles);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/articles" component={Articles} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
