import React from 'react';
import '../css/Skills.css';

const skills = [
  {
    name: 'Data Manipulation with Pandas',
    description: 'Perform data cleaning, manipulation, and analysis using the Pandas library.',
    link: 'https://github.com/WilliamKen/Global_Temperature_Analysis/blob/main/Global_Temperature.ipynb'
  },
  {
    name: 'Numerical Operations with NumPy',
    description: 'Efficient numerical computations and operations using the NumPy library.',
    link: 'https://github.com/WilliamKen/Global_Temperature_Analysis/blob/main/Global_Temperature.ipynb'
  },
  {
    name: 'Data Visualization with Matplotlib/Seaborn',
    description: 'Create insightful visualizations and plots using Matplotlib and Seaborn.',
    link: 'https://github.com/WilliamKen/Global_Temperature_Analysis/blob/main/Global_Temperature.ipynb'
  },
  {
    name: 'Machine Learning with sklearn and Random Forest Regressor',
    description: 'Develop and evaluate machine learning models using sklearn.',
    link: 'https://github.com/WilliamKen/Global_Temperature_Analysis/blob/main/Global_Temperature.ipynb'
  },
  {
    name: 'Frontend Development with React',
    description: 'Building interactive user interfaces with React components.',
    link: 'https://github.com/WilliamKen/Robyns-Spellbook/blob/main/src/components/SpellCard.js'
  },
  {
    name: 'State Management and Filtering',
    description: 'Implementing dynamic state management and filtering.',
    link: 'https://github.com/WilliamKen/Robyns-Spellbook/blob/master/Front%20End/spellSlots.js'
  },
  {
    name: 'Database Management with MySQL',
    description: 'Setting up and managing a MySQL database using environment variables.',
    link: 'https://github.com/WilliamKen/Robyns-Spellbook/blob/master/Back%20End/db.js'
  },
  {
    name: 'Database Connection and Population',
    description: 'Connecting to a MySQL database and populating it with data.',
    link: 'https://github.com/WilliamKen/Robyns-Spellbook/blob/master/Back%20End/populateDatabase.mjs'
  },
  {
    name: 'API Integration',
    description: 'Fetching and managing data from external APIs.',
    link: 'https://github.com/WilliamKen/Robyns-Spellbook/blob/master/Back%20End/populateDatabase.mjs'
  },
  {
    name: 'Connecting to Database from Frontend',
    description: 'Fetching and displaying data from the backend database on the frontend.',
    link: 'https://github.com/WilliamKen/Robyns-Spellbook/blob/master/Back%20End/server.js'
  },
  {
    name: 'Code Drawer Component',
    description: 'A React component for displaying and explaining code snippets in a drawer format.',
    link: 'https://github.com/WilliamKen/Portfolio/tree/master/src/components/CodeDrawer'
  },
  {
    name: 'Contact Form Implementation',
    description: 'A React component for handling contact form submissions using EmailJS.',
    link: 'https://github.com/WilliamKen/Portfolio/tree/master/src/components/ContactForm'
  },
  {
    name: 'Image Drawer Component',
    description: 'A React component for displaying a series of images in a modal drawer format.',
    link: 'https://github.com/WilliamKen/Portfolio/tree/master/src/components/ImageDrawer'
  },
  {
    name: 'Timeline CSS for Work History',
    description: 'CSS for creating a responsive and visually appealing timeline for work history.',
    link: 'https://github.com/WilliamKen/Portfolio/blob/master/src/css/WorkHistory.css'
  },
  {
    name: 'Animated CSS for Home Page',
    description: 'CSS animations for enhancing the visual appeal of the home page.',
    link: 'https://github.com/WilliamKen/Portfolio/blob/master/src/css/Home.css'
  },
  {
    name: 'React Router Navigation',
    description: 'Implementation of navigation using React Router for seamless routing between pages.',
    link: 'https://github.com/WilliamKen/Portfolio/blob/master/src/App.js'
  },
  {
    name: 'Connecting to Airtable with Environment Variables',
    description: 'Set up an Express server to connect and fetch data from Airtable using environment variables.',
    link: 'https://github.com/WilliamKen/Group-Fitness-Schedule/blob/master/backend/server.js'
  },
  {
    name: 'Dynamically Updated Schedule',
    description: 'Creating a dynamically updated schedule component in React that fetches data from Airtable.',
    link: 'https://github.com/WilliamKen/Group-Fitness-Schedule/blob/master/src/components/Schedule.js'
  }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-title">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
            <a href={skill.link} target="_blank" rel="noopener noreferrer" className="skill-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
