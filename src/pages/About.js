import React, { useEffect } from 'react';
import profilePic from '../assets/images/profile.jpg';
import '../css/About.css';

function About() {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.about-hero');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      hero.style.transform = `translateY(${scrollTop * 0.5}px)`;
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.about-section').forEach(section => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="hero-text">
            <h1 className="hero-heading">Hello, I'm a Web Developer and Designer</h1>
            <p className="hero-subheading">
              My passion is creating detailed, eye-catching projects that convey important information naturally 
              and effectively.
            </p>
          </div>
        </div>
      </div>
      <div className="about-content">
        <section className="about-section">
          <h2 className="section-heading">Professional Background</h2>
          <p className="section-text">
            I am a developer with a strong background in Management Information Systems, 
            specializing in database design, data science, object-oriented programming, and web design. 
            I excel at transforming complex data into actionable insights, making it easier to recognize 
            trends and patterns.
          </p>
        </section>
        <section className="about-section">
          <h2 className="section-heading">My Passion</h2>
          <p className="section-text">
            Over the past few years, I have honed my skills in graphic design, developing a keen eye for detail. 
            This attention to detail is evident in all my work, whether it be data analysis or 
            web design. I aim to transform data into actionable insights with a touch of creativity.
          </p>
        </section>
        <section className="about-section">
          <h2 className="section-heading">Goals</h2>
          <p className="section-text">
            I am eager to leverage my expertise in a team-oriented environment, combining my analytical skills 
            with my design acumen to contribute to impactful projects. I aim to continue growing in the field of 
            web development and design, always striving to create intuitive and visually appealing user experiences.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
