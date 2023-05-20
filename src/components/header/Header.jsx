import React from "react";
import IMG1 from "../../assets/header profile.png";
import IMG2 from "../../assets/right sign.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="background_header">
      <div className="header">
        <div className="row">
          <div className="col-lg-6 col-sm-12 ">
            <img className="img_dim" src={IMG1} alt="" />
            <div className="row row_header">
              <div className="col-lg-5 col-sm-4"></div>
              <div className="col-lg-1 col-sm-4">
                <div className="empty_div"></div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="col-lg-1 col-sm-4">
                <div className="empty_div"></div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="col-lg-1 col-sm-4">
                <div className="empty_div"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 headings_header">
            <h1>
              <span style={{ color: "#FB9B43" }}>Get ready</span>{" "}
              <span style={{ color: "#FFFFFF" }}>
                to grow <br /> with us
              </span>{" "}
              ⭐️
            </h1>
            <br />
            <h5 style={{ color: "#FFFFFF" }}>Start with us today</h5>
            <br />
            <button className="button_view">
              <b>View all courses →</b>
            </button>
          </div>
        </div>
      </div>
      <div className="row header">
        <div className="col-md-4 col-sm-4">
          <div className="img_div py-4">
            <img src={IMG2} alt="" />
          </div>
          <div className="headline_header">
            <>500+ happy customers</>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="img_div py-4">
            <img src={IMG2} alt="" />
          </div>
          <div className="headline_header">
            <>Learn as you go</>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="img_div py-4">
            <img src={IMG2} alt="" />
          </div>
          <div className="headline_header">
            <>Self-paced learning</>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
