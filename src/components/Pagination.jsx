import React from "react";

function Pagination({ postsPerPage, totalPosts }) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="text-center w-2/3">
      {pageNumbers.map((pgNo) => (
        <button className="text-2xl p-4 border mr-4 w-16 h-16 hover:scale-105 hover:bg-white hover:text-black duration-75">{pgNo}</button>
      ))}
    </nav>
  );
}

export default Pagination;
