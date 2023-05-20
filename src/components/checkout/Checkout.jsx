import React from "react";
import IMG1 from "../../assets/toledo.png";
import IMG2 from "../../assets/pembrone.png";
import IMG3 from "../../assets/naperville.png";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div style={{ background: "#C1CFFF" }} className="checkout">
      <div className="frame_gap">
        <h1>
          <b>Checkout my courses</b>
        </h1>
      </div>
      <div className="row card_boxes">
        <div class="card box1  col-md-4 col-sm-12 mx-4 my-2">
          <img
            class="card-img-top card_image "
            src={IMG1}
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">
              <b>Toledo</b>
            </h5>
            <button className="button_join_checkout">
              <b>Join Now →</b>
            </button>
          </div>
        </div>
        <div class="card box2  col-md-4 col-sm-12 mx-4 my-2">
          <img
            class="card-img-top card_image"
            src={IMG2}
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">
              <b>Pembroke Pines</b>
            </h5>
            <button className="button_join_checkout">
              <b>Join Now →</b>
            </button>
          </div>
        </div>
        <div class="card box3 col-md-4 col-sm-12 mx-4 my-2">
          <img
            class="card-img-top card_image "
            src={IMG3}
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">
              <b>Naperville</b>
            </h5>
            <button className="button_join_checkout">
              <b>Join Now →</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
