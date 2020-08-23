import React from "react";

import { Tabs, Tab } from "react-bootstrap-tabs";

//import Google-Search engine App

import g from "../img/google-clone/g.png";
import g1 from "../img/google-clone/g1.png";
import g2 from "../img/google-clone/g2.png";
import g3 from "../img/google-clone/g3.png";
import g4 from "../img/google-clone/g4.png";
import g5 from "../img/google-clone/g5.png";
import g6 from "../img/google-clone/g6.png";

//import Blog-App

import s from "../img/Blog-app/s.png";
import s1 from "../img/Blog-app/s1.png";
import s2 from "../img/Blog-app/s2.png";
import s3 from "../img/Blog-app/s3.png";
import s4 from "../img/Blog-app/s4.png";
import s5 from "../img/Blog-app/s5.png";

// images Job-search app

import i from "../img/job-search-app/i.png";
import i1 from "../img/job-search-app/i1.png";
import i2 from "../img/job-search-app/i2.png";

//import Google Calendar app
import Ss from "../img/google-cal/Ss.png";
import Ss1 from "../img/google-cal/Ss1.png";
import Ss2 from "../img/google-cal/Ss2.png";

//import Expense tracker
import pic from "../img/expense-tracker/pic.png";
import pic1 from "../img/expense-tracker/pic1.png";
import pic2 from "../img/expense-tracker/pic2.png";
import pic3 from "../img/expense-tracker/pic3.png";

//import i-tunes

import sss from "../img/i-tunes/sss.png";
import sss1 from "../img/i-tunes/sss1.png";
import sss2 from "../img/i-tunes/sss2.png";

// Movie Information App
import ss from "../img/movie-info/ss1.png";
import ss2 from "../img/movie-info/ss2.png";
import ss3 from "../img/movie-info/ss3.png";
import ss4 from "../img/movie-info/ss4.png";
import ss5 from "../img/movie-info/ss5.png";
import MovieInfo from "../img/movie-info/MovieInfo.png";

import Projects from "./projects";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "Google Clone",
          webLink: "",

          githubLink:
            "https://github.com/ashish-singh-au3/Movie-Information-App",
          description:
            "Google clone is exactly similar to real time Google search engine where you can search anything as you do in Google",
          stack: [
            "ReactJs",
            "Redux",
            "Google Developers API",
            "NodeJs",
            "Javascript",
            "Material-UI",
            "CSS",
          ],
          image: g,
          image1: g1,
          images: [g2, g3, g4, g5],
          dataLightbox: "gallery-GoogleCloneAPp",
          type: "web-app",
        },

        {
          title: "Movie-Info App",
          webLink: "https://quiet-castle-39185.herokuapp.com/#/",

          githubLink:
            "https://github.com/ashish-singh-au3/Movie-Information-App",
          description:
            "One stop to search the details of your favourite TV shows/Movies.",
          stack: ["ReactJs", "Redux", "OMDB API", "NodeJs", "Javascript"],
          image: MovieInfo,
          image1: ss,
          images: [ss2, ss3, ss4, ss5],
          dataLightbox: "gallery-MovieInfoapp",
          type: "web-app",
        },

        {
          title: "Blog-App",
          webLink: "https://blogapp-au3.herokuapp.com/",
          githubLink: "https://github.com/ashish-singh-au3/blogging-App",
          description:
            "Blog App is similar to other blogging platforms like Medium",
          stack: [
            "HTML/CSS",
            "NODEJS",
            "EXPRESSJS",
            "MONGODB",
            "Javascript",
            "Handlebars",
            "jQuery",
            "Nodemailer",
          ],
          image: s,
          image1: s1,
          images: [s2, s3, s4, s5],
          dataLightbox: "gallery-blogApp",
          type: "web-app",
        },
        {
          title: "Expense-Tracker App",
          githubLink:
            "https://github.com/ashish-singh-au3/My-Expense-Tracker-App",
          description: "Manage your expenses in just one go",
          stack: [
            "HTML/CSS",
            "ReactJs",
            "NodeJs",
            "Redux",
            "React Hooks",
            "Bootstrap",
            "Context API",
          ],
          image: pic,
          image1: pic1,
          images: [pic2, pic3],
          dataLightbox: "gallery-expenseTracker",
          type: "web-app",
        },
        {
          title: "Google-Calendaar App Clone",
          githubLink:
            "https://github.com/ashish-singh-au3/Google-calendar-clone",
          description:
            "Clone of google calendar app where you can View/Scroll/Add/Delete/Update an event",
          stack: ["ReactJs", "Redux", "NodeJs", "Materialize CSS"],
          image: Ss,
          image1: Ss1,
          images: [Ss2],
          dataLightbox: "gallery-google-cal",
          type: "web-app",
        },
        {
          title: "i-Tunes Search App",
          githubLink: "https://github.com/ashish-singh-au3/-iTunes-search-App-",
          description:
            "Seaarch your favourite songs/artists/albums in i-Tunes.",
          stack: ["ReactJs", "Redux", "i-tunes API", "NodeJs"],
          image: sss,
          image1: sss1,
          images: [sss2],
          dataLightbox: "gallery-i-tunes",
        },
        {
          title: "Job-search App",
          githubLink: "https://github.com/ashish-singh-au3/Job-Search-App",
          description:
            "Search your desired job along with pagination and filter feature.",
          stack: ["ReactJs", "NodeJs", "Redux", "API", "Bootstrap"],
          image: i,
          image1: i1,
          images: [i2],
          dataLightbox: "gallery-jobSearch",
          type: "web-app",
        },
      ],
    };
  }
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a s-port ">Projects</h3>
                <p className="subtitle-a">Some of my work is listed below.</p>
                <div className="line-mf"></div>
              </div>
              {/* <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'  }} >
                    <div>All</div>
                    <div>Website</div>
                    <div>Native Apps</div>
                  </div> */}
            </div>
          </div>

          <Tabs onSelect={(index, label) => console.log(label + " selected")}>
            <Tab label="Web Apps">
              <Projects projects={this.state.projects} type="All" />
            </Tab>
          </Tabs>
        </div>
      </section>
    );
  }
}

export default Portfolio;
