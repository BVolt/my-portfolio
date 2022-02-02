import React from 'react';
import {Link} from 'react-router-dom'
import './welcome.scss'

const Welcome = () => {
  return <>
  <div className="welcome-page" id="welcome">
    <div className="welcome-img">
      <img src={require('./background.jpg')}/>
    </div>
    <div className="welcome-split">
      <div className="welcome-contents">
        <div className="welcome-headers">
          <h1>Welcome, I am</h1>
          <h1>Brenden Johnson</h1>
          <h2>Web Application Developer</h2>
        </div>
        <div className="welcome-links">
          <a href="#projects">Check Out My Projects</a>
          <a href="#about">About Me</a>
          <Link to="/Resume">My Resume</Link>
        </div>
      </div>
      <div className="img-self">
        <img style={{width: "400px"}}src={require('./background2.jpg')}/>
      </div>
    </div>
  </div>
  </>
};

export default Welcome;
