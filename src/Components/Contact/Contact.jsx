import React from "react";
import { ReactComponent as Svg1 } from "../../assets/github2.svg";
import { ReactComponent as Svg2 } from "../../assets/Linkedin2.svg";
import "./contact.css";
import { ReactComponent as Svg } from "../../assets/contact.svg";

const Contact = () => {
  return (
    <div className="mainDiv w-75 mx-auto">
      <h2 class="pageTitle contact-title">contact </h2>
      <div className=" container">
        <div class="row">
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
      {/* <div class="formContain">
        <h3>OR</h3>
        <h3>fill the form and submit</h3>
        <form
          id="contact-form"
          name="contact"
          method="post"
          role="form"
          netlify-honeypot="bot"
          data-netlify="true"
          className="formContainer"
        >
          <div class="controls p-3">
            <input type="hidden" name="form-name" value="contact" />

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label htmlFor="form_name">Firstname *</label>
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    class=" form-control imp"
                    placeholder="Please enter your firstname *"
                    required="required"
                    data-error="Firstname is required."
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label htmlFor="form_lastname">Lastname *</label>
                  <input
                    id="form_lastname"
                    type="text"
                    name="lastname"
                    class=" form-control imp"
                    placeholder="Please enter your lastname *"
                    required="required"
                    data-error="Lastname is required."
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label htmlFor="form_email">Email *</label>
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    class="form-control imp"
                    placeholder="Please enter your email *"
                    required="required"
                    data-error="Valid email is required."
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    class="form-control imp"
                    placeholder="Please enter your subject *"
                    required="required"
                  />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label htmlFor="form_message">Message *</label>
                  <textarea
                    id="form_message"
                    name="message"
                    class="form-control imp"
                    placeholder="Message htmlFor me *"
                    rows="4"
                    required="required"
                    data-error="Please, leave us a message."
                  ></textarea>
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-md-12">
                <input
                  name="submit"
                  type="submit"
                  class="btn btt btn-send"
                  value="Send message"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p class="text-muted">
                  <strong>*</strong> These fields are required
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>*/}
    </div>
  );
};

export default Contact;
