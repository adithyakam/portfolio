import React from "react";
import Img1 from "../../assets/football.PNG";
import Img2 from "../../assets/face-dection.PNG";
import Img3 from "../../assets/moviess.PNG";
import Img4 from "../../assets/robofriends.PNG";
import Img5 from "../../assets/chatzz.PNG";
import Img6 from "../../assets/col-generator.PNG";
import Img7 from "../../assets/expenseAPp.PNG";
import Img8 from "../../assets/colorgame.PNG";
import Img9 from "../../assets/todo.PNG";
import Img10 from "../../assets/CrownShopping.PNG";
import Img11 from "../../assets/Spotify.PNG";

import Reveal from "react-reveal/Zoom";
import "./project.css";

const Project = () => {
  return (
    <div className="container w-75 mainDiv">
      <h1 className="pageTitle ">Projects</h1>
      <div className="con">
        <Reveal effect="fadeInUp" className="content mt-3">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={Img10}
                  className="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Crown Shopping</h5>
                  <p className="card-text">
                    THis is Ecommerce project, which has login with firebase,
                    Add too cart, then payment gateway with stripe API, this
                    project uses React- Readux, context-API, Firebase for db &
                    user Auth uses memoization for efficiency .
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Created using React,Node
                      ,Express,Redux,Context-API,Reselect,heroku
                    </small>

                    <div className="m mt-3">
                      <a
                        href="https://crwn-shoping.herokuapp.com/"
                        className="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/Crown-Shoping"
                        className="btn btn-primary p-2 m-1"
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
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={Img11}
                  className="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Spotify Clone App</h5>
                  <p className="card-text">
                    THis is an clone of my favorite music app. where it uses
                    SPotify-API forsongs/playlist. It has
                    play,pause,next,previous functionality of the song.This app
                    uses context APi for state management.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Created using React,Spotify-API,context-API,Materialize-UI
                    </small>

                    <div className="m mt-3">
                      <a
                        href="https://spotify-cln.netlify.app/"
                        className="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/spotify-clone"
                        className="btn btn-primary p-2 m-1"
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
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={Img2}
                  className="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Face Detection App</h5>
                  <p className="card-text">
                    This is the bootcamp project .In this the users can login In
                    or register. Have there own count of how many facedetection
                    they have made in their acount.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Created using React,Node ,Express,tachyons,heroku
                    </small>

                    <div className="m mt-3">
                      <a
                        href="https://face-detection22.herokuapp.com/"
                        className="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/face-detection"
                        className="btn btn-primary p-2 m-1"
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
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={Img1}
                  className="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Football App</h5>
                  <p className="card-text">
                    This app provides the details of the football
                    match,fixtures,score of the team.also we can search
                    particular player information.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Created using vanilla JS,css ,Html,bootstrap
                    </small>

                    <div className="m mt-3">
                      <a
                        href="https://football-adithya.netlify.app/"
                        className="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/footbal"
                        className="btn btn-primary p-2 m-1"
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
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={Img3}
                  className="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Moviess App</h5>
                  <p className="card-text">
                    This is the my personal project .In this Iam using TMDB Rest
                    API . This app is used to get trending movies,you can search
                    for specific movies. Also you can add movies as your
                    favorities in fovorite list.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Created using React,MaterializeCSS,RestAPI
                    </small>

                    <div className="m mt-3">
                      <a
                        href="https://moviesss.netlify.app/
"
                        target="blank"
                        className="btn btn-primary p-2 m-1"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/moviessss"
                        className="btn btn-primary p-2 m-1"
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
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={Img4}
                  className="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Robo Friends App</h5>
                  <p className="card-text">
                    This is the one of the bootcamp project .In this Iam using
                    an Robohash API. This API is used to get the different Robo
                    images for searched text .
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Created using React,Redux,tacyons
                    </small>

                    <div className="m mt-3">
                      <a
                        href="https://adithyakam.github.io/RobotFriends/

"
                        target="blank"
                        className="btn btn-primary p-2 m-1"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/RobotFriends
"
                        target="blank"
                        className="btn btn-primary p-2 m-1"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={Img5}
                  className="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Chatzzz App</h5>
                  <p className="card-text">
                    This is my personal project .In this using Socket.Io for
                    socket connections. This app is used to chat or message
                    between the users.User has to login by using the name and
                    the chat room to be able to message.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Created using React,Socket.IO,NodeJS,MaterializeCSS,Heroku
                    </small>

                    <div className="m mt-3">
                      <a
                        href="https://chatzz.netlify.app/

"
                        target="blank"
                        className="btn btn-primary p-2 m-1"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/chat-app
"
                        className="btn btn-primary p-2 m-1"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={Img6}
                  className="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">color-genertor App</h5>
                  <p className="card-text">
                    This is the my personal project .this is used to generate
                    the random colors which can be used in other projects
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Created using vanillaJS ,CSS,Html
                    </small>

                    <div className="m mt-3">
                      <a
                        href="https://adithyakam.github.io/color-generator/


"
                        className="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/color-generator

"
                        className="btn btn-primary p-2 m-1"
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
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={Img7}
                  className="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">expense App</h5>
                  <p className="card-text">
                    This is app is used to calculate the expenses. This is used
                    as personal money management for the given user
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Created using vanillaJS ,CSS,Html
                    </small>

                    <div className="m mt-3">
                      <a
                        href="https://adithyakam.github.io/expenseApp/


"
                        target="blank"
                        className="btn btn-primary p-2 m-1"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/expenseApp 
"
                        target="blank"
                        className="btn btn-primary p-2 m-1"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={Img8}
                  className="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Color game</h5>
                  <p className="card-text">
                    This is the my personal project .This app is used to detect
                    the random colour generated by its RGB value .This app
                    background colour changes as we get nearer to color.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Created using Jquery ,Css,Html
                    </small>

                    <div className="m mt-3">
                      <a
                        href="https://adithyakam.github.io/color-Game/



"
                        target="blank"
                        className="btn btn-primary p-2 m-1"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/color-Game

"
                        target="blank"
                        className="btn btn-primary p-2 m-1"
                      >
                        GitHub
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={Img9}
                  className="card-img"
                  alt=""
                  style={{ objectFit: "fill", height: "100%", width: "100%" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">To-do List</h5>
                  <p className="card-text">
                    This is the my personal project .This app is used to add to
                    dolist for the day or week. As the to do done the user can
                    delete or strike off the to do.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Created using VanillaJS ,CSS,Html
                    </small>

                    <div className="m mt-3">
                      <a
                        href="https://adithyakam.github.io/To-Do-list/"
                        className="btn btn-primary p-2 m-1"
                        target="blank"
                      >
                        Live
                      </a>
                      <a
                        href="https://github.com/adithyakam/To-Do-list/
"
                        className="btn btn-primary p-2 m-1"
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
