import React, { useState } from 'react';
import './ProductListing.css';
import product1image from '../assets/1.jpg';
import product2image from '../assets/2.jpg';
import product3image from '../assets/3.jpg';
 
function App() {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      id: 1,
      name: 'The Nike Razor Red',
      price: 553,
      image: product1image,
    },
    {
      id: 2,
      name: 'The Jordan that Flies',
      price: 1299,
      image: product2image,
    },
    {
      id: 3,
      name: 'The Nike Canon Event',
      price: 756,
      image: product3image,
    },
  ]);
 
  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
 
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };
 
  const handleQuantityIncrease = (productId) => {
    setCart(
      cart.map((product) =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };
 
  const handleQuantityDecrease = (productId) => {
    setCart(
      cart
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: Math.max(product.quantity - 1, 1) }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };
 
  const calculateTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
 
  return (
    <div>
      <h1>PRODUCTS</h1>
      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} className="card-image" />
            <h2 className="card-title">{product.name}</h2>
            <p className="card-price">${product.price}</p>
            <button onClick={() => handleAddToCart(product)} className="card-button">Add to Cart</button>
          </div>
        ))}
      </div>
 
      <h1>CART</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-card" key={product.id}>
            <img src={product.image} alt={product.name} className="cart-card-image" />
            <h2 className="cart-card-title">{product.name}</h2>
            <p className="cart-card-price">${product.price}</p>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityDecrease(product.id)} className="cart-card-button">-</button>
              <span> {product.quantity} </span>
              <button onClick={() => handleQuantityIncrease(product.id)} className="cart-card-button">+</button>
            </div>
            <br></br>
            <button onClick={() => handleRemoveFromCart(product.id)} className="cart-card-button">Remove</button>
          </div>
        ))}
      </div>
 
      <h3>Total Price: ${calculateTotalPrice()}</h3>
    </div>
  );
}
 
export default App;
 