import React from 'react';
import './App.css';
//import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/Navigation';

function App() {
  return(
    <Router>
      <div className='page-container'>
        <div className='content-wrap'>
          <NavBar />
          {/*<Header />*/}
          {/*<Project />*/}
        </div>
      <Routes>
        <Route path='/about-me' element={<Project/>} />
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
