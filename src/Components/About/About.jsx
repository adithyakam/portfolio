import React from "react";
import { ReactComponent as Svg } from "../../assets/img1.svg";
import "../About/about.css";

const About = () => {
  return (
    <div className="container w-75">
      <div className="container mt-4 center">
        <h1>About</h1>
        <div className="d-flex flex-row align-items-center justify-content-around flex-wrap">
          <div className="svgSize p-2 ">
            <Svg className="svgSize " />
          </div>
          <div className=" p-2 align-rigth">
            <p>
              Hey,Iam Adithya an UI/UX entusiast from India <br />
              I have background on Java ,want to become an FULL-STACK Devoper in
              near future
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
