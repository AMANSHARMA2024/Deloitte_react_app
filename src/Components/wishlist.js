import React, { useState, useEffect } from "react";
import "../styles/wishlist.css";

const Wishlist = ({ wishlist, setWishlist, handleChangewishlist, moveToCart }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    handlePrice(updatedWishlist);
  };

  const handlePrice = (WishlistItems = wishlist) => {
    let total = 0;
    WishlistItems.forEach((item) => (total += item.amount * item.price));
    setPrice(total);
  };

  useEffect(() => {
    handlePrice();
  }, [wishlist]);

  return (
    <div className="container">
      <div className="row">
        <p>Items in Wishlist: {wishlist.length}</p>
        {wishlist.length === 0 ? (
          <div>
            <br />
            <h1>Your wishlist is empty.</h1>
          </div>
        ) : (
          <>
            <h1>Products in wishlist</h1>
            <br />
            {wishlist.map((item) => (
              <div key={item.id} className="cart_box">
                <div className="cart_img">
                  <img src={item.img} className="img-fluid" alt="Product Image" />
                  <div className="buttongroup1">
                    <div className="morebuttons1">
                      <p>{item.title}</p>
                    </div>
                    <div className="morebuttons2">
                      <button onClick={() => handleChangewishlist(item, 1)}>+</button>
                      <button>{item.amount}</button>
                      <button onClick={() => handleChangewishlist(item, -1)}>-</button>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <span className="price">Rs.{item.price}</span>
                  <div id="buttongroup">
                    {/* remove button */}
                  <button onClick={() => handleRemove(item.id)} className="btn btn" id="removebutton">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
                  </button>
                  {/* cart button */}
                  <button onClick={() => moveToCart(item)} className="btn btn" id="cartbutton">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                  </svg>
                  </button>
                </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3>Rs. {price.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
