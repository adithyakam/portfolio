import React from "react";
import { ReactComponent as Svg } from "../../assets/img1.svg";
import "../About/about.css";

const About = () => {
  return (
    <div className="container w-75">
      <div className="container mt-4 center">
        <h1>About</h1>
        <div className="d-flex flex-row align-items-center flex-wrap">
          <div className="svgSize p-2 mx-auto">
            <Svg className="svgSize " />
          </div>
          <div className=" p-2 ">
            <p>
              asfdjkasdfkhalsjdfkasdkfaskdfk
              <br /> adshfjldsfkadsf asdf'asd fadsf
              kasdkafasdfhkhakdhkhskadhkjfhak
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
