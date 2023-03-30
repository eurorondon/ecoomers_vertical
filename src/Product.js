import React from "react";

export default function Product(props) {
  return (
    <div
      className="card mb-5 "
      style={window.innerWidth > 767 ? {} : { margin: "0px 1px" }}
    >
      <img className="product--image" src={props.url} alt="product image" />
      <h5 className="name">{props.name}</h5>
      <p className="price">{props.price}</p>
      <p className="">{props.description}</p>
      <p>
        <button
          className="call-action"
          style={{ fontSize: "clamp(0.8rem, 2vw, 1.5rem)" }}
        >
          Add to Cart
        </button>
      </p>
    </div>
  );
}
