import React, { useState } from 'react';
import '../css/Projects.css';

const projects = [
  {
    name: 'Robyn\'s Spellbook',
    description: 'A dynamic web application for managing D&D character spells and resources.',
    link: 'https://github.com/WilliamKen/Robyns-Spellbook'
  },
  {
    name: 'Global Temperature Analysis',
    description: 'A data analysis project on global temperature trends using Python.',
    link: 'https://github.com/WilliamKen/Global_Temperature_Analysis/blob/main/Global_Temperature.ipynb'
  },
  {
    name: 'Premiere League Data Analysis',
    description: 'A project analyzing Premiere League data using various data science techniques.',
    link: 'https://github.com/WilliamKen/Premiere_League_Analysis/blob/main/Premiere_League.ipynb'
  },
  {
    name: 'Portfolio Web Design',
    description: 'A React-based portfolio website showcasing my projects and skills.',
    link: 'https://github.com/WilliamKen/your-portfolio-repo'
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="accordion">
        {projects.map((project, index) => (
          <div key={index} className="accordion-item">
            <button className="accordion-title" onClick={() => handleToggle(index)}>
              {project.name}
            </button>
            {activeIndex === index && (
              <div className="accordion-content">
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
