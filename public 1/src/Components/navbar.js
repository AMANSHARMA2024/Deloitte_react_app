import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBell, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import navbarstyles from '../styles/Navbar.module.css';
import logo from '../images/winsterlogo.png';
import { Link } from 'react-router-dom';

function Navbar({ cart = [] }) {
  return (
    <div className={navbarstyles.body}>
    <nav className={`navbar navbar-expand-lg navbar-light ${navbarstyles.navbar}`} style={{ backgroundColor: '#b5545e' }}>
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to='/Home'>
          <img src={logo} width="100px" alt="Winster Logo" />
        </Link>

        {/* Toggle Btn */}
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link active text-black" aria-current="page" to='/Home'>
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active text-black" aria-current="page" to='/About'>
                About Us
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active text-black" aria-current="page" to='/Gallery'>
                Gallery
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link active text-black" aria-current="page" to="/productlisting">
                Products
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link active text-black" aria-current="page" to='/Contact'>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            
            <a className="nav-link active text-black" aria-current="page" href="#">
              <Link className={navbarstyles.Links} to="/wishlist">
                <FontAwesomeIcon icon={faHeart} className={navbarstyles.iconColor} />
              </Link>
            </a>

            <div className="dropdown show">
              <a className={`nav-link active text-black ${navbarstyles.customDropdownToggle}`} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faBell} className={navbarstyles.iconColor} />
              </a>
              <div className={`dropdown-menu ${navbarstyles.customDropdownMenu}`} aria-labelledby="dropdownMenuLink">
                <p className={`dropdown-item ${navbarstyles.customDropdownItem}`}>
                  <h6 align='center'>Shop & Earn</h6>
                  <p align='center'>Get 5% as Reward Points on every purchase</p>
                </p>
                <p className={`dropdown-item ${navbarstyles.customDropdownItem}`}>
                  <h6 align='center'>Celebrate with Us</h6>
                  <p align='center'>10% discount on selected products</p>
                </p>
                <p className={`dropdown-item ${navbarstyles.customDropdownItem}`}>
                  <h6 align='center'>Happiness in a Bottle</h6>
                  <p align='center'>Checkout our Holiday offers</p>
                </p>
              </div>
            </div>
            
            <a className="nav-link active text-black" aria-current="page" href="#">
              <Link className={navbarstyles.Links} to="/welcome">
                <FontAwesomeIcon icon={faUser} className={navbarstyles.iconColor} />
              </Link>
            </a>
            
            <Link className="nav-link active text-black" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} className={navbarstyles.iconColor} />
              <span className={navbarstyles.badge}>{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;

