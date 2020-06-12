import React from 'react';
import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <div className="page-loader"></div>
    </div>
  );
}

export default App;
