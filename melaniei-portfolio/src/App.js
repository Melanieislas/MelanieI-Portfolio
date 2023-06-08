import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from './components/AboutMe';

function App() {
  return(
    <Router>
      <div className='page-container'>
        <div className='content-wrap'>
          <Header />
        </div>
      <Routes>
        <Route path='/MelanieI-Portfolio' element={<AboutMe/>} />
        <Route path='/MelanieI-Portfolio/portfolio' element={<Project/>} />
        <Route path='/MelanieI-Portfolio/contact' element={<Contact/>} />
        <Route path='/MelanieI-Portfolio/resume' element={<Resume/>} />
      </Routes>
      </div>
      <Footer />
    </Router>
  
  );
}

export default App;
