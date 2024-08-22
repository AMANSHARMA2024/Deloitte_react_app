import React, { useState, useEffect } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import accstyle from './../styles/Account.module.css';
import Logo from './../assets/images/Winster1.png';

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
    <div className={`${accstyle.body}`}>
    <div className={`${accstyle.container}`}>
      <div>
        <img className={`${accstyle.imagelogo}`} src={Logo} alt="Description" />
      </div>
      <div className={`${accstyle.cardsection}`}>
        {currentUser ? (
          <div className={`${accstyle.card}`}>
            <h2 className={`${accstyle.h2}`}>Welcome, {currentUser.name}</h2>
            <button 
              className={`${accstyle.button}`}
              onClick={() => setCurrentUser(null)}>Logout</button>
          </div>
        ) : (
          <div className={`${accstyle.card}`}>
            <div className={`${accstyle.togglebuttons}`}>
              <button 
                onClick={() => setShowLogin(true)}
                className={showLogin ? accstyle.active : accstyle.inactive}
              >
                Login
              </button>
              <button 
                onClick={() => setShowLogin(false)}
                className={`${!showLogin ? accstyle.active : accstyle.inactive}`}
              >
                Sign Up
              </button>
            </div>
            {showLogin ? (
              <Login users={users} onLogin={handleLogin}/>
            ) : (
              <SignUp users={users} onSignUp={handleSignUp} />
            )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Account;



