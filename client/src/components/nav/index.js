import React from "react";
import NavStyles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className={NavStyles.mainNav}>
      <div>
        <h3>MERN Demo Login System</h3>
      </div>
      <div>
        <i class="fa-solid fa-user"></i>
      </div>
    </nav>
  );
}

export default Nav;
