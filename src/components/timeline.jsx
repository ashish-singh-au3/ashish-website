import React, { Component } from "react";
import { FaReact, FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      work_list: [
        {
          company: "AttainU",
          role: "Full stack Developer",
          time: "08/2019 - 04/2020",
          description: [
            "I have worked on MERN stack as a full stack developer where I have learned a lot with my fellow members from the bootcamp.",
            "I have developed quite a few applications during that period which can be found over GitHub",
            "Honed up my skills as a full stack developer",
          ],

          icon: <MdWork />,
          iconBackgroundColor: "white",
          iconColor: " #b30000",
        },
        {
          role: "ASE",
          company: "BYJU's",
          time: "07/2019 - 09/2019",
          description: [
            "I was in my training period where I was guided on analyzing the market and coming up with new product features which can be an add-on to existing products",
          ],

          icon: <MdWork />,
          iconBackgroundColor: "white",
          iconColor: " #b30000",
        },
        {
          role: "Product Development/Management Intern",
          company: "Rage Communications",
          time: "01/2019 - 04/2019",
          description: [
            "I have worked closely with VP of the company where I was responsible to churn out the ideas to be implemented in the product, along with that I was developing the front- end part of the website in order to improve UX.",
          ],

          icon: <MdWork />,
          iconBackgroundColor: "white",
          iconColor: " #b30000",
        },
        {
          role: "Web Developer Intern",
          company: "IBM",
          time: "06/2017 - 07/2017",
          description: [
            "Got selected for summer internship program by IBM and got scholarship as well for Apprentice Training",
          ],

          icon: <MdWork />,
          iconBackgroundColor: "white",
          iconColor: " #b30000",
        },
        {
          role: "Bachelor's in Technology",
          company: "SRM University,Chennai",
          time: "06/2015 - 06/2019",
          description: ["Software Engineering"],
          icon: <FaGraduationCap />,
          iconBackgroundColor: "white",
          iconColor: "#4da1ff",
        },
        {
          role: "HSC - 12th",
          company: "Dayawati Modi Academy-1",
          time: "05/2012 - 06/2014",
          description: ["78.50 %"],
          icon: <FaGraduationCap />,
          iconBackgroundColor: "white",
          iconColor: "#4da1ff",
        },
      ],
    };
  }

  render() {
    return (
      <section id="timeline" className="timeline-section">
        <div className="container">
          <div className="title-box text-center">
            <h3 className="title-a-timeline">Work Experience & Education</h3>

            <div className="line-mf-timeline"></div>
          </div>

          <VerticalTimeline>
            {this.state.work_list.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                date={item.time}
                icon={item.icon}
                iconStyle={{
                  background: item.iconBackgroundColor,
                  color: item.iconColor,
                }}
                contentStyle={{
                  borderTop: `3px solid ${item.iconBackgroundColor}`,
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  {item.role}{" "}
                </h3>
                <h5 className="vertical-timeline-element-subtitle mt-2 ">
                  {item.company}
                  {item.link && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2"
                      href={item.link}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </h5>
                <ul>
                  {item.description.map((d, i) => (
                    <li>{d} </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Timeline;
