import React from 'react';
import accstyle from '../styles/Welcome.module.css';


const Welcome = ({ user, onLogout }) => {
  if (!user) {
    return null; // or you can return a fallback UI
  }

  return (
    <div className={`${accstyle.card}`}>
      <h2 className={`${accstyle.h2}`}>Welcome, {user.name}</h2>
      <p className={`${accstyle.welcomeMessage}`}>We're glad to have you back!</p>
      <p className={`${accstyle.welcomeMessage}`}>Explore our exclusive collection of wines and discover new favorites.</p>
      <p className={`${accstyle.welcomeMessage}`}>Don't forget to check out our latest offers and rewards!</p>
      <button 
        className={`${accstyle.button}`}
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Welcome;

