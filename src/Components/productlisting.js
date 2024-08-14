import React from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";
//producting listing page
const Amazon = ({ handleClick }) => {
  return (
    <div className="maincontainer">
    <h1>Our Products</h1>
    <section className="productlisting">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
    </div>
  );
};

export default Amazon;