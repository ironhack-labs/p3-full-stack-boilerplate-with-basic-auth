// handleSignupInput, handleSignupSubmit

import React from 'react';
import AUTH_SERVICE from '../../../services/AuthService';

class Signup extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    message: null
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = event => {
    event.preventDefault();

    const { username, email, password } = this.state;

    AUTH_SERVICE.signup({ username, email, password })
      .then(responseFromServer => {
        const { userFromDB, message } = responseFromServer;

        this.props.updateUser(userFromDB);
        alert(`${message}`);
        this.props.history.push('/private');
      })
      .catch(error => {
        if (error.response && error.response.data) {
          this.setState({ message: error.response.data.message });
        }
      });
  };

  render() {
    const { username, email, password, message } = this.state;
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor='username-input'>Username</label>
          <input id='username-input' name='username' type='text' value={username} onChange={this.handleInputChange} />
          <label htmlFor='email-input'>Email</label>
          <input id='email-input' name='email' type='email' value={email} onChange={this.handleInputChange} />
          <label htmlFor='password-input'>Password</label>
          <input
            id='password-input'
            name='password'
            type='password'
            value={password}
            onChange={this.handleInputChange}
          />

          <button>Signup</button>
        </form>
        {/* {this.state.message ? <div>{this.state.message}</div> : ''} */}
        {message && <div>{message}</div>}
      </div>
    );
  }
}

export default Signup;
