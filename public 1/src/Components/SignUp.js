import React, { useState } from 'react';
import signstyle from './../styles/Signup.module.css';

const SignUp = ({ users, onSignUp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    // Name validation
    if (name.trim() === '') {
      setError('Name is required.');
      return;
    }

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

    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError('User already exists.');
    } else {
      onSignUp({ name, email, password });
    }
  };

  return (
    <div className={`${signstyle.body}`}>
      <h2 className={`${signstyle.h2}`}>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        className={`${signstyle.input}`}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        className={`${signstyle.input}`}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className={`${signstyle.input}`}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={`${signstyle.signupbutton}`} onClick={handleSignUp}>Sign Up</button>
      {error && <p className={`${signstyle.p}`}>{error}</p>}
    </div>
  );
};

export default SignUp;

