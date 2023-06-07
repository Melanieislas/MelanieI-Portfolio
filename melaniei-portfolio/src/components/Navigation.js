import React from 'react';
import '../components/Navigation.css'
import {  Link } from "react-router-dom";

function NavBar() {
    return (
    <>
    <div className='main-navbar'>
        <div className='row'>
            <div className='name col'>Melanie Islas</div>
            <li className='col'>
            <Link to="/" className='link'>About Me</Link>
            </li>
            <li className='col'>
            <Link to="/portfolio" className='link'>Portfolio</Link>
            </li>
            <li className=' col'>
            <Link to="/contact" className='link'>Contact</Link>
            </li>
            <li className='col'>
            <Link to="/resume" className='link'>Resume</Link>
            </li>
        </div>
  </div>

    </>);
}

export default NavBar;