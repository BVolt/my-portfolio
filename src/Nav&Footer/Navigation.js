import React from 'react';
import './nav.scss'

//This nav component is the top bar the sets menu conditions
function Navigation({menu, setMenu, isResume = false}){
    return (
        <div className="nav">
            <div className="left">
                <a href="/"><h3>Brenden's Portfolio</h3></a>
            </div>
            <div className="right">
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