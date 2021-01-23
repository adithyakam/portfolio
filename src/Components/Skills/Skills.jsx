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
import "../Skills/skills.css";

const Skills = () => {
  return (
    <div className="container mainDiv mx-auto w-75">
      <div className="container skill-main">
        <h1 className="pageTitle">Skills</h1>
        <div className=" row mt-4 row-cols-2 row-cols-sm-3 content row-cols-md-3">
          <div className=" col my-1">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg1 className="logo" />
              <label>HTML</label>
            </div>
          </div>
          <div className=" col my-1">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg2 className="logo mx-1" />
              <label>CSS</label>
            </div>
          </div>
          <div className=" col my-1">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg3 className="logo" />
              <label>Github</label>
            </div>
          </div>
          <div className=" col my-1">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg9 className="logo mx-2" />
              <label>ExprressJS</label>
            </div>
          </div>

          <div className=" col my-1">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg5 className="logo" />
              <label>Node JS</label>
            </div>
          </div>
          <div className=" col my-1">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg6 className="logo" />
              <label>NPM</label>
            </div>
          </div>
          <div className=" col my-1">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg4 className="logo" />
              <label>Java</label>
            </div>
          </div>
          <div className=" col my-1">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg7 className="logo" />
              <label>React JS</label>
            </div>
          </div>
          <div className=" col my-1">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Svg8 className="logo" />
              <label>JavaScript</label>
            </div>
          </div>
        </div>
      </div>
      <div className=" container m-1 mt-5">
        <h1 className="pageTitle ">Experience</h1>
        <div className="content d-flex flex-row flex-wrap mt-4">
          <div className="  wid mx-auto">
            <div className="my-2 text-left">
              <h3>Program Analyst </h3>
              <h5 className="color-muted">Cognizant</h5>
              <h5 className="color-muted">2018 - present</h5>
            </div>
          </div>
          <div className="my-2 text-left  content2 mx-auto  text-wrap wid ">
            <p>
              Iam working as Program Analyst in Cognizant for 2
              years.
              <br />
              Inhere my job is to solve the customer related issues like
              <br />
              optimizing,updating ,resolving.
              <br/>
              currently Iam looking to swtich my carrer to web /frontend/react development.
              <br/>
              where I have a passion for UI/UX.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
