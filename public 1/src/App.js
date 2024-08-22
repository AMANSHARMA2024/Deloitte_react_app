import React, { useState } from "react";
import Amazon from "./Components/productlisting";
import Navbar from "./Components/navbar";
import Cart from "./Components/cart";
import Payment from "./Components/Payment"
import Footer from "./Components/Footer";
import Account from "./Components/Account";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import FinalPage from "./Components/FinalPage";
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";

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

  // This is for wishlist------------------------------------------------------------------------
  const [wishlist, setWishlist] = useState([]);

  const handleClickwishlist = (item) => {
    if (wishlist.indexOf(item) !== -1) return;
    setWishlist([...wishlist, item]);
    toast.success("Added to Wishlist", {
      position: "top-center"
    });
  };

  // Function to move items from wishlist to cart
  const moveToCart = (item) => {
    handleClick(item); // Add to cart
    setWishlist(wishlist.filter((wishlistItem) => wishlistItem.id !== item.id)); // Remove from wishlist
  };

  return (
    <Router>
      <React.Fragment>
        <Navbar setShow={setShow} size={cart?.length || 0} cart={cart} />
        <Routes>
          <Route path="/productlisting" element={<Amazon handleClick={handleClick} handleClickwishlist={handleClickwishlist} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} moveToCart={moveToCart} />} />
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/" element={<Account/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/About" element={<About/>}/>
          
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/FinalPage" element={<FinalPage/>}/>
          <Route path="/Home" element={<Home/>}/>
          
        </Routes>
        <ToastContainer autoClose={1000} closeOnClick={false} />
        <Footer/>
      </React.Fragment>
    </Router>
  );
};

export default App;
