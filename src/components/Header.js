import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import { listProduct } from "../Redux/Actions/ProductActions";
import { Assessment, Search, ShoppingCart } from "@material-ui/icons";
import CategoriaSelector from "./CategoriaSelector";
import Announcement from "./../components/Announcement";

const Header = ({ setCurrentPage }) => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { category } = useParams();

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    dispatch(listProduct(category));
  }, [dispatch, category]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  const handleCategoria = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    if (value === "") {
      history.push(`/`);
    } else {
      history.push(`/category/${value}`);
      setCurrentPage(0); // reseteamos la página al cambiar de categoría
    }
  };

  return (
    <div>
      {/* Top Header */}
      <div className=" pc-header">
        <div className=" Announcement  ">
          <div className="mx-4">
            <div className="row">
              <div className="col-4 d-flex align-items-center  justify-content-start   ">
                <Link className="navbar-brand" to="/">
                  <img
                    alt="logo"
                    src="/images/logo.png"
                    className="rounded-circle border border-white border-2 bg-danger"
                    style={{ maxWidth: "100px" }}
                  />
                </Link>

                <CategoriaSelector
                  setSelectedCategory={setSelectedCategory}
                  setCurrentPage={setCurrentPage}
                />

                <div
                  className="d-flex mx-1 text-white button "
                  style={{ border: "none" }}
                >
                  <Assessment /> <span>Emprende</span>
                </div>
              </div>
              <div className="col-md-4 col-8 d-flex align-items-center justify-content-center pb-2">
                <form onSubmit={submitHandler} className="input-group">
                  {/* <form className="input-group"> */}
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Buscar"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button ">
                    <Search />
                  </button>
                </form>
              </div>

              <div className="col-md-4 d-flex align-items-center justify-content-end Login-Register ">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hola, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Perfil
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/register" className=" button text-white my-auto">
                      Registrar
                    </Link>
                    <Link to="/login" className=" button text-white my-auto">
                      Login
                    </Link>
                  </>
                )}

                <Link to="/cart">
                  <ShoppingCart className="text-white" />
                  {/* <i className="fas fa-shopping-bag text-white"></i> */}
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Announcement className="" />
      </div>

      {/* Header */}
      {/* <div className="header"> */}
      <div className="">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container mb-5 ">
              <div className="row ">
                {/* <div className="col-6 d-flex align-items-center">
                  <a href="#" onclick="location.reload();">
                    <img
                      alt="logo"
                      src="/images/logo.png"
                      className="rounded-circle border border-danger bg-danger"
                      style={{ maxWidth: "100px" }}
                      onClick={handleLogoClick}
                    />
                  </a>
                </div> */}

                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img
                      alt="logo"
                      src="/images/logo.png"
                      className="rounded-circle border border-danger bg-danger"
                      style={{ maxWidth: "200px" }}
                    />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Perfil
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandler}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          Registrar
                        </Link>
                      </div>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group">
                    {/* <form className="input-group"> */}
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Buscar"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      Buscar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          {/* <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img
                    alt="logo"
                    src="/images/logo.png"
                    className="rounded-circle border border-danger bg-danger"
                    style={{ maxWidth: "200px" }}
                  />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Buscar"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    Buscar
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hola, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Perfil
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/register">Registrar</Link>
                    <Link to="/login">Login</Link>
                  </>
                )}

                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
