import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Rating from "./Rating";

import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import Grid from "../Grid";
import Pagination from "../Pagination";
import ReactPaginate from "react-paginate";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

const ShopSection = (props) => {
  // const { keyword, pagenumber } = props;
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const [category, setCategory] = useState();
  let history = useHistory();
  // const [filters, setFilters] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = products.length;

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    scroll(0, 0);
  };

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber, category));
  }, [dispatch, keyword, pagenumber, category]);

  useEffect(() => {
    // Función que se ejecuta al inicio para establecer el valor inicial, esta funcion es para variar la cantidad de tarjetas o productos que se muestran dependeiendo del responsive o query screen

    function handleResize() {
      if (window.innerWidth < 1400) {
        setPostsPerPage(10);
      }
      if (window.innerWidth < 1200) {
        setPostsPerPage(12);
      }
    }
    handleResize(); // Llamamos a la función al inicio

    window.addEventListener("resize", handleResize); // Agregamos el event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Eliminamos el event listener
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage));
  }, [currentPage]);

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    if (storedPage) {
      setCurrentPage(JSON.parse(storedPage));
    } else {
      setCurrentPage(location.state?.currentPage || 0);
    }
  }, [location.state?.currentPage]);

  const handleCategoria = (e) => {
    const value = e.target.value;
    setCategory(value);
    // setCurrentPage(0);
    if (value === "") {
      history.push(`/`);
    } else history.push(`/category/${value}`);
  };

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
            <select name="categoria" id="" onChange={handleCategoria}>
              <option disabled selected value="">
                {category ? category : "Categoria"}
              </option>
              <option value="">Todos</option>
              <option value="Conservadores">Conservadores</option>
              <option value="Vasos">Vasos</option>
              <option value="Poncheras">Poncheras</option>
              <option value="Aluminio">Aluminio</option>
              <option value="Tobos">Tobos</option>
              <option value="Bigmark">Bigmark</option>
              <option value="Inplast">Inplast</option>
              <option value="Adonis">Adonis</option>
              <option value="IPM">IPM</option>
            </select>
            <Grid currentPosts={currentPosts} />
          </>
        )}

        <ReactPaginate
          previousLabel={<ArrowBack />}
          nextLabel={<ArrowForward />}
          totalPosts={products.length}
          pageCount={Math.ceil(totalPosts / postsPerPage)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2} // Aquí estableces el número de botones de página a mostrar
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={currentPage}
        />
      </div>
    </>
  );
};

export default ShopSection;
