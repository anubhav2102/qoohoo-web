import React from 'react'
import IMG from "../../assets/footer.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer container-fluid d-flex my-2'>
      <div className="sides left-part d-flex">
        <h5>Powered by </h5>
        <img src={IMG} alt="" />
      </div>
      <div className="sides right-part d-flex">
        <span>
          <h5>Privacy Policy</h5>
          <h5>Terms & Conditions</h5>
        </span>
      </div>
    </div>
  )
}

export default Footer
