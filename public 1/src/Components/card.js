import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/card.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heart from "react-animated-heart";

const Cards = ({ item, handleClick, handleClickwishlist }) => {
  const { title, author, price, img } = item;
  // const handleClickhere = (item)=>{
  //   handleClickwishlist(item);
  // }
  const [isClick, setClick] = useState(false);
  return (
    <Card style={{ width: '18rem' }} className="container">
      <Card.Header>
        <Card.Img variant="top" src={img} className="imgbox" />
      </Card.Header>
      <Card.Body>
        <Card.Title className="heading">{title}</Card.Title>
        <Card.Text>{author}</Card.Text>
        <Card.Text>Rs.{price}</Card.Text>
      </Card.Body>
      <Card.Footer id="cardfooter">
        <Button variant="primary" id="cartbutton1" onClick={() => handleClick(item)} className="cartbutton">Add to Cart</Button>
          <button type="button" id="wishlistbutton" class="btn btn-outline-danger" onClick={()=> handleClickwishlist(item)}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                  </svg>
          </button>
      </Card.Footer>
    </Card>
  );
};

export default Cards;
