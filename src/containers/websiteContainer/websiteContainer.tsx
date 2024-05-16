import { websites } from "@/websites";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faDesktop,
//   faTabletScreenButton,
//   faMobileScreen,
// } from "@fortawesome/free-solid-svg-icons";
import {
  FaDesktop,
  FaTabletScreenButton,
  FaMobileScreenButton,
} from "react-icons/fa6";

import { useContext } from "react";
import StyleContext from "@/contexts/StyleContext";
// className={
//   isDark
//     ? "dark-mode subTitle skills-text-subtitle"
//     : "subTitle skills-text-subtitle"
// }
export default function WebsiteContainer() {
  const { isDark } = useContext(StyleContext);

  return (
    <div>
      {" "}
      <div className="wrapper ">
        <section id="work">
          {Object.entries(websites).map(([category, projects], index) => (
            <div key={index}>
              <h2 className="text-center ">{category}</h2>
              <div className="row">
                <p
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text-subtitle text-center tag-line"
                      : "subTitle skills-text-subtitle text-center tag-line"
                  }
                >
                  Here are my {category}
                </p>
              </div>
              <div className="project-container">
                {projects.map((project, idx) => (
                  <div key={idx} className="websites-container">
                    <div className="row work-row">
                      <div className={`imageClass ${project.imgClass}`}>
                        <img src={project.imgSrc} alt={project.name} />
                      </div>
                      <div className={project.detailsClass}>
                        <div className="details ">
                          <h3
                            className={
                              isDark
                                ? "dark-mode subTitle skills-text-subtitle"
                                : "subTitle skills-text-subtitle"
                            }
                          >
                            {project.name}
                          </h3>
                          <p className="platform">Web</p>
                          <p className="icons">
                            <FaDesktop className="icons" />
                            <FaTabletScreenButton className="icons" />
                            <FaMobileScreenButton className="icons" />
                          </p>
                          <p
                            className={
                              isDark
                                ? "dark-mode subTitle skills-text-subtitle"
                                : "subTitle skills-text-subtitle"
                            }
                          >
                            {project.detail}
                          </p>
                          <a className="my-button" href={project.linkUrl}>
                            Visit Website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
