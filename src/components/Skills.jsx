import React from "react";
import "./Skills.css";

import {
  FaJava,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiFlutter,
  SiExpress,
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills-page">
      <h2 className="skills-title">Technical Skills</h2>

      <div className="skills-grid">

        <div className="skill-item">
          <SiCplusplus />
          <span>C / C++</span>
        </div>

        <div className="skill-item">
          <FaJava />
          <span>Java</span>
        </div>

        <div className="skill-item">
          <FaHtml5 />
          <span>HTML</span>
        </div>

        <div className="skill-item">
          <FaJs />
          <span>JavaScript</span>
        </div>

        <div className="skill-item">
          <SiTailwindcss />
          <span>Tailwind CSS</span>
        </div>

        <div className="skill-item">
          <SiFlutter />
          <span>Flutter</span>
        </div>

        <div className="skill-item">
          <FaNodeJs />
          <span>Node.js</span>
        </div>

        <div className="skill-item">
          <SiExpress />
          <span>Express.js</span>
        </div>

        <div className="skill-item">
          <SiMysql />
          <span>MySQL</span>
        </div>

        <div className="skill-item">
          <SiMongodb />
          <span>MongoDB</span>
        </div>

        <div className="skill-item">
          <FaGit />
          <span>Git</span>
        </div>

      </div>
    </section>
  );
}

export default Skills;
