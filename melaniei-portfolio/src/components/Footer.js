import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs';
import '../components/Footer.css'

function Footer() {
    return (
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    <h4 className='reach-me'>Reach Me!</h4>
                    <a className='col' href="https://github.com/Melanieislas">
                        <h2><BsGithub /></h2>
                    </a>
                    <a className='col' href="https://www.indeed.com/">
                        <h2 className='col'>< BsLinkedin/></h2>
                    </a>
                    <a className='col' href="https://twitter.com/">
                        <h2 className='col'><BsTwitter /></h2>
                    </a>
                </div>
            </div>
        </div>
      );
}

export default Footer;