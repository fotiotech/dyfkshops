"use client";

import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import "./App.css";
import ReactPaginate from "react-paginate";

function page() {
  const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => {
      return (
        <div key={index} className="user">
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div>
        <div className="flex items-center w-full p-2 border-b overflow-hidden">
          <div>
            <p>Filter By:</p>
          </div>
          <div>
            <ul className=" whitespace-nowrap px-2">
              <li className=" inline-block px-1">Category</li>
              <li className=" inline-block px-1">Price</li>
              <li className=" inline-block px-1">Size</li>
              <li className=" inline-block px-1">Weight</li>
              <li className=" inline-block px-1">Color</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="App">
        {displayUsers}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}

export default page;
