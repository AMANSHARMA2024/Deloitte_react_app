import React from 'react';
import './../styles/Footer.css';
import Logo from './../assets/images/Winster1.png';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="text-center text-lg-start mt-xl-5 pt-4">
      {/* Grid container */}
      <div className="container-fluid">
        {/*Grid row*/}
        <div className="col">
          <h5 className="text-uppercase mb-4">Information</h5>
          <ul className="list-unstyled mb-4">
            <li>
              <a href="#!" className="text-white">Shop</a>
            </li>
            <li>
              <a href="#!" className="text-white">What's Vinification?</a>
            </li>
            <li>
              <a href="#!" className="text-white">About us</a>
            </li>
            <li>
              <a href="#!" className="text-white">Contact us</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}

        {/*Grid column*/}
        <div className="col">
          <h5 className="text-uppercase mb-4">Our policies</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="#!" className="text-white">Terms & Conditions</a>
            </li>
            <li>
              <a href="#!" className="text-white">Shipping & Cancellation</a>
            </li>
            <li>
              <a href="#!" className="text-white">Returns & Refund</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}

        {/*Grid column*/}
        <div className="col" id="logo">
          <img className="img" src={Logo} alt="logo" />
        </div>
        {/*Grid column*/}

        {/*Grid column*/}
        <div className="col">
          <h5 className="text-uppercase mb-4">Sign up to get new offers</h5>
          
          <div className="form-outline form-white mb-4">
            <input type="email" id="form5Example2" className="form-control" placeholder="Email Address" />
            <button type="submit" id="btn" className="btn btn-outline-white btn-block">Subscribe</button>
            <br></br>
            <div className="icons">
            <FontAwesomeIcon icon={faFacebook} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
        {/*Grid column*/}
      </div>
      <div className="text-center p-3 border-top border-white">
        Winster© 2024 Copyright:
        <a className="text-white" href="index.html">Winster.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;


