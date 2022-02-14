import React from 'react';
import {Link} from 'react-router-dom'
import './welcome.scss'


//This component is the welcome page
const Welcome = () => {
  return <>
  <div className="welcome-page" id="welcome">
    <div className="welcome-contents">
        <h1>Brenden Johnson</h1>
        <h2>Web Developer</h2>
        <div className="button-box">
          <button className='btn' onClick={()=>window.location.href="#projects"}>Explore My Projects</button>
          <button className='btn' onClick={()=>window.location.href="#foot"}>Contact Me</button>
        </div>
    </div>

    {/* <div className="welcome-img">
      <img src={require('./background.jpg')} alt='tree'/>
    </div> */}
    {/* <div className="welcome-split">
      <div className="welcome-contents">
        <div className="welcome-headers">
          <h1>Brenden Johnson</h1>
          <h2>Web Developer</h2>
        </div>
        <div className="welcome-links">
          <a href="#projects">Check Out My Projects</a>
          <a href="#about">About Me</a>
          <Link to="/Resume">My Resume</Link>
          <a href="#foot">Contact Me</a>
        </div>
      </div>
      <div className="img-self">
        <img style={{width: "400px"}}src={require('./johnsonPic.jpg')} alt='Me'/>
      </div>
    </div> */}
  </div>
  </>
};

export default Welcome;
