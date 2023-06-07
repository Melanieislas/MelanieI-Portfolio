import React from 'react';
import NavBar from './Navigation';

function Header() {
    return (
        <header className="header">
          {<NavBar />}
        </header>
      );
}

export default Header;