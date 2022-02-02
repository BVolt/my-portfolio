import React from 'react';
import {Link} from 'react-router-dom'
import './Menu.scss'

const Menu = ({menu, setMenu}) => {
  return <div className={"menu "+(menu && "active")}>
    <ul>
      <li onClick={()=>setMenu(false)}>
        <a href="#welcome">Home</a>
      </li>
      <li onClick={()=>setMenu(false)}>
        <a href="#projects">Projects</a>
      </li>
      <li onClick={()=>setMenu(false)}>
      <a href="#about">About</a>
      </li>
      <li onClick={()=>setMenu(false)}>
          <Link to="/Resume">Resume</Link>
      </li>
    </ul>
  </div>
  
};

export default Menu;

  // <div>
  //       <p><Link to="/Resume">Resume</Link></p>
  //       <p><a href="#about">About</a></p>
  //       <p><a href="#projects">Projects</a></p>
  //       <p><a href="#welcome">Home</a></p>
  // </d
