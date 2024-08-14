import React, { useState, useEffect } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './../styles/Account.css';
import Logo from './../assets/images/winsterlogo.png';

const Account = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true); // State to toggle between login and signup

  useEffect(() => {
    // Fetch the user data from the JSON file
    fetch('/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error loading user data:', error));
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleSignUp = (newUser) => {
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src={Logo} alt="Description" />
      </div>
      <div className="card-section">
        {currentUser ? (
          <div className="card">
            <h2>Welcome, {currentUser.name}</h2>
            <button onClick={() => setCurrentUser(null)}>Logout</button>
          </div>
        ) : (
          <div className="card">
            <div className="toggle-buttons">
              <button
                onClick={() => setShowLogin(true)}
                className={showLogin ? 'active' : 'inactive'}
              >
                Login
              </button>
              <button
                onClick={() => setShowLogin(false)}
                className={!showLogin ? 'active' : 'inactive'}
              >
                Sign Up
              </button>
            </div>
            {showLogin ? (
              <Login users={users} onLogin={handleLogin} />
            ) : (
              <SignUp users={users} onSignUp={handleSignUp} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;



