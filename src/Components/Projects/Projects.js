import React from 'react'
import {projects} from './projArray'
import {Project} from './Project'
import './projects.scss'

//Here is the Project page that hold headers and project data
const Projects = () => {
    return (
        <div className="project-page" id="projects">
            <div className="project-headers" style={{color: 'white'}}>            
                <h1>My Projects</h1>
            </div>
            <div className='projects'>
                {projects.map((project)=>{
                    return <Project key={project.id} {...project} />
                })}
            </div>
        </div>
    )
}

export default Projects;
