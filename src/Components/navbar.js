import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBell, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/navbar.css'
import logo from '../images/winsterlogo.png';
import { Link } from 'react-router-dom';

function Navbar({ cartItems = [] }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#b5545e' }}>
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={logo} width="100px" alt="Winster Logo" />
        </a>

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
              <a className="nav-link active text-black" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active text-black" aria-current="page" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active text-black" aria-current="page" href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active text-black" aria-current="page" >
                <Link className="Links" to="/productlisting">Products</Link>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link active text-black" aria-current="page" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <a className="nav-link active text-black" aria-current="page" href="#">
              <Link className="Links" to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link>
            </a>
            <div className="dropdown show">
              <a className="custom-dropdown-toggle nav-link active text-black" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faBell} />
              </a>
              <div className="dropdown-menu custom-dropdown-menu" aria-labelledby="dropdownMenuLink">
                <p className="dropdown-item custom-dropdown-item">
                  <h6 align='center'>Shop & Earn</h6>
                  <p align='center'>Get 5% as Reward Points on every purchase</p>
                </p>
                <p className="dropdown-item custom-dropdown-item">
                  <h6 align='center'>Celebrate with Us</h6>
                  <p align='center'>10% discount on selected products</p>
                </p>
                <p className="dropdown-item custom-dropdown-item">
                  <h6 align='center'>Happiness in a Bottle</h6>
                  <p align='center'>Checkout our Holiday offers</p>
                </p>
              </div>
            </div>
            <a className="nav-link active text-black" aria-current="page" href="#">
              <FontAwesomeIcon icon={faUser} />
            </a>
            <a className="nav-link active text-black" aria-current="page" href="#">
              <Link className="Links" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {/* <span className="badge">{cartItems.length}</span> */}
              </Link>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;