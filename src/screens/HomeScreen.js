import React, { useState } from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;

  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />

      <ShopSection
        keyword={keyword}
        pagenumber={pagenumber}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
