import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import ShopIndex from "./components/ShopIndex";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Default from "./components/Default";
import Home from "./components/Home/Home";
import ShowHome from "./components/Home/ShowHome";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/showhome" element={<ShowHome />} />
        </Route>
        <Route path="/Shop" element={<Shop />}>
          <Route path="/" element={<ShopIndex />} />
        </Route>
        <Route path="/Details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Default />} />
      </Routes>
      {/* <Modal /> */}S
    </React.Fragment>
  );
};

export default App;
