import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/card.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <Card style={{ width: '18rem' }} className="container"> 
      <Card.Header>
        <Card.Img variant="top" src={img} className="imgbox"/>
      </Card.Header>
      <Card.Body>
        <Card.Title className="heading">{title}</Card.Title>
        <Card.Text>{author}</Card.Text>
        <Card.Text>Rs.{price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={() => handleClick(item)}>Add to Cart</Button>
      </Card.Footer>
    </Card>
  );
};
export default Cards;
