import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import WorkHistory from './pages/WorkHistory';
import './css/global.css';
import './components/Navbar/Navbar.css';
import './css/About.css';
import './css/Home.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Me</NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Skills</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
          <NavLink to="/work-history" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Work History</NavLink>
        </div>
      </nav>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work-history" element={<WorkHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
