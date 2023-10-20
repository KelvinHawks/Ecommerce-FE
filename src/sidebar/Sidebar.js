import React from "react";
import "./Sidebar.css";
import Category from "./category/Category";
import Color from "./colors/Color";
function Sidebar({ handleChange }) {
  return (
    <section className="sidebar">
      <div className="shoppingCart">🛒</div>
      <Category handleChange={handleChange} />
      <Color handleChange={handleChange} />
    </section>
  );
}

export default Sidebar;
