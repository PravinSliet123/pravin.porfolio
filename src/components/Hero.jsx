import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SplashCursor from './SplashCursor';
import { MdEmail } from 'react-icons/md';

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects', value: '15+' },
  { label: 'Clients', value: '8+' },
];

const Hero = () => {
  return (
    <section className="hero-bg">
        <SplashCursor/>
      <div className="hero-card">
        <div className="hero-left">
          <h1 className="hero-title">BUILDING NEXT-LEVEL WEB EXPERIENCES</h1>
          <p className="hero-desc">
            I’m Pravin, a passionate Full Stack Developer crafting immersive, high-performance web apps with modern tech. Let’s build something amazing together.
          </p>
          <div className="hero-btn-row">
            <a href="#projects" className="hero-btn primary">View Projects</a>
            <a href="#contact" className="hero-btn secondary">Contact Me</a>
          </div>
          <div className="hero-stats">
            {stats.map(stat => (
              <div className="hero-stat" key={stat.label}>
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-socials">
            <a href="https://github.com/PravinSliet123" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pravincse17" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:pravin.cse17@gmail.com">
              <MdEmail size={24} />
            </a>
          </div>
        </div>
        <div className="hero-right">
          {/* Replace the src with your own image or illustration */}
          <img src="/images/profile.png" alt="Developer" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 