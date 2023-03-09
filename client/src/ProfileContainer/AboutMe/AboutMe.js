import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "With having experience of 2 internships as a Web developer intern at Exposys Data Labs and Odoo Development intern at Beyon Data Solutions, I am adept in programming, Data Structures and Algorithms, Front-end technologies and Backend Development tools. I used the DBsqlite database to create a blogging and e-commerce website. The project uses Bootstrap, Jquery, HTML, and CSS. The Django Framework is used for back-end development, and I created an odoo-based university administration system with a display layer that combines HTML5, JavaScript, and CSS, a logic tier that is entirely built in Python, and a data tier that only supports PostgreSQL as an RDBMS.Apart from that I have worked on different technologies like Springboot,JAVA,nosql,AWS",
    highlights: {
      bulltes: [
        "Full stack mobile and web development",
        "Interactive Front end as per the design",
        "React and React native",
        "Odoo Development ",
        "Building Rest Api",
        "Managing Database",
      ],
      heading: "Here are a few highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bulltes.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              {/* <button className="btn primary-btn">
                {""}
                Hire me{" "}
              </button> */}
              <a href="Resume-Urmil.pdf" download="Resume-Urmil.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
            </div>
    
  );
}
 