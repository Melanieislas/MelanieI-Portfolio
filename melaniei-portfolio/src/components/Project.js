import React from 'react';
//import NavBar from './Navigation';
//import '../styles/Header.css';\
//import NavBar from './components/Navigation';
//import logo from './Horoscope.gif';
import horoscope from './assets/Horoscope.gif';
import buzzer from './assets/Buzzer.gif';
import highlighter from './assets/Highlighter.gif';
import forecast from './assets/weather-forecast.gif';
import password from './assets/password.gif';
import js from './assets/js.gif';
import { BsGithub } from 'react-icons/bs';
import '../components/Project.css'

function Project() {
    return (
        <div className='main-project'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <a href="https://github.com/izbeloro/Daily-Horoscope">
                                <div className='titles'>Daily Horoscope <BsGithub /> </div>
                            </a>
                        </div>
                        <img className='gifs' alt='Horoscope Chart' src={horoscope}></img>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <a href="https://github.com/Radioactive-mtb/Buzzer">
                                <div className='titles'>Buzzer <BsGithub /> </div>
                            </a>
                        </div>                        
                        <img className='gifs' alt='Twitter Logo' src={buzzer}></img>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <a href="https://github.com/Radioactive-mtb/highlighter">
                                <div className='titles'>Highlighter <BsGithub /> </div>
                            </a>
                        </div>                          
                        <img className='gifs' alt='Calendar Gif' src={highlighter}></img>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <a href="https://github.com/Melanieislas/Weather-Forecast">
                                <div className='titles'>Weather Forecast <BsGithub /> </div>
                            </a>
                        </div>                          
                        <img className='gifs' alt='Weather Forecast Gif' src={forecast}></img>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <a href="https://github.com/Melanieislas/Password_Generator">
                                <div className='titles'>Password Generator <BsGithub /> </div>
                            </a>
                        </div>                          
                        <img className='gifs' alt='Password Generator Gif' src={password}></img>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <a href="https://github.com/Melanieislas/Javascript_Quiz">
                                <div className='titles'>Javascript Quiz <BsGithub /> </div>
                            </a>
                        </div>                          
                        <img className='gifs' alt='Javascript build' src={js}></img>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Project;