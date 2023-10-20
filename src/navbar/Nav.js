import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav(props) {
  return (
    <nav>
      <div className="input">
        <input
          type="text"
          placeholder="Enter your search"
          value={props.query}
          onChange={props.handleInputChange}
        />
      </div>

      <div className="Links">
        <Link to="/" exact>
          <FiHeart className="nav-icons" />
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>
        <Link to="/">
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
