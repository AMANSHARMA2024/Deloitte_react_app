import React, { useState } from 'react';
import logstyle from './../styles/Login.module.css';

const Login = ({ users, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Email validation
    if (!email.includes('@')) {
      setError('Invalid email format. Please include an "@" in the email address.');
      return;
    }

    // Password validation (e.g., minimum length of 6 characters)
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      onLogin(user);
    } else {
      setError('Invalid email or password. Please sign up if you do not have an account.');
    }
  };

  return (
    <div className={`${logstyle.body}`}>
      <h2 className={`${logstyle.h2}`}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        className={`${logstyle.input}`}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className={`${logstyle.input}`}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
        className={`${logstyle.loginbutton}`} onClick={handleLogin}>Login</button>
      {error && <p className={`${logstyle.p}`} >{error}</p>}
    </div>
  );
};

export default Login;

