import React, { Component, Fragment } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";
import Title from "./Title";
import "../App.css";

export default class ShopIndex extends Component {
  render() {
    return (
      <Fragment>
        <div className="shop">
          <img
            className="shop__image"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0/w_718,c_limit/c2b316d7-2dbe-41fb-8e8b-8ec824760007/nike-just-do-it.jpg"
            alt=""
          />
        </div>
        <div className="contain">
          <div className="row">
            <Title name="Buy" title="Now!" />
          </div>
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </Fragment>
    );
  }
}
