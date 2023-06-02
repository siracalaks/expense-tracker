import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar justify-content-center align-items-baseline container-fluid gap-5  text-white py-4 mb-5 border-bottom">
          <h2 className="fw-bolder">Expense Tracker</h2>
          <div class="vr"></div>
          <h2><Link className="nav-link fw-bold" to="/">Home</Link></h2>
      </nav>
    </>
  );
};

export default Header;
