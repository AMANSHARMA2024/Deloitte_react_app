import React from 'react';
import styles from './../styles/Footer.module.css';
import Logo from './../assets/images/winsterlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={`text-center text-lg-start mt-xl-5 pt-4 ${styles.footer}`} style={{backgroundColor: '#370617'}}>
      {/* Grid container */}
      <div className={styles.containerFluid}>
        {/*Grid row*/}
        <div className={styles.col}>
          <h5 className={`text-uppercase mb-4 ${styles.mb4}`}>Information</h5>
          <ul className={`list-unstyled mb-4 ${styles.listUnstyled}`}>
            <li className={styles.listUnstyledLi}>
              <a href="#!" className={`text-white ${styles.textWhite}`}>Shop</a>
            </li>
            <li className={styles.listUnstyledLi}>
              <a href="#!" className={`text-white ${styles.textWhite}`}>What's Vinification?</a>
            </li>
            <li className={styles.listUnstyledLi}>
              <a href="#!" className={`text-white ${styles.textWhite}`}>About us</a>
            </li>
            <li className={styles.listUnstyledLi}>
              <a href="#!" className={`text-white ${styles.textWhite}`}>Contact us</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}

        {/*Grid column*/}
        <div className={styles.col}>
          <h5 className={`text-uppercase mb-4 ${styles.mb4}`}>Our policies</h5>
          <ul className={`list-unstyled ${styles.listUnstyled}`}>
            <li className={styles.listUnstyledLi}>
              <a href="#!" className={`text-white ${styles.textWhite}`}>Privacy Policy</a>
            </li>
            <li className={styles.listUnstyledLi}>
              <a href="#!" className={`text-white ${styles.textWhite}`}>Terms & Conditions</a>
            </li>
            <li className={styles.listUnstyledLi}>
              <a href="#!" className={`text-white ${styles.textWhite}`}>Shipping & Cancellation</a>
            </li>
            <li className={styles.listUnstyledLi}>
              <a href="#!" className={`text-white ${styles.textWhite}`}>Returns & Refund</a>
            </li>
          </ul>
        </div>
        {/*Grid column*/}

        {/*Grid column*/}
        <div className={styles.col} id="logo">
          <img className={styles.img} src={Logo} alt="logo" />
        </div>
        {/*Grid column*/}

        {/*Grid column*/}
        <div className={styles.col}>
          <h5 className={`text-uppercase mb-4 ${styles.mb4}`}>Sign up to get new offers</h5>
          
          {/* <div className={`form-outline form-white mb-4 ${styles.formControl}`}> */}
            <input type="email" id="form5Example2" className={`form-control ${styles.formControl}`} placeholder="Email Address" />
            <button type="submit" id="btn" className={`${styles.btn}`}>Subscribe</button>
            <br></br>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faFacebook} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faInstagram} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faTwitter} />
            </div>
          {/* </div> */}
        </div>
        {/*Grid column*/}
      </div>
      <div className={`text-center p-3 border-top border-white ${styles.textCenter} ${styles.p3} ${styles.borderTop}`}>
        Winster© 2024 Copyright:
        <a className={`text-white ${styles.textWhite}`} href="index.html">Winster.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
