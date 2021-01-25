import React from "react";
import { ReactComponent as Svg1 } from "../../assets/github2.svg";
import { ReactComponent as Svg2 } from "../../assets/Linkedin2.svg";
import "./contact.css";
import { ReactComponent as Svg } from "../../assets/contact.svg";

const Contact = () => {
  return (
    <div className="mainDiv w-75 mx-auto">
      <h2 className="pageTitle contact-title">contact </h2>
      <div className=" container">
        <div className="row">
          <div className="contactSVG col-md-12 col-sm-12 p-2 md-4">
            <Svg className="contactSVG " />
          </div>
          <div className=" con-P p-2 col-md-12 col-sm-12 my-auto mx-auto">
            <p>
              Hey, hi there <br />
              Question or comment? <br />
              Use the contact details below to get in touch with us:
            </p>
            <div className=" mt-2  lis">
              <ul
                class="d-flex flex-row w-100  justify-content-center "
                style={{ padding: "0" }}
              >
                <li className="d-flex flex-column">
                  <a
                    href="https://www.linkedin.com/in/adithya-kamath-15d34545d/"
                    target="blank"
                  >
                    <Svg2 className="conSvg " />
                  </a>
                  <span>linkedin</span>
                </li>
                <li className="d-flex flex-column">
                  <a href="https://github.com/adithyakam" target="blank">
                    <Svg1 className="conSvg " />
                  </a>
                  <span>Github</span>
                </li>
              </ul>
            </div>
            <h3 className="title">or send out an mail to</h3>
            <h2 className="email">kamathadithya12@gmail.com</h2>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Contact;
