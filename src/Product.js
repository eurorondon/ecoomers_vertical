import React from "react";

export default function Product(props) {
  return (
    <div
      className="mb-4 "
      style={window.innerWidth > 767 ? {} : { margin: "0px 5px" }}
    >
      <div
        style={
          window.innerWidth > 767
            ? { margin: "auto 1rem" }
            : { margin: "0px 1px" }
        }
      >
        <div className="card">
          <img className="product--image" src={props.url} alt="product image" />

          <p className="price bg-dark px-2 rounded text-white m-1 ">
            {props.price}
          </p>
        </div>
        <h5 className="name mt-2">{props.name}</h5>
        <p className="">{props.description}</p>
        <p>
          {/* <button
          className="call-action"
          style={{ fontSize: "clamp(0.8rem, 2vw, 1.5rem)" }}
        >
          Add to Cart
        </button> */}
        </p>
      </div>
    </div>
  );
}
