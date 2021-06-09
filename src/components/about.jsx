import React from "react";
import myImage from "../img/new.jpg";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML_CSS_skill",
          content: "HTML / CSS",
          percentage: "95%",
          value: "95",
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          percentage: "95%",
          value: "95",
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          percentage: "95%",
          value: "95",
        },

        {
          id: "NodeJS_skill",
          content: "Node.Js",
          percentage: "85%",
          value: "90",
        },
        {
          id: "Express_skill",
          content: "Express.Js",
          percentage: "85%",
          value: "90",
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          percentage: "90%",
          value: "90",
        },
        {
          id: "Go",
          content: "Go",
          percentage: "60%",
          value: "60",
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a passionate Full stack developer having good amount of hands-on experience in developing web applications from scratch.",
        },
        {
          id: "second-p-about",
          content:
            "Being an avid learner,I always try to keep myself updated with the new technologies.Alongside,I am a gym and sports enthusiast kind of person.",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-6"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <a href={myImage} data-lightbox="gallery-myimage">
                            <img
                              src={myImage}
                              className="img-fluid rounded b-shadow-a"
                              alt="profile-pic"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      <div className="title-box-2">
                        <h5 className="title-skill">Stack</h5>
                      </div>
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
