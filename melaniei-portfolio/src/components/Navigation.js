import React from 'react';
import '../components/Navigation.css'
//import { NavLink } from 'react-router-dom'
//import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
///import Container from 'react-bootstrap/Container';
///import Nav from 'react-bootstrap/Nav';
///import Navbar from 'react-bootstrap/Navbar';
//import Project from './components/Project';
import {  Link } from "react-router-dom";

//import '../components/Navigation.css'

function NavBar() {
    return (
    <>
    <div className='main-navbar'>
        <div className='row'>
            <div className='name col'>Melanie Islas</div>
            <li className='col'>
            <Link to="/about-me" className='link'>About Me</Link>
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