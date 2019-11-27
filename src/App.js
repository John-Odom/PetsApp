
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import './stylesheets/App.css';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signupPage';
import ProfilePage from './pages/profilePage';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/' component={ProfilePage} />
      </Switch>
    )
  }
}

export default App;
