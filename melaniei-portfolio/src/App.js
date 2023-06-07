import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from './components/AboutMe';

function App() {
  return(
    <Router>
      <div className='page-container'>
        <div className='content-wrap'>
          <Header />
          {/*<NavBar />*/}
        </div>
      <Routes>
        <Route path='/about-me' element={<AboutMe/>} />
        <Route path='/portfolio' element={<Project/>} />
        <Route path='/contact' element={<Project/>} />
        <Route path='/resume' element={<Project/>} />
      </Routes>
      </div>
      <Footer />
    </Router>
  
  );
}

export default App;
