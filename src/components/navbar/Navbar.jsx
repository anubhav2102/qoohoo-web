import React, { useState } from "react";
import IMG from "../../assets/annette.png";
import IMG1 from "../../assets/burger.png";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="background">
      <nav className="navbar navbar-expand-lg navbar-light row ">
        <div className="col-lg-1 col-sm-12"></div>
        <div className="col-lg-1 col-sm-12">
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <img
              src={IMG}
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
              alt="Your Name"
              style={{ borderRadius: "100%" }}
            />
            <span className="d-sm-none d-md-inline">Annette Black</span>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          style={{ textDecoration: "none", border: "none" }}
        >
          <span>
            <img src={IMG1} alt="" />
          </span>
        </button>
        <div className="col-4"></div>
        <div className="col-4">
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto my-2">
              <li className="nav-item mx-2">
                <a className="nav-link">
                  <b>Programs</b>
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link">
                  <b>Retreats</b>
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link">
                  <b>Blogs</b>
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link">
                  <b>Contact us</b>
                </a>
              </li>
              <li className="nav-item mx-2 px-2 login_div">
                <a className="nav-link">
                  <>Login</>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
