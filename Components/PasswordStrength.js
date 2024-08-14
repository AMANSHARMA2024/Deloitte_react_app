import React, { useState } from 'react';
 
function PasswordStrength() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(null);
 
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    checkPasswordStrength(passwordValue);
  };
 
  const checkPasswordStrength = (password) => {
    if (password.length < 8) {
      setStrength('Weak');
    } else if (password.length >= 8 && password.length <= 12) {
      setStrength('Medium');
    } else {
      setStrength('Strong');
    }
  };
 
  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      />
      {strength && (
        <p style={{ color: getStrengthColor(strength) }}>{strength}</p>
      )}
    </div>
  );
}
 
const getStrengthColor = (strength) => {
  switch (strength) {
    case 'Weak':
      return 'red';
    case 'Medium':
      return 'orange';
    case 'Strong':
      return 'green';
    default:
      return 'black';
  }
};
 
export default PasswordStrength;