
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './stylesheets/App.css';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signupPage';
import ProfilePage from './pages/profilePage';
import LandingPage from './pages/landingPage';
import LoadingPage from './pages/loadingPage';
import DogPage from './pages/dogPage';


class App extends Component {

  getRoutes = () => {
    if(localStorage.jwt)
      return (
        <Switch>
          <Route exact path='/profile' component={ProfilePage} />
          <Route exact path='/welcome' component={LandingPage} />
          <Route exact path='/loading' component={LoadingPage} />
          <Route exact path='/dogs/:id' component={DogPage} />
          {/* <Redirect to='/profile' /> */}
        </Switch>
      )
    else
      return (
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/welcome' component={LandingPage} />
        <Route exact path='/loading' component={LoadingPage} />
        <Redirect to='/signup' />
      </Switch>
    )
  }
  render() {
    return (
            <div className="App-content">
              { this.getRoutes() }
            </div>
    )
  }
}

export default App;

