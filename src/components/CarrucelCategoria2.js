import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../Product";

import "../topsell.css";
import { useDispatch, useSelector } from "react-redux";
import { listProductCategoria2 } from "../Redux/Actions/ProductActions";
import { useEffect } from "react";
import Loading from "./LoadingError/Loading";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 6,
    slidesToSlide: 6,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 2,
  },
};

export default function CarrucelCategoria2() {
  const dispatch = useDispatch();

  const productListCategoria2 = useSelector(
    (state) => state.productListCategoria2
  );

  const { products } = productListCategoria2;

  useEffect(() => {
    dispatch(listProductCategoria2());
  }, [dispatch]);

  const product = products
    ? products.map((item) => (
        <Product
          name={item.name}
          url={item.image[0]}
          price={item.price}
          // description={item.description}
        />
      ))
    : null;

  return (
    <>
      {products && products.length > 1 ? (
        <div className={window.innerWidth > 767 ? "mx-5" : ""}>
          <h2 className=".topsell-title">Lo mas vendido</h2>
          <Carousel showDots={true} responsive={responsive}>
            {product}
          </Carousel>
        </div>
      ) : (
        <div
          className="d-flex  align-items-center justify-content-center"
          style={{ height: "400px" }}
        >
          <Loading className="" />
        </div>
      )}
    </>

    // <h1>hola</h1>
  );
}
