import React from "react";
import { Navigate } from "react-router";
import Product from "./ProductGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Grid = ({ currentPosts }) => {
  // const productList = useSelector((state) => state.productList);
  // const { products } = productList;

  let products = currentPosts;

  const navigatehandle = (id) => {
    <Navigate to={`/products/${id}`} />;
  };

  const product = products
    ? products.map((item) => (
        <Product
          url={item.image[0]}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))
    : null;

  return (
    <>
      <div className="  mb-5 " style={{}}>
        <div className="grid my-2">{product}</div>
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
