import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const Grid = () => {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const navigatehandle = (id) => {
    <Navigate to={`/products/${id}`} />;
  };

  return (
    <>
      <div className="shoptext" style={{}}>
        <div className="grid my-2">
          {products.map((product) => (
            <div className=" mb-5" style={{ flex: "1" }}>
              <Link to={`/products/${product._id}`}>
                <div
                  className="cardpen"
                  onClick={() => {
                    navigatehandle(product._id);
                  }}
                  style={{
                    backgroundImage: ` url(${product.image[0]})`,
                    // aqui debe cambiarse cuando se cree el responsive OJO y tambien en css grid style!!
                    backgroundSize: "220px auto",
                    backgroundRepeat: "no-repeat",
                    // aqui debe cambiarse cuando se cree el responsive OJO !!
                    minHeight: "200px",
                  }}
                />
              </Link>

              <div>
                <Link to={`/products/${product._id}`}>
                  <div className="card__details d-flex justify-content-between align-items-end ">
                    {product.name} <h5>${product.price}</h5>
                  </div>
                  <button className="btn btn-primary">Comprar</button>
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
