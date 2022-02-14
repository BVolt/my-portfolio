import React from 'react'
import {projects} from './projArray'
import './projects.scss'
import furnSnap from './furnSnap.jpg'
import watchSnap from './watchSnap.png'
import clientTable from './clientTable.jpg'
import activitiesMenu from './activitiesMenu.jpg'


//Here is the Project page that hold headers and project data
const Projects = () => {
    return (
        <div className="project-page" id="projects">
            <div className="project-headers" style={{color: 'white'}}>            
                <h1>My Projects</h1>
                <h2>Here are the web applications I have built</h2>
            </div>
            <div className='projects'>
            <div className='project'>
                    <img src={furnSnap} alt=''/>
                    <h2>{projects[0].name}</h2>
                    <h3>{projects[0].description}</h3>
                    <div className="proj-btn">
                        <button onClick={()=>{window.open(projects[0].gitUrl, '_blank')}}>Shop Source</button>
                        <button onClick={()=>{window.open(projects[0].hostedUrl, 'blank')}}>Hosted Link</button>
                        <button onClick={()=>{window.open(projects[0].gitApi, 'blank')}}>Back-End Source</button>
                    </div>
                </ div>
                <div className='project'>
                    <img src={watchSnap} alt=''/>
                    <h2>{projects[1].name}</h2>
                    <h3>{projects[1].description}</h3>
                    <div className="proj-btn">
                        <button onClick={()=>{window.open(projects[1].gitUrl, 'blank')}}>Source Code</button>
                        <button onClick={()=>{window.open(projects[1].hostedUrl, 'blank')}}>Hosted Link</button>
                    </ div>
                </ div>
                <div className='project'>
                    <img src={activitiesMenu} alt=''/>
                    <h2>{projects[2].name}</h2>
                    <h3>{projects[2].description}</h3>
                    <div className="proj-btn">
                        <button onClick={()=>{window.open(projects[2].gitUrl, 'blank')}}>Menu Source</button>
                        <button onClick={()=>{window.open(projects[2].hostedUrl, 'blank')}}>Hosted Link</button>
                        <button onClick={()=>{window.open(projects[2].gitApi, 'blank')}}>API Source</button>
                    </div>
                </ div>
                <div className='project'>
                    <img src={clientTable} alt=''/>
                    <h2>{projects[3].name}</h2>
                    <h3>{projects[3].description}</h3>
                    <div className="proj-btn">
                        <button onClick={()=>{window.open(projects[3].gitUrl, 'blank')}}>Source Code</button>
                        <button onClick={()=>{window.open(projects[3].hostedUrl, 'blank')}}>Hosted Link</button>
                    </ div>
                </ div>
            </div>
        </div>
    )
}

export default Projects;
