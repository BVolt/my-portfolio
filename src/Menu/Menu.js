import React from 'react';
import {Link} from 'react-router-dom'
import './Menu.scss'

//This component is the menu side bar with dynamic class depending on menu state
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