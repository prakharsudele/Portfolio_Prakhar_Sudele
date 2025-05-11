import React, { useState } from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Nexura",
    description: "Portfolio website for Web-Developer Club which showcases their projects and Team Members with smooth animations.",
    image: "/sentify_preview.jpg",
    github: "https://github.com/yourusername/sentify",
    video: "/nexura_vid.mp4", // optional
  },

  {
  title: "FoodBook",
  description: "Online food ordering website which allows users to login/register, view food items, and add them to their cart for checkout.",
  image: "/studybuddy_preview.jpg",
  github: "https://github.com/prakharsudele/FoodBook",
  video: "/foodbook_vid.mp4", // ✅ correct usage
},

  {
    title: "Nike",
    description: "Nike shoe brand homepage clone with clean and responsive design.",
    image: "/nike_img.png",
    github: "https://github.com/prakharsudele/Nike_Store",
    video: "", // if no video, fallback to image
  },

  {
    title: "UIT RGPV",
    description: "Clone of UIT RGPV (my college) website but with a modern design and better interface.",
    image: "/studybuddy_preview.jpg",
    github: "https://github.com/prakharsudele/uit_clone",
    video: "/uit_clone_vid.mp4", // if no video, fallback to image
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, idx) => (
          <div key={idx} className="project-card" data-aos="fade-up" data-aos-delay="200">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="card-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button className="btn-github">GitHub</button>
              </a>
              <button className="btn-preview" onClick={() => openModal(project)}>Open</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            {selectedProject.video ? (
              <video src={selectedProject.video} controls className="modal-media" />
            ) : (
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-media" />
            )}
            <button className="btn-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}   
