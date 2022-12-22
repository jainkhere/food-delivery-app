import React from "react";
import "./Toolbar.css";
import { FaHome, FaShoppingCart } from "react-icons/fa";

const toolbar = () => {
  const fullPath = window.location.href;
  const parts = fullPath.split("/");
  const path = parts[parts.length - 1];
  const showHomeAndCartButton =
    path === "home" || path === "menu" || path === "checkout";

  const handleHomeButtonClick = () => {
    window.location.href = "/home";
  };

  const handleCartButtonClick = () => {
    window.location.href = "/checkout";
  };

  return (
    <header className="toolbar">
      {showHomeAndCartButton && (
        <div onClick={handleHomeButtonClick}>
          <FaHome className="icon-home u-c-w" size={24} />
        </div>
      )}
      <div className="u-fs-1_5 u-c-w">Food For Everyone</div>
      {showHomeAndCartButton && (
        <div onClick={handleCartButtonClick}>
          <FaShoppingCart className="icon-cart u-c-w" size={24} />
        </div>
      )}
    </header>
  );
};

export default toolbar;
