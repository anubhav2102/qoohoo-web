import React, { useState } from "react";
import IMG from "../../assets/annette.png";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="background">
      <nav className="navbar navbar-expand-lg navbar-light row ">
        <div className="col-1"></div>
        <div className="col-1">
          <a className="navbar-brand" href="#home">
            <img
              src={IMG}
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
              alt="Your Name"
              style={{ borderRadius: "100%" }}
            />
            {" Annette Black"}
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="toggle_button">
            <b>| | |</b>
          </span>
        </button>
        <div className="col-4"></div>
        <div className="col-4">
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <a className="nav-link">Programs</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link">Retreats</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link">Blogs</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link">Contact us</a>
            </li>
            <li className="nav-item mx-2 px-2 login_div">
              <a className="nav-link">Login</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
