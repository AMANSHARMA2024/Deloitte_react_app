import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    handlePrice(updatedCart);
  };

  const handlePrice = (cartItems = cart) => {
    let total = 0;
    cartItems.forEach((item) => (total += item.amount * item.price));
    setPrice(total);
  };
  
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="container">
      <div className="row">
        <p>Total Items in Cart: {cart.length}</p>
        {cart.length === 0 ? (
          <div>
            <br />
            <h1>Your cart is empty.</h1>
          </div>
        ) : (
          <>
            <h1>Products in Cart</h1>
            <br />
            {cart.map((item) => (
              <div key={item.id} className="cart_box">
                <div className="cart_img">
                  <img src={item.img} className="img-fluid" alt="Product Image" />
                  <div className="buttongroup1">
                    <div className="morebuttons1">
                      <p>{item.title}</p>
                    </div>
                    <div className="morebuttons2">
                      <button onClick={() => handleChange(item, 1)}>+</button>
                      <button>{item.amount}</button>
                      <button onClick={() => handleChange(item, -1)}>-</button>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <span>Rs.{item.price}</span>
                  {/* remove button */}
                  <button onClick={() => handleRemove(item.id)} className="btn btn-danger" id="removecartbutton">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3> "Rs. {price.toFixed(2)}"</h3>
        </div>
      </div>
      <div className="btn">
          <button className="btn btn-primary">
            <i className="fa-solid fa-credit-card"></i>
            <Link className="Link" to='/Payment'> Proceed to Payment</Link>
          </button>
      </div>
    </div>
  );
};

export default Cart;
