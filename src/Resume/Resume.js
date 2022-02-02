import React from 'react'
import './resume.scss'
import Navigation from '../Nav&Footer/Navigation'

const Resume = () => {
    return (<>
        <Navigation isResume={true}/>
        <div className="resume">
            <embed src={require("./myResume.pdf" )} width="100%" height="100%"/>
        </div>
        </>
    )
}

export default Resume
