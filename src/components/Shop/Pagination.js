import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatedPages = []; // [1 2 3 4 5 6 7 8 ]
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className={classes.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage((prev) => prev - 1);
        }}
      >
        Prev
      </button>
      {generatedPages.map((page) => (
        <div
          onClick={() => {
            setCurrentPage(page);
          }}
          key={page}
          className={`${
            currentPage === page
              ? `${classes["page"]} ${classes["active-page"]}`
              : classes.page
          }`}
        >
          {page}
        </div>
      ))}
      <button
        disabled={currentPage === pages}
        onClick={() => {
          setCurrentPage((prev) => prev + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
