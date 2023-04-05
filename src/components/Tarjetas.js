import React from "react";

function CardGroupBootstrap() {
  return (
    <div className={window.innerWidth > 630 ? "mx-5 my-5" : " my-5"}>
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
              src="https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680660017/1_sf7ir8.png"
              alt="Card image cap"
              style={{
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Productos <br />
                <span
                  className="text-danger font-weight-bold"
                  style={{ fontWeight: "bold" }}
                >
                  electronicos
                </span>
              </h5>
              <p className="card-text">
                Los mejores precios mayoristas para compras por catalogo.
              </p>
              <button className="btn btn-danger">Ver más</button>
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
              src="https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680660017/2_lhknp0.png"
              alt="Card image cap"
              style={{
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Descarga nuestro <br /> catalogo
                <span
                  className="text-danger font-weight-bold"
                  style={{ fontWeight: "bold" }}
                >
                  {" "}
                  mayorista
                </span>
              </h5>

              <p className="card-title text-danger"></p>
              <p className="card-text">
                Los mejores precios mayoristas para compras por catalogo.
              </p>
              <button className="btn btn-danger">Ver más</button>
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
              src="https://res.cloudinary.com/dpgpmqo6c/image/upload/v1680660017/3_c7oawi.png"
              alt="Card image cap"
              style={{
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Todos nuestros <br />
                <span
                  className="text-danger font-weight-bold"
                  style={{ fontWeight: "bold" }}
                >
                  productos
                </span>
              </h5>
              <p className="card-text">
                Los mejores precios mayoristas para compras por catalogo.
              </p>
              <button className="btn btn-danger">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGroupBootstrap;
