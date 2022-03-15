import React from 'react';
import './nav.scss'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//This nav component is the top bar the sets menu conditions
function Navigation({menu, setMenu, isResume = false}){
    return (
        <div className="nav">
            <div className="left">
                <a href="/"><h3>Brenden Johnson</h3></a>
            </div>
            <div className="right" style={{display:'flex'}}>
                <EmailIcon className='nav-icons' onClick={()=>window.location.href="mailto:brendenj7@hotmail.com"}/>
                <PhoneIcon className='nav-icons' onClick={()=>window.location.href="tel:+9514076422"}/>
                <GitHubIcon className='nav-icons' onClick={()=>{window.open("https://github.com/BVolt", '_blank')}}/>
                {/* <LinkedInIcon className='nav-icons' onClick={()=>{window.open("https://www.linkedin.com/in/brenden-tyler-johnson", '_blank')}}/> */}
                {isResume ?
                <div className="pop-up" onClick={()=>window.location.assign('/')}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                :
                <div className="pop-up" onClick={()=>setMenu(!menu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                }
            </div>
        </div>
    );
}

export default Navigation;