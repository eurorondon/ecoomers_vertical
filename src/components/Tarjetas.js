import React from "react";

function CardGroupBootstrap() {
  return (
    <div className="mx-5  my-5">
      <h2 className="">¡Destaca tu negocio ya!</h2>
      <div className="row">
        <div className="col-md-4   ">
          <div
            className="  mx-auto my-2  "
            style={{
              width: "100%",
              borderRadius: "10px",
              maxWidth: "500px",
              background: "#f2f2f2",
            }}
          >
            <img
              className="card-img-top "
              src="https://via.placeholder.com/600x300"
              alt="Card image cap"
              style={{
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="btn btn-primary">Call to Action</button>
            </div>
          </div>
        </div>
        <div className="col-md-4   ">
          <div
            className="  mx-auto my-2  "
            style={{
              width: "100%",
              borderRadius: "10px",
              maxWidth: "500px",
              background: "#f2f2f2",
            }}
          >
            <img
              className="card-img-top "
              src="https://via.placeholder.com/600x300"
              alt="Card image cap"
              style={{
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="btn btn-primary">Call to Action</button>
            </div>
          </div>
        </div>
        <div className="col-md-4   ">
          <div
            className="  mx-auto my-2  "
            style={{
              width: "100%",
              borderRadius: "10px",
              maxWidth: "500px",
              background: "#f2f2f2",
            }}
          >
            <img
              className="card-img-top "
              src="https://via.placeholder.com/600x300"
              alt="Card image cap"
              style={{
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button className="btn btn-primary">Call to Action</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGroupBootstrap;
