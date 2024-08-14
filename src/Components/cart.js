import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
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
                  <button onClick={() => handleRemove(item.id)} className="btn btn-danger">Remove</button>
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
          <a href="payment.html"> Proceed to Payment</a>
        </button>
      </div>
    </div>
  );
};

export default Cart;
