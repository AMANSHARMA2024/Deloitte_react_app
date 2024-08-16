import React, { useState } from "react";
import Amazon from "./Components/productlisting";
import Navbar from "./Components/navbar";
import Cart from "./Components/cart";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Wishlist from "./Components/wishlist";

const App = () => {
  const [show, setShow] = useState(true);
  // This is for cart----------------------------------------------------------------------------
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    toast.success('Added to Cart', {
      position: "top-center"
    });
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // This is for wishlist------------------------------------------------------------------------
  const [wishlist, setWishlist] = useState([]);

  const handleClickwishlist = (item) => {
    if (wishlist.indexOf(item) !== -1) return;
    setWishlist([...wishlist, item]);
    toast.success("Added to Wishlist", {
      position: "top-center"
    });
  };

  const handleChangewishlist = (item, d) => {
    const ind = wishlist.indexOf(item);
    const arr = wishlist;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setWishlist([...arr]);
  };

  // Function to move items from wishlist to cart
  const moveToCart = (item) => {
    handleClick(item); // Add to cart
    setWishlist(wishlist.filter((wishlistItem) => wishlistItem.id !== item.id)); // Remove from wishlist
  };

  return (
    <Router>
      <React.Fragment>
        <Navbar setShow={setShow} size={cart?.length || 0} />
        <Routes>
          <Route path="/productlisting" element={<Amazon handleClick={handleClick} handleClickwishlist={handleClickwishlist} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} handleChangewishlist={handleChangewishlist} moveToCart={moveToCart} />} />
        </Routes>
        <ToastContainer autoClose={1000} closeOnClick={false} />
      </React.Fragment>
    </Router>
  );
};

export default App;
