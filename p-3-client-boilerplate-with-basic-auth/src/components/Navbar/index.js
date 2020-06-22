import React from 'react';

import { Link } from 'react-router-dom';

import AUTH_SERVICE from '../../services/AuthService';

const NavBar = props => {
  const handleLogout = () => {
    alert('Logout triggered!');
    // AUTH_SERVICE.logout()
    //   .then(() => props.updateUser(null))
    //   .catch(error => console.log(error));
  };

  return (
    <nav>
      {(props.user && (
        <>
          <span>{props.user.username}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      )) || (
        <>
          {/* <Link to='/login-form'>Login</Link> */}
          <Link to='/signup-form'>Signup</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
