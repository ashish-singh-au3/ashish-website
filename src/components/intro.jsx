import React from "react";
import "./stars.scss";
import Typed from "react-typed";
//import imageOverlay from "../img/photo-1542831371-29b0f74f9713.jpg"

class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        {/* <div className="overlay-intro"></div> */}
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h4 className="intro-title">Hi,Myself Ashish!!!</h4>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "MERN Stack Developer",
                      "Front End Developer",
                      "Back End Developer",
                      "Full Stack Developer",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  style={{ cursor: "pointer" }}
                  href={`https://drive.google.com/file/d/1_syqTVn02e0tekij1HdKevVu1-5wslKz/view?usp=sharing?${new Date().getTime()}`}
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank"
                >
                  View My Resume{" "}
                  <i class="fa fa-download" aria-hidden="true"></i>
                </a>
                {/* <a 
                      className="btn btn-primary btn js-scroll px-4 ml-5" 
                      style={{ cursor: "pointer" }}
                      href="#work"
                    >
                      View My Work
                    </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
