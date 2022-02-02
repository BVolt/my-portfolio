import React from 'react';
import {Link} from 'react-router-dom';
import './nav.scss'
import MenuIcon from '@material-ui/icons/Menu'

function Navigation({menu, setMenu, isResume = false}){
    return (
        <div className="nav">
            {/* <div className="wrapper"> */}
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
            {/* </div> */}
        </div>
    );
}

export default Navigation;