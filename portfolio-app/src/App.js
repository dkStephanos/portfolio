import React from 'react';
import { Container } from 'reactstrap';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './App.css';
import './Stylesheets/Responsive.css';

function App() {
  return (
    <Container className="App">
      <About className="About"/>
      <Resume className="Resume"/>
      <Projects className="Projects"/>
      <Contact className="Contact"/>
    </Container>
  );
}

export default App;
