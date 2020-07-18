import React from "react";

import "./Shop.css";
import { Outlet } from "react-router";

export default function Shop() {
  return (
    <div className="shop">
      <Outlet />
    </div>
  );
}
