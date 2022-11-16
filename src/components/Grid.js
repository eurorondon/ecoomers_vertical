import React from "react";
import { useSelector } from "react-redux";

const Grid = () => {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  console.log(products);
  return (
    <>
      <div className="">
        <div className="grid my-5">
          {products.map((product) => (
            <div
              className="cardpen"
              style={{
                backgroundImage:
                  "url(https://images1.vinted.net/t/02_0054a_2M5XXSEdM7i4rJwfNjKYDY6b/f800/1666960795.jpeg?s=c69fb78425c7c2bba4ca40af123e20bfaf13976d)",
              }}
            >
              <div className="card__details">Jobs To Be Done Workseet</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Grid;
