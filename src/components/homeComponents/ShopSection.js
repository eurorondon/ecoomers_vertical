import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Rating from "./Rating";

import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import Grid from "../Grid";
import Pagination from "../Pagination";

const ShopSection = (props) => {
  // const { keyword, pagenumber } = props;
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const [category, setCategory] = useState();
  let history = useHistory();
  // const [filters, setFilters] = useState("");

  // PAGINACION DESDE REACT
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber, category));
  }, [dispatch, keyword, pagenumber, category]);

  console.log(category);

  const handleCategory = (e) => {
    if (category) {
      history.push(`/search/${category}`);
    } else {
      history.push("/");
    }
  };

  // const handleCategory = (e) => {
  //   const value = e.target.value;
  //   setCategory({
  //     [e.target.name]: value,
  //   });
  //   console.log(value);
  // };

  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <>
      {/* <Grid /> */}
      <div className="container">
        {loading ? (
          <div className="" style={{ margin: "200px 0px" }}>
            <Loading />
          </div>
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <select
              name="categoria"
              id=""
              onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled selected value="">
                {category ? category : "Categoria"}
              </option>
              <option value="">Todos</option>
              <option value="conservadores">Conservadores</option>
              <option value="vasos">Vasos</option>
              <option value="poncheras">Poncheras</option>
              <option value="aluminio">Aluminio</option>
              <option value="tobos">Tobos</option>
            </select>
            <Grid currentPosts={currentPosts} />
          </>
        )}

        <Pagination
          totalPosts={products.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />

        {/* Pagination */}
        {/* <Pagination
          pages={pages}
          page={page}
          keyword={keyword ? keyword : ""}
        /> */}
      </div>
    </>
  );
};

export default ShopSection;
