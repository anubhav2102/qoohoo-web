import React from "react";
import IMG from "../../assets/bootcamps.png";
import "./Bootcamps.css";

const Bootcamps = () => {
  return (
    <div className="bootcamps">
      <div className="heading">
        <h1 className="text-center">
          <b>Bootcamps</b>
        </h1>
      </div>
      <div className="category row">
        <div className="c1 col-lg-3 col-md-4 col-sm-12 mx-4 my-2">
          <b>Corporate</b>
        </div>
        <div className="c2 col-lg-3 col-md-4 col-sm-12 mx-4 my-2">
          <b>Groups</b>
        </div>
        <div className="c3 col-lg-3 col-md-4 col-sm-12 mx-4 my-2">
          <b>Upcoming</b>
        </div>
      </div>
      <div className="description row">
        <div className="col-lg-7 col-md-12 col-sm-12 px-5">
          <h1>
            <b>Amet minim mollit</b>
          </h1>
          <p className="para_desc">
            <b>
              Nulla Lorem mollit cupidatat irure. Laborum magna <br /> nulla
              duis ullamco cillum dolor. Voluptate <br /> exercitation
              incididunt aliquip deserunt <br />
              reprehenderit elit laborum.
            </b>
          </p>
          <button className="button_join amet_minim">
            <b>Join Now →</b>
          </button>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 px-5">
          <img src={IMG} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
