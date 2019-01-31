import React, { Component } from 'react';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import { Switch, Route } from 'react-router-dom'
import TopNavContainer from './containers/TopNavContainer';
import MainPageContainer from './containers/MainPageContainer';
import ComicUploaderContainer from './containers/ComicUploaderContainer';
import ViewerContainer from './containers/ViewerContainer';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavContainer />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route exact path="/home" component={MainPageContainer} />
          <Route exact path="/upload" component={ComicUploaderContainer} />
          <Route path="/view" component={ViewerContainer} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
