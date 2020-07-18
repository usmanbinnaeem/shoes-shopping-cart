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
        <div className="product__rating hide">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
    </Link>
  );
}

export default HomeDesign;
