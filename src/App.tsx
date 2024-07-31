
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const aboutDescription = 'Professional web developer with experience in building high-quality websites and applications.';
  const aboutImageUrl = 'https://media.licdn.com/dms/image/D5603AQGNu_tScKsGqg/profile-displayphoto-shrink_400_400/0/1666663710690?e=1727913600&v=beta&t=PXBQOmT_m3dskGFQLzm8g2ll9NcJN8A4R_vcGZGhOHk'; 

  return (
    <div className="App">
      <Navbar />
      <About imageUrl={aboutImageUrl} description={aboutDescription} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
