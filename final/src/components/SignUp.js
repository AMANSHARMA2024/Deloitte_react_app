import React, { useState } from 'react';
import './../styles/Signup.css';

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
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signupbutton" onClick={handleSignUp}>Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignUp;

