import React from "react";

import "./Pagination.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handlebutton = (page) => {
    setCurrentPage(page);
    scroll(0, 0);
  };

  return (
    <div className="pagination my-5 ">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => handlebutton(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
