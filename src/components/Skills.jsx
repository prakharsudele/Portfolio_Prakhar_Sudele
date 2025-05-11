import React, { useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    if (window.TagCanvas) {
      try {
        window.TagCanvas.Start("myCanvas", "tagList", {
          textColour: "#ffffff",
          outlineColour: "#ff4b91",
          reverse: false,
          depth: 0.9,
          maxSpeed: 0.05,
          weight: true,
          initial: [0.2, -0.1],
        });
      } catch (e) {
        console.error("TagCanvas error:", e);
      }
    }
  }, []);

  const skills = [
    "JavaScript", "React", "Node.js", "MongoDB", "Express", "HTML5", "CSS3",
    "Git", "GitHub", "Python", "Bootstrap", "Pandas","Machine Learning" ,"NumPy","C++"
  ];

  return (
    <div className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div
        className="canvas-wrapper"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        <canvas width="500" height="500" id="myCanvas">
          Your browser does not support the canvas tag.
        </canvas>
        <div id="tagList">
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <a href="#!" className="skill-link">{skill}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
