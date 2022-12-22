import React from "react";
import { FaSearch } from "react-icons/fa";
import "./styles/SearchBar.css";

const SearchBar = () => {
  /* eslint-disable */
  return (
    <div class="search-bar-wrapper">
      <input
        type="text"
        id="search-bar"
        name="search-bar"
        placeholder="Search"
        autocomplete="off"
      />
      <FaSearch className="icon-search" />
    </div>
  );
  /* eslint-enable */
};

export default SearchBar;
