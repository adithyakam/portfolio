import React from "react";
import { ReactComponent as Svg1 } from "../../assets/html-5.svg";
import { ReactComponent as Svg2 } from "../../assets/css3.svg";
import { ReactComponent as Svg3 } from "../../assets/github.svg";
import { ReactComponent as Svg4 } from "../../assets/java.svg";
import { ReactComponent as Svg5 } from "../../assets/nodejs.svg";
import { ReactComponent as Svg6 } from "../../assets/npm.svg";
import { ReactComponent as Svg7 } from "../../assets/react.svg";
import { ReactComponent as Svg8 } from "../../assets/js.svg";

const Skills = () => {
  return (
    <div className="container w-75">
      <div className="container mt-4 center">
        <h1>Skills</h1>
        <div class="row">
          <div class="col-4 col-md-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg1 />
              <label>HTML</label>
            </div>
          </div>
          <div class="col-4 col-md-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg2 />
              <label>HTML</label>
            </div>
          </div>
          <div class="col-4 col-md-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg3 />
              <label>HTML</label>
            </div>
          </div>
          <div class="col-4 col-md-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg4 />
              <label>HTML</label>
            </div>
          </div>
          <div class="col-4 col-md-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg5 />
              <label>HTML</label>
            </div>
          </div>
          <div class="col-4 col-md-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg6 />
              <label>HTML</label>
            </div>
          </div>
          <div class="col-4 col-md-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg7 />
              <label>HTML</label>
            </div>
          </div>
          <div class="col-4 col-md-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg8 />
              <label>HTML</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
