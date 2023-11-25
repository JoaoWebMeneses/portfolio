import React from 'react';
import Root from '../components/Root';
import "./Home.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Home() {
  return (
    <div>
      <h1 id='name'>Hi, I'm João Vitor</h1>
      <div id='socialmedia'>
        <div className='icons'>
          <FaGithub size={30} style={{width: '50px'}}/>
          <FaLinkedin size={30} style={{witdh: '50px'}}/>
          <FaInstagramSquare size={30} style={{width: '50px'}}/>
        </div>
      </div>
    </div>
  )
}

export default Home