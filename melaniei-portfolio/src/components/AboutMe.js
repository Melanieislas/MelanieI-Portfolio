import React from 'react';
import ProfilePic from './assets/ProfilePic.jpg';
import '../components/AboutMe.css'

function AboutMe() {
    return (
        <>
            <div className='main-container-am'>
                <div className='row leftrow'>
                    <div className='col '>
                        <img className='profilepic' alt='Melanie Islas profile' src={ProfilePic}></img>
                    </div>
                    <div className='col'>
                        <div className='row title'>Hi, I'm Melanie</div>
                        <div className='row description'>
                            I'm a junior web developer on a mission to build beautiful, intuitive, and functional websites. Let's talk tech! #fullstackdev #webdeveloper #MERNstack
                        </div>
                    </div>
                </div>
            </div>
        </>
      );
}

export default AboutMe;