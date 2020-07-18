import React from "react";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import RemoveTwoToneIcon from "@material-ui/icons/RemoveTwoTone";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-center text-capitalize">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt={title}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: $</span>
        {price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                decrement(id);
              }}
            >
              <RemoveTwoToneIcon />
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                increment(id);
              }}
            >
              <AddTwoToneIcon />
            </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon">
          <DeleteTwoToneIcon onClick={() => removeItem(id)} />
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <strong>Item total: ${total}</strong>
      </div>
    </div>
  );
}
