import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="section" id="About Me">
    <div className="about-section">
  <div className="about-grid">
    {/* Image with slide+fade from left */}
    <div className="about-image" data-aos="fade-right">
    <div className="about-image hover-overlay">
  <img src={`${import.meta.env.BASE_URL}about_img.jpg`} alt="About Me" />
  <div className="overlay-text">
  “Debugging life, one semicolon at a time.”
  </div>
</div>

    </div>

    {/* Text with slide+fade from right */}
    <div className="about-text" data-aos="fade-left">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
      I'm Prakhar Sudele — a young, driven developer with a fresh perspective and a passion for building meaningful digital experiences. Armed with solid technical skills and an eagerness to explore new ideas, I specialize in the MERN stack and thrive on turning concepts into fully functional, user-friendly web applications....
      </p>
      <a
  href="https://drive.google.com/file/d/1PFTCZNZ_dBSAi_-a6tbJbPlH4fUyxbVq/view?preview"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="resume-btn">View Resume</button>
</a>


    </div>
  </div>
</div>
</section>
  );
}
