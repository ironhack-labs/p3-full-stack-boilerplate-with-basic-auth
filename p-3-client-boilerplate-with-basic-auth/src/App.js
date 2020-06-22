import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/Navbar';
import Signup from './components/auth/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import PrivatePageExample from './components/PrivatePageExample';

import AUTH_SERVICE from './services/AuthService';

class App extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    AUTH_SERVICE.getUser()
      .then(user => {
        this.updateUser(user);
      })
      .catch(error => console.log(error));
  }

  updateUser = user => {
    console.log('ii: ', user);
    this.setState({ user });
  };

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <NavBar user={this.state.user} updateUser={this.updateUser} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signup-form' render={props => <Signup {...props} updateUser={this.updateUser} />} />
            <ProtectedRoute
              path='/private'
              authorized={this.state.user}
              redirect={'/signup-form'}
              render={props => <PrivatePageExample {...props} user={this.state.user} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
