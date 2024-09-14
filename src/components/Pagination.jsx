import React from "react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="text-center w-2/3">
      {pageNumbers.map((pgNo) => (
        <button onClick={() => paginate(pgNo)} className="text-2xl p-4 border mr-4 w-16 h-16 hover:scale-105 hover:bg-white hover:text-black duration-75 focus:scale-105 focus:bg-white focus:text-black">{pgNo}</button>
      ))}
    </nav>
  );
}

export default Pagination;
