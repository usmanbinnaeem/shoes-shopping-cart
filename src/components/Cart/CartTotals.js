import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function CartTotals({ value }) {
  const { cartSubTotal } = value;

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button />
            </Link>
            <h5>
              Subtotal:
              <strong> ${cartSubTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
