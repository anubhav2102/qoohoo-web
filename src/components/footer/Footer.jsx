import React from 'react';
import IMG from "../../assets/footer.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer container-fluid row'>
      <div className="fs-2 col-lg-4 my-2">
        <h6 className='d-inline'>Powered by </h6>
        <img src={IMG} alt="" />
      </div>
      <div className='col-lg-4'></div>
      <div className="fs-2 col-lg-4 text-lg-end my-2">
        <h6 className='d-inline mx-2'>Privacy Policy</h6>
        <h6 className='d-inline mx-2'>Terms & Conditions</h6>
      </div>
    </div>
  );
};

export default Footer;
