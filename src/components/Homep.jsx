import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="homepage-container" id="home">
      {/* Navbar */}
      <nav className="navbar" data-aos="fade-down">
        <div className="navbar-content">
          <h2 className="navbar-title">Prakhar's Portfolio</h2>
          <div
  className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
  onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
>
  <span></span>
  <span></span>
  <span></span>
</div>

          <ul className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
             <li><a href="#home">Home</a></li>
             <li><a href="#About Me">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul> 
        </div>
      </nav>

      {/* 👇 Wrap this inside a grid again */}
      <div className="homepage-grid">
        <div className="homepage-image animate-left">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="/homepage_img.jpg"
                  alt="Front Image"
                  className="homepage-img homepage-img-medium"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src="/home-img.jpg"
                  alt="Back Image"
                  className="homepage-img homepage-img-medium"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="homepage-text animate-right">
          <h1 className="homepage-title">
            Hi, I'm <span className="highlight-name">Prakhar Sudele</span>
          </h1>
          <p className="homepage-subheading">
            A passionate <span className="highlight-role">MERN Stack Developer</span> who loves building visually stunning and highly performant websites.
          </p>
          <p className="homepage-description">
            Scroll down to see my projects, skills, and contact info.
          </p>
        </div>
      </div>
    </div>
  );
}
