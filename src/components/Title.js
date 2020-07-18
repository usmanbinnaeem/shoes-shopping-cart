import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="col-10 mx-auto my-2 mb-5 text-center text-title">
      <h1>
        {name} {title}
      </h1>
    </div>
  );
}
