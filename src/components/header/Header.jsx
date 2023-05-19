import React from "react";
import IMG1 from "../../assets/header profile.png";
import IMG2 from "../../assets/right sign.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="background_header">
      <div className="header">
        <div className="row">
          <div className="col-md-6 col-sm-12 ">
            <img width="auto" src={IMG1} alt="" />
            <div className="row" style={{ marginTop:'25px',marginLeft: "80px"}}>
              <div className="col-5"></div>
              <div className="col-1">
                <div className='empty_div'></div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="col-1">
                <div className='empty_div'></div>
              </div>&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="col-1">
                <div className='empty_div'></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 " style={{paddingTop:'135px'}}>
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
        <div className="col-md-4 col-sm-12">
          <div className="img_div py-4" >
            <img src={IMG2} alt="" />
          </div>
          <div style={{ color: "#FFFFFF",marginTop: "15px",fontSize: "30px" }}><>500+ happy customers</></div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="img_div py-4">
            <img src={IMG2} alt="" />
          </div>
          <div style={{ color: "#FFFFFF",marginTop: "15px" ,fontSize: "30px"}}><>Learn as you go</></div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="img_div py-4">
            <img src={IMG2} alt="" />
          </div>
          <div style={{ color: "#FFFFFF", marginTop: "15px",fontSize: "30px" }}><>Self-paced learning</></div>
        </div>
      </div>
    </div>
  );
};

export default Header;