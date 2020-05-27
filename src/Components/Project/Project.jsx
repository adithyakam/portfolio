import React from "react";
import Img1 from "../../assets/football.PNG";
import Img2 from "../../assets/face-dection.PNG";
import Img3 from "../../assets/moviess.PNG";
import Img4 from "../../assets/robofriends.PNG";
import Img5 from "../../assets/face-dection.PNG";
import Img6 from "../../assets/col-generator.PNG";
import Img7 from "../../assets/expenseAPp.PNG";
import Img8 from "../../assets/colorgame.PNG";
import Img9 from "../../assets/todo.PNG";

import Reveal from "react-reveal/Zoom";
import "./project.css";

const Project = () => {
  return (
    <div className="container w-75 mainDiv">
      <h1 className="pageTitle ">Projects</h1>
      <div className="con">
        <Reveal effect="fadeInUp" className="content mt-3">
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={Img2}
                  class="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Face Detection App</h5>
                  <p class="card-text">
                    This is the bootcamp project .In this the users can loginIn
                    or register. Have there own count on how many facedetection
                    they have made in their acount.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">
                      Created using React,Node ,Express,tachyons,heroku
                    </small>

                    <div className="m m-1-4">
                      <a
                        href="https://face-detection22.herokuapp.com/"
                        class="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/face-detection"
                        class="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={Img1}
                  class="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Football App</h5>
                  <p class="card-text">
                    THis app provides the dtails of the football
                    match,fixtures,score of the team
                  </p>
                  <p class="card-text">
                    <small class="text-muted">
                      Created using vanilla javascript,css ,Html
                    </small>

                    <div className="m m-1-4">
                      <a
                        href="https://football-adithya.netlify.app/"
                        class="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/footbal"
                        class="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={Img3}
                  class="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Moviess App</h5>
                  <p class="card-text">
                    This is the my personal project .In this Iam using idmi Rest
                    API . THis app is used to get trending movies,you can search
                    for specific movies. Also you can add movies to your
                    favorities.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">
                      Created using React,MaterializeCSS,Rest
                    </small>

                    <div className="m m-1-4">
                      <a
                        href="https://moviesss.netlify.app/
"
                        target="blank"
                        class="btn btn-primary p-2 m-1"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/moviessss"
                        class="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={Img4}
                  class="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Robo Friends App</h5>
                  <p class="card-text">
                    This is the one of the bootcamp project .In this Iam using
                    an Robohash API. this API is used to get the different Robo
                    images for searched text.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">
                      Created using React,Redux,tacyons
                    </small>

                    <div className="m m-1-4">
                      <a
                        href="https://adithyakam.github.io/RobotFriends/

"
                        target="blank"
                        class="btn btn-primary p-2 m-1"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/RobotFriends
"
                        target="blank"
                        class="btn btn-primary p-2 m-1"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={Img5}
                  class="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Chatzzz App</h5>
                  <p class="card-text">
                    This is the my personal project .In this using SOcket.Io for
                    socket connections. This app is used to chat or message
                    between the users,particular user has to login by using the
                    nameand the chat room to be entered
                  </p>
                  <p class="card-text">
                    <small class="text-muted">
                      Created using React,Socket.IO,NodeJS,MaterializeCSS
                    </small>

                    <div className="m m-1-4">
                      <a
                        href="https://chatzz.netlify.app/

"
                        target="blank"
                        class="btn btn-primary p-2 m-1"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/chat-app
"
                        class="btn btn-primary p-2 m-1"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={Img6}
                  class="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">color-genertor App</h5>
                  <p class="card-text">
                    This is the my personal project .this is used to generate
                    the random colors which can be used in other projects
                  </p>
                  <p class="card-text">
                    <small class="text-muted">
                      Created using vanillaJS ,css,Html
                    </small>

                    <div className="m m-1-4">
                      <a
                        href="https://adithyakam.github.io/color-generator/


"
                        class="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/color-generator

"
                        class="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={Img7}
                  class="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">expense App</h5>
                  <p class="card-text">
                    This is the my personal project .This app is used to
                    calculate the expenses This is used as personal money
                    management
                  </p>
                  <p class="card-text">
                    <small class="text-muted">
                      Created using vanillaJS ,css,Html
                    </small>

                    <div className="m m-1-4">
                      <a
                        href="https://adithyakam.github.io/expenseApp/


"
                        target="blank"
                        class="btn btn-primary p-2 m-1"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/expenseApp 
"
                        target="blank"
                        class="btn btn-primary p-2 m-1"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={Img8}
                  class="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Color game</h5>
                  <p class="card-text">
                    This is the my personal project .This app is used to detect
                    the random colour by its RGB value .This app background
                    colour changes as we get nearer to color.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">
                      Created using vanillaJS ,css,Html
                    </small>

                    <div className="m m-1-4">
                      <a
                        href="https://adithyakam.github.io/color-Game/



"
                        target="blank"
                        class="btn btn-primary p-2 m-1"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/color-Game

"
                        target="blank"
                        class="btn btn-primary p-2 m-1"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={Img9}
                  class="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">To-do List</h5>
                  <p class="card-text">
                    This is the my personal project .This app is used to add to
                    dolist for the day or week. As the to do done the user can
                    delete or strike off the to do.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">
                      Created using vanillaJS ,css,Html
                    </small>

                    <div className="m m-1-4">
                      <a
                        href="https://adithyakam.github.io/To-Do-list/"
                        class="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/To-Do-list/
"
                        class="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Project;
