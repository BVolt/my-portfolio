import React from 'react'
import {projects} from './projArray'
import './projects.scss'
import watchSnap from './watchSnap.png'
import clientTable from './clientTable.jpg'
import activitiesMenu from './activitiesMenu.jpg'


//Here is the Project page that hold headers and project data
const Projects = () => {
    return (
        <div className="project-page" id="projects">
            <div className="project-headers">            
                <h1>My Projects</h1>
                <h2>Here are the web applications I have built</h2>
            </div>
            <div className='projects'>
                <div className='project'>
                    <img src={watchSnap} alt=''/>
                    <h2>{projects[0].name}</h2>
                    <h3>{projects[0].description}</h3>
                    <button onClick={()=>{window.location.href = projects[0].gitUrl}}>Source Code</button>
                    <button onClick={()=>{window.location.href = projects[0].hostedUrl}}>Hosted Link</button>
                </ div>
                <div className='project'>
                    <img src={activitiesMenu} alt=''/>
                    <h2>{projects[1].name}</h2>
                    <h3>{projects[1].description}</h3>
                    <button onClick={()=>{window.location.href = projects[1].gitUrl}}>Menu Source</button>
                    <button onClick={()=>{window.location.href = projects[1].hostedUrl}}>Hosted Link</button>
                    <button onClick={()=>{window.location.href = projects[1].gitApi}}>API Source</button>
                </ div>
                <div className='project'>
                    <img src={clientTable} alt=''/>
                    <h2>{projects[2].name}</h2>
                    <h3>{projects[2].description}</h3>
                    <button onClick={()=>{window.location.href = projects[2].gitUrl}}>Source Code</button>
                    <button onClick={()=>{window.location.href = projects[2].hostedUrl}}>Hosted Link</button>
                </ div>
            </div>
        </div>
    )
}

export default Projects;
