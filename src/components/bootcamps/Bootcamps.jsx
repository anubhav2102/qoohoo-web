import React from "react";
import IMG from "../../assets/bootcamps.png";
import "./Bootcamps.css";

const Bootcamps = () => {
  return (
    <div className="bootcamps">
      <div className="heading my-2">
        <h1 className="text-center"><b>Bootcamps</b></h1>
      </div>
      <div className="category row my-5" >
        <div className="c1 col-3 mx-2">
          <b>Corporate</b>
        </div>
        <div className="c2 col-3 mx-2">
          <b>Groups</b>
        </div>
        <div className="c3 col-3 mx-2">
          <b>Upcoming</b>
        </div>
      </div>
      <div className="description row">
        <div className="col-7 px-5">
          <h1><b>Amet minim mollit</b></h1>
          <p>
            <b>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.</b>
          </p>
          <button className="button_join amet_minim"><b>Join Now →</b></button>
        </div>
        <div className="image col-5 px-5">
          <img src={IMG} height={328} width={423} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;