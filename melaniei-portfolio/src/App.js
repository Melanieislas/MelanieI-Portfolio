import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
//import NavBar from './components/Navigation';

function App() {
  return(
    <>
      <div className='page-container'>
        <div className='content-wrap'>
          <Header />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
