import React from "react";
import "./HomeDesign.css";
import { Link } from "react-router-dom";

function HomeDesign({ id, title, image, price, rating }) {
  return (
    <Link to="/shop" className="product home__link">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="" />
    </Link>
  );
}

export default HomeDesign;
