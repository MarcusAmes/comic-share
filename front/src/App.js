import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginContainer />
        <RegisterContainer />
      </div>
    );
  }
}

export default App;
