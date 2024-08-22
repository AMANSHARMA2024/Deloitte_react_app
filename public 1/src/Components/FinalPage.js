import React, { useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import styles from '../styles/FinalPage.module.css';
import Checkbox from '../assets/images/Checkbox.png';

const FinalPage = () => {

  const [progress, setProgress] = useState(0);

  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState(''); // add email state



  useEffect(() => {

    const intervalId = setInterval(() => {

      setProgress((prevProgress) => {

        if (prevProgress < 100) {

          return prevProgress + 1;

        }

        return prevProgress;

      });

      if (progress === 100) {

        setLoading(false);

        sendEmail(); // call sendEmail function when progress reaches 100

      }

    }, 50);

    return () => clearInterval(intervalId);

  }, [progress]);

  const sendEmail = () => {
    const templateParams = {
      to_email: email,
      subject: 'Order Confirmation',
      message: 'Your order has been confirmed!',
    };
  
    emailjs.send(
      'service_axp6qbc', // your service id
      '__ejs-test-mail-service__', // your template id
      templateParams,
      '7E4qYZPhTb0on9PtT' // your public key
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((err) => {
      console.log('Error sending email...', err);
    });
  };
  



  return (


      <div className={styles.body}>
        <div className={styles.container}>
          {loading ? (
            <div className={styles.loader}></div>
          ) : (
            <div className={styles.checkmark}><img src={Checkbox} alt="Checkmark" /></div>
          )}
          <h1>Thank you for placing your order!</h1>
          <p>Your order is on its way to:</p>
          <p>123 Main St, Anytown, USA</p>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p>{progress}% complete</p>
        </div>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

        </div>
    
  );
};

export default FinalPage;






