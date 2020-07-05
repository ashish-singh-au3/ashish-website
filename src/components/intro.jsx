import React from "react";
import "./stars.scss";
import Typed from "react-typed";

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
              <h4 className="intro-title">Hey!! Ashish this side,</h4>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "I am a MERN Stack Developer,",
                      "Front End Developer,",
                      "Back End Developer",
                      "and Full Stack Developer.",
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
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
