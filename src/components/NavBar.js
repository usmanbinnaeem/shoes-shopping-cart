import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import { useStateValue } from "./Context/StateProvider";

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  //   const [{ basket }] = useStateValue();
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="navbar__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="navbar__search">
        <input type="text" className="navbar__searchbar" />
        <SearchIcon className="navbar__searchIcon" />
      </div>
      <div className="navbar__menu">
        <Link to="/" className="navbar__link hide">
          <div className="navbar__option">
            <strong className="bold">Home</strong>
          </div>
        </Link>

        <Link to="/shop" className="navbar__link hide">
          <div className="navbar__option">
            <strong className="bold">Shop</strong>
          </div>
        </Link>

        <Link to="/cart" className="navbar__link">
          <div className="navbar__optionBasket">
            <ShoppingBasketIcon />
            {/* <span className="navbar__optionLineTwo navbar__BasketCount">
              {cart?.length}
            </span> */}
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
