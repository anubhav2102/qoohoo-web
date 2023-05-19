import React from "react";
import IMG from "../../assets/bootcamps.png";
import "./Bootcamps.css";

const Bootcamps = () => {
  return (
    <div>
      <div className="heading my-2">
        <h1><b>Bootcamps</b></h1>
      </div>
      <div class="category d-flex" >
        <div class="c1 mx-2">
          <b>Corporate</b>
        </div>
        <div class="c2 mx-2">
          <b>Groups</b>
        </div>
        <div class="c3 mx-2">
          <b>Upcoming</b>
        </div>
      </div>
      <div className="description d-flex">
        <div>
          <h1>Amet minim mollit</h1>
          <p>
            <b>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.</b>
          </p>
          <button className="button_join"><b>Join Now →</b></button>
        </div>
        <div className="image">
          <img src={IMG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
