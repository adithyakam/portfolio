import React from "react";
import { ReactComponent as Svg1 } from "../../assets/github2.svg";
import { ReactComponent as Svg2 } from "../../assets/Linkedin2.svg";
import "./contact.css";

const Contact = () => {
  return (
    <div className="mainDiv w-75 mx-auto">
      <div>
        <div class="container w-75">
          <h2 class="pageTitle">contact </h2>
          <form
            id="contact-form"
            method="post"
            role="form"
            netlify-honeypot="bot"
            data-netlify="true"
            className="formContainer m-4"
            netlify
          >
            <div class="controls p-3">
              {/* <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <p style={{ visibility: "hidden" }}>
                      <label>Dont FIll</label>
                      <input name="bot" />
                    </p>
                  </div>
                </div>
              </div> */}
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="form_name">Firstname *</label>
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
                    <label for="form_lastname">Lastname *</label>
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
                    <label for="form_email">Email *</label>
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
                    <label for="subject">Subject *</label>
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
                    <label for="form_message">Message *</label>
                    <textarea
                      id="form_message"
                      name="message"
                      class="form-control imp"
                      placeholder="Message for me *"
                      rows="4"
                      required="required"
                      data-error="Please, leave us a message."
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-md-12">
                  <input
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
        </div>
      </div>
      <div className="container mx-auto mt-5">
        <h3>You can also find me in</h3>
        <div className="container mt-4 ">
          <ul class="d-flex flex-row justify-content-center">
            <li className="mx-1 d-flex flex-column">
              <a
                href="https://www.linkedin.com/in/adithya-kamath-15d34545d/"
                target="blank"
              >
                <Svg2 />
              </a>
              <span>linkedin</span>
            </li>
            <li className="mx-1 d-flex flex-column">
              <a
                href="https://www.linkedin.com/in/adithya-kamath-15d34545d/"
                target="blank"
              >
                <Svg1 />
              </a>
              <span>Github</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
