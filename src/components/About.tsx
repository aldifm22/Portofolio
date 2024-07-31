// src/components/About.tsx
import React from 'react';
import './About.css';

interface AboutProps {
  imageUrl: string;
  description: string;
}

const About: React.FC<AboutProps> = ({ imageUrl, description }) => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={imageUrl} alt="About me" className="about-image" />
        <p>{description}</p>
      </div>
    </section>
  );
};

export default About;
