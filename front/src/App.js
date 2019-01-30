import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import { Switch, Route } from 'react-router-dom'
import TopNavContainer from './containers/TopNavContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavContainer />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
