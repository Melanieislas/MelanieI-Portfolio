import React from 'react';
import NavBar from './Navigation';
//import '../styles/Header.css';\
//import NavBar from './components/Navigation';

function Header() {
    return (
        <header className="header">
          {<NavBar />}
        </header>
      );
}

export default Header;