import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import paystyle from './../styles/Payment.module.css';
import gpay from './../assets/gpay.png';
import visa from './../assets/visa.png';
import mastercard from './../assets/mastercard.png';
import cash from './../assets/cash.png';

const PaymentForm = () => {
  const navigate = useNavigate();
  const [paymentForm, setPaymentForm] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: ''
  });

  const [touched, setTouched] = useState({
    cardNumber: false,
    expiryDate: false,
    cvv: false,
    cardHolderName: false
  });

  const formatCardNumber = (value) => {
    return value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const filterAlphabetic = (value) => {
    return value.replace(/[^a-zA-Z\s]/g, '');
  };

  const filterNumeric = (value) => {
    return value.replace(/[^0-9]/g, '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (name === 'cardHolderName') {
      formattedValue = filterAlphabetic(value);
    } else if (name === 'cvv') {
      formattedValue = filterNumeric(value);
    }

    setPaymentForm({
      ...paymentForm,
      [name]: formattedValue
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
  };

  const validate = () => {
    const errors = {};
    const cardNumberWithoutSpaces = paymentForm.cardNumber.replace(/\s/g, '');
    if (!cardNumberWithoutSpaces || cardNumberWithoutSpaces.length < 16) {
      errors.cardNumber = 'Invalid card number. Enter your valid 16 digit card number';
    }
    if (!paymentForm.expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentForm.expiryDate)) {
      errors.expiryDate = 'Invalid expiry date. Enter in MM/YY format';
    }  
    if (!paymentForm.cvv || paymentForm.cvv.length !== 3) {
      errors.cvv = 'Invalid CVV. Enter your valid 3-digit CVV';
    }
    if (!paymentForm.cardHolderName || paymentForm.cardHolderName.length < 3) {
      errors.cardHolderName = 'Card holder name is required. Enter the name on the card';
    }
    return errors;
  };

  const errors = validate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      // Submit form
      console.log('Form submitted', paymentForm);
      navigate('/FinalPage'); // Navigate to the FinalPage
    } else {
      console.log('Errors', errors);
    }
  };

  return (
    <div className={`${paystyle.body}`}>
      <br/>
      <div className={`${paystyle.paymentcontainers}`}>
        <div className={`${paystyle.paymentform}`}>
          <h2 className={`${paystyle.h2}`}>PAY NOW</h2>
          <div className={`${paystyle.methods}`}>
            <img className={`${paystyle.methodsimg}`} src={gpay} alt="Google Pay"/>
            <img className={`${paystyle.methodsimg}`} src={visa} alt="Visa"/>
            <img className={`${paystyle.methodsimg}`} src={mastercard} alt="Mastercard"/>
            <img className={`${paystyle.methodsimg}`} src={cash} alt="Cash"/>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={`form-group`}>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="Enter card number"
                className={`${paystyle.input}`}
                value={paymentForm.cardNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                maxLength="19" // 16 digits + 3 spaces
              />
              {touched.cardNumber && errors.cardNumber && (
                <div className={`${paystyle.invalid}`}>
                  {errors.cardNumber}
                </div>
              )}
            </div>

            <div className={`form-group`}>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                className={`${paystyle.input}`}
                value={paymentForm.expiryDate}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.expiryDate && errors.expiryDate && (
                <div className={`${paystyle.invalid}`}>
                  {errors.expiryDate}
                </div>
              )}
            </div>

            <div className={`form-group`}>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="CVV"
                className={`${paystyle.input}`}
                value={paymentForm.cvv}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                maxLength="3"
              />
              {touched.cvv && errors.cvv && (
                <div className={`${paystyle.invalid}`}>
                  {errors.cvv}
                </div>
              )}
            </div>

            <div className={`form-group`}>
              <input
                type="text"
                id="cardHolderName"
                name="cardHolderName"
                className={`${paystyle.input}`}
                placeholder="Cardholder name"
                value={paymentForm.cardHolderName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.cardHolderName && errors.cardHolderName && (
                <div className={`${paystyle.invalid}`}>
                  {errors.cardHolderName}
                </div>
              )}
            </div>

            <button className={`${paystyle.button}`} type="submit">Submit Payment</button><br/>
          </form>
        </div>
      </div>
      <br/><br/><br/><br/><br/>
    </div>
  );
};

export default PaymentForm;

