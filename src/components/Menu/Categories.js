import React from "react";
import "./styles/Categories.css";

const Categories = () => {
  /* eslint-disable */
  return (
    <div className="categories-selector">
      <button type="button" className="more">
        Pizza
      </button>
      <button type="button" className="more">
        Pasta
      </button>
      <button type="button" className="more">
        Sides
      </button>
    </div>
  );
  /* eslint-enable */
};

export default Categories;
