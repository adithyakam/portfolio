import React from "react";
import { ReactComponent as Svg1 } from "../../assets/html-5.svg";
import { ReactComponent as Svg2 } from "../../assets/css3.svg";
import { ReactComponent as Svg3 } from "../../assets/github.svg";
import { ReactComponent as Svg4 } from "../../assets/java.svg";
import { ReactComponent as Svg5 } from "../../assets/nodejs.svg";
import { ReactComponent as Svg6 } from "../../assets/npm.svg";
import { ReactComponent as Svg7 } from "../../assets/react.svg";
import { ReactComponent as Svg8 } from "../../assets/js.svg";
import { ReactComponent as Svg9 } from "../../assets/expressjs.svg";

const Skills = () => {
  return (
    <div className="container w-75">
      <div className="container mt-5 center w-75">
        <h1>Skills</h1>
        <div class=" row row-cols-2 row-cols-sm-3 row-cols-md-3">
          <div class=" col my-2 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg1 />
              <label>HTML</label>
            </div>
          </div>
          <div class=" col my-2 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg2 />
              <label>HTML</label>
            </div>
          </div>
          <div class=" col my-2 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg3 />
              <label>HTML</label>
            </div>
          </div>
          <div class=" col my-2 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg4 />
              <label>HTML</label>
            </div>
          </div>
          <div class=" col my-2 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg5 />
              <label>HTML</label>
            </div>
          </div>
          <div class=" col my-2 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg6 />
              <label>HTML</label>
            </div>
          </div>
          <div class=" col my-2 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg7 />
              <label>HTML</label>
            </div>
          </div>
          <div class=" col my-2 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg8 />
              <label>HTML</label>
            </div>
          </div>
          <div class=" col my-2 ">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg9 />
              <label>ExprressJS</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Experience</h1>
        <div className="w-50 container">
          <div className="my-2 text-left">
            <h3>Program Analyst </h3>
            <h5>Cognizant</h5>
            <h5>2018 - present</h5>
          </div>
          <div className="my-2 text-nowrap" style={{ width: "8rem" }}>
            <p>
              Iam working as Program Analyst in Cognizant for 1 and half yrsnow.
              <br />
              Inhere my job is to solve the customer related issues like
              <br />
              optimizing,updating ,resolving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
