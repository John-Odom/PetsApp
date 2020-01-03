
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './stylesheets/App.css';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signupPage';
import ProfilePage from './pages/profilePage';
import LandingPage from './pages/landingPage';
import LoadingPage from './pages/loadingPage';
import OrganizationsPage from './pages/organizationsPage';
import OrganizationPage from './pages/organizationPage';
import DogPage from './pages/dogPage';
import FavoritesPage from './pages/favoritesPage';



class App extends Component {

  getRoutes = () => {
      return (
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/profile' component={ProfilePage} />
          <Route exact path='/dogs' component={LandingPage} />
          <Route exact path='/organizations' component={OrganizationsPage} />
          <Route exact path='/loading' component={LoadingPage} />
          <Route exact path='/dogs/:id' component={DogPage} />
          <Route exact path='/organizations/:id' component={OrganizationPage} />
          <Route exact path='/favorites' component={FavoritesPage} />
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

