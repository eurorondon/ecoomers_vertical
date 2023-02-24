import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const Grid = ({ currentPosts }) => {
  // const productList = useSelector((state) => state.productList);
  // const { products } = productList;

  let products = currentPosts;

  const navigatehandle = (id) => {
    <Navigate to={`/products/${id}`} />;
  };

  return (
    <>
      <div className="shoptext mb-5" style={{}}>
        <div className="grid my-2">
          {products.map((product) => (
            <div className="  " style={{ flex: "1" }}>
              <Link to={`/products/${product._id}`}>
                <div
                  className="cardpen"
                  style={{
                    backgroundImage: ` url(${product.photo[0].url})`,
                    // aqui debe cambiarse cuando se cree el responsive OJO y tambien en css grid style!!
                    backgroundSize: "220px auto",
                    backgroundRepeat: "no-repeat",
                    // aqui debe cambiarse cuando se cree el responsive OJO !!
                    minHeight: "200px",
                    position: "relative",
                  }}
                >
                  <span
                    className="rounded bg-secondary"
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      right: "0px",
                      zIndex: "3",
                      color: "white",
                      padding: "0px 10px",
                      background: "",
                    }}
                  >
                    {product.price}$
                  </span>
                </div>
                <div
                  className=""
                  onClick={() => {
                    navigatehandle(product._id);
                  }}
                />
              </Link>

              <div>
                <Link to={`/products/${product._id}`}>
                  <div
                    className="d-flex flex-column "
                    style={{ position: "relative", height: "85px" }}
                  >
                    <div className="card__details ms-2  ">{product.name}</div>

                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-primary  "
                        style={{
                          width: "100%",
                          position: "absolute",
                          bottom: "0px",
                          zIndex: "2",
                        }}
                      >
                        Información
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Grid;

// {
//   products.map((product) => (
//     <div className="shop col-6 col-xl-4 col-lg-6" key={product._id}>
//       <div className="border-product">
//         <Link to={`/products/${product._id}`}>
//           <div className="shopBack">
//             <img src={product.image[0]} alt={product.name} />
//           </div>
//         </Link>

//         <div className="shoptext">
//           <p>
//             <Link to={`/products/${product._id}`}>{product.name}</Link>
//           </p>

//           <Rating
//             value={product.rating}
//             text={`${product.numReviews} reviews`}
//           />
//           <h3>${product.price}</h3>
//         </div>
//       </div>
//     </div>
//   ));
// }
