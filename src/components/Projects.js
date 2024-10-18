import React from 'react';
import './Projects.css';  // Import the CSS file

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {/* Project 1: Responsive Portfolio Website */}
        <div className="project-card">
          <h3>Responsive Portfolio Website</h3>
          <p>
            Developed a fully responsive portfolio website using HTML, CSS, and JavaScript, 
            focusing on clean UI/UX design. Applied mobile-first design principles using CSS 
            Flexbox and Grid to ensure a seamless experience across different devices.
          </p>
          <p>
            Integrated a JavaScript-based contact form with validation and deployed the website 
            using GitHub Pages.
          </p>
          <p><strong>Technologies:</strong> HTML, CSS, JavaScript, GitHub Pages</p>
        </div>

        {/* Additional Projects (if needed) */}
        <div className="project-card">
          <h3>Other Project</h3>
          <p>
            Description of another project, highlighting the key features and technologies used.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
