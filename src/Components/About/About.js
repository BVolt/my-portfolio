import React from 'react'
import './about.scss'
import DescriptionIcon from '@material-ui/icons/Description'
import {Link} from 'react-router-dom'

//Here is the about me page which returns our paragraphs and resume link
const About = () => {
    return (
        <div className="about-page" id="about">
            <h1 style={{textAlign: "center", color: 'white'}}>About Me</h1>
            <div className="img-self">
                    <img style={{width: "400px"}}src={require('../../Assets/About/johnsonPic.jpg')} alt='Me'/>
                </div>
            <div className="education">
                <h2>Education</h2>
                <p>I received my education in computer science at Norco College where I was awarded both a Certificate and Associates of Science in Computer Programming in December 2021. Through my technical education I worked with programming languages such as C++, Javascript, Java, HTML, CSS, and ARM Assembly. This education included courses on systems analysis, operating systems, data structures, physics, calculus, and discrete mathematics. </p>
            </div>
            <div className="goals">
                <h2>Goals</h2>
                <p>I have found life to be most excited when I am being challenged on a frequent basis. Solving challenges allows me to grow and programming has been an elegant way to throw difficult challenges at my mind. Learning everyday about programming web applications has been rewarding and I seek a career that can continue that experience. Working on both front end and back end projects interests me because I desire to understand the interelation between all components of a web application.</p>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <p>From my technical education and my personal dedication, I have picked up many skills. I have excellent written and oral communication skills. I have great mathematical training with discrete computer math such as boolean algebra and many years of calculus courses. I have experience with object oriented programming methodoligies and modeling techniques. I have experience working with data structures such as stacks, queues, linked lists, and trees in Java and C++. I have worked with the React Javascript Library as well as the ExpressJS framework.</p>
            </div>
            <div style={{textAlign: "center", color: 'white'}}>
                <h2>Resume</h2>
            </div>
            <div className="icon-container">
                <Link to="/Resume"><DescriptionIcon className="icon" /></Link>
            </div>
        </div>
    )
}

export default About;
