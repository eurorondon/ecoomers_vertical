import React, { useState } from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import Slider from "../components/homeComponents/Slider";
import { useHistory } from "react-router-dom";
import TopSell from "../components/homeComponents/CarrucelCategoria3";
import Categorias from "../components/homeComponents/Categorias";
import Tarjetas from "../components/homeComponents/Tarjetas";
import CarrucelCategoria1 from "../components/homeComponents/CarrucelCategoria1";
import CarrucelCategoria2 from "../components/homeComponents/CarrucelCategoria2";
import CarrucelCategoria3 from "../components/homeComponents/CarrucelCategoria3";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;

  let history = useHistory();
  const currentPath = history.location.pathname;

  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {currentPath == "/" ? <Slider /> : null}

      <CarrucelCategoria1 />
      {/* <TopSell /> */}

      <Categorias />

      <CalltoActionSection />

      <Tarjetas />

      <CarrucelCategoria2 />
      <CarrucelCategoria3 />
      {/* <ShopSection
        keyword={keyword}
        pagenumber={pagenumber}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
