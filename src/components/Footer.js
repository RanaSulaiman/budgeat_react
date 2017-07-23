import React, { Component } from 'react';
// import {Link} from 'react-router-dom'

// react-icons
import FacebookSquare from 'react-icons/lib/fa/facebook-square';
import GithubSquare from 'react-icons/lib/fa/github-square';
// import Mail from 'react-icons/lib/ti/mail';
// import MailRead from 'react-icons/lib/go/mail-read';
// import Mention from 'react-icons/lib/go/mention';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square'
import FaTwitterSquare from  'react-icons/lib/fa/twitter-square'


export const Footer = () => (

    <div className='container footer'>
      <div className='row'>
        <div className='col-md-2 col-xsm-6 vcenter' id='social'>
          <section id='social-link'>
            <a href='https://facebook.com/' target= '_blank'><FacebookSquare className='footer-icon'/></a>

            <a href='https://github.com/RanaSulaiman' target= '_blank'><GithubSquare className='footer-icon'/></a>

            {/* <a href='https://github.com/RanaSulaiman' target= '_blank'><GitSquare className='footer-icon'/></a> */}


            {/* <a href='mailto:her@gmail.com' target= '_blank'><Mail className='footer-icon'/></a>

            <a href='mailto:her@gmail.com' target= '_blank'><MailRead className='footer-icon'/></a>

            <a href='mailto:her@gmail.com' target= '_blank'><Mention className='footer-icon'/></a> */}

            <a href='mailto:her@gmail.com' target= '_blank'><FaEnvelopeSquare className='footer-icon'/></a>

            <a href='https://twitter.com/abdelghani_rana' target= '_blank'><FaTwitterSquare className='footer-icon'/></a>
          </section>

        </div>

        <div className='col-md-4 col-xsm-6' id='disclaimer'>
          <section>&copy; 2017 by Rana Sulaiman, All rights reserved.</section>
        </div>
      </div>{/*row*/}

    </div>//container

)

export default Footer;
