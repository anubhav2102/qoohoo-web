import React from 'react'
import IMG1 from "../../assets/header profile.png";
import IMG2 from "../../assets/right sign.png";
import "./Header.css";

const Header = () => {
  return (
    <div className='background'>
      <div className='d-flex'>
        <div>
          <img src={IMG1} alt="" />
          <div className='d-flex'>
          <div className='empty_div'>1</div>
          <div className='empty_div'>1</div>
          <div className='empty_div'>1</div>
          </div>
        </div>
        <div>
          <h1><span style={{color: "#FB9B43"}}>Get ready</span> <span style={{color: "#FFFFFF"}}>to grow <br /> with us</span> ⭐️</h1>
          <h5 style={{color: "#FFFFFF"}}>Start with us today</h5>
          <button className='button_view'><b>View all courses ⟶</b></button>
        </div>
      </div>
      <div className='d-flex'>
        <div>
          <div className='img_div'><img src={IMG2} alt="" /></div>
          <div style={{color: "#FFFFFF"}}>500+ happy customers</div>
        </div>
        <div>
        <div className='img_div'><img src={IMG2} alt="" /></div>
          <div style={{color: "#FFFFFF"}}>Learn as you go</div>
        </div>
        <div>
        <div className='img_div'><img src={IMG2} alt="" /></div>
          <div style={{color: "#FFFFFF"}}>Self-paced learning</div>
        </div>
      </div>
    </div>
  )
}

export default Header
