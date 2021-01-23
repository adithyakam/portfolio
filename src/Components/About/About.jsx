import React from "react";
import { ReactComponent as Svg } from "../../assets/img1.svg";
import "../About/about.css";
import Img from "../../assets/3327590.jpg";

const About = () => {
  return (
    <div className="container mainDiv w-75">
      <div className="container mt-4 center d-flex flex-column  align-items-center">
        <h1 className="pageTitle">About</h1>
        <div className="d-flex flex-row align-items-center content justify-content-around flex-wrap">
          <div className="svgSize p-2 ">
            <Svg className="svgSize " />
          </div>
          <div className=" para p-2 align-right">
            <p>
              Hey,Iam Adithya an UI/UX entusiast from India. <br />I have
              background on Java ,want to become an FULL-STACK / UI-UX Developer
              in near future. My hobbies include listening Music and watching
              football. Iam an good team player and colaborate with others
              easily.
            </p>
          </div>
        </div>
        {/* <img src="../../assets/25496.jpg"/ > */}
        <img
          src={Img}
          className="img-fluid mt-auto mb-0"
          alt="Responsive"
          style={{ width: "500px", heigth: "600px",marginTop:"5em" }}
        />
      </div>
    </div>
  );
};

export default About;
