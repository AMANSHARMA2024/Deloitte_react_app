import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/productlisting.css";
 
const Amazon = ({ handleClick, handleClickwishlist }) => {
  const [sortCriteria, setSortCriteria] = useState("default");
 
  // Sorting function
  const sortProducts = (products, criteria) => {
    switch (criteria) {
      case "price-asc":
        return products.sort((a, b) => a.price - b.price);
      case "price-desc":
        return products.sort((a, b) => b.price - a.price);
      case "title-asc":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return products.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
  };
 
  const sortedList = sortProducts([...list], sortCriteria);
 
  return (
    <div className="maincontainer">
      <h1>Our Products</h1>
      <div className="sort-controls">
        <label htmlFor="sort">Sort by: </label>
        <select
          id="sort"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="title-asc">Product Name: A to Z</option>
          <option value="title-desc">Product Name: Z to A</option>
        </select>
      </div>
      <section className="productlisting">
        {sortedList.map((item) => (
          <Cards
            key={item.id}
            item={item}
            handleClick={handleClick}
            handleClickwishlist={handleClickwishlist}
          />
        ))}
      </section>
    </div>
  );
};
 
export default Amazon;