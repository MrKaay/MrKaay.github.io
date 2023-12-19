import React from "react";
import proj1 from "../assets/Project1.png";
import proj2 from "../assets/Project2.png";
import './Projects.css';

const Projects = () => {
    return(
        <div className='main-containerProj'>
            <div className='projects'>
                <div>
                <h1 className='heading' style={{ width: '100%' }}>Here are some of my projects</h1>
                    <label for='projectimg' class='projlabel'>1. Survey Form </label>
                    <img id='projectimg' src={proj2} alt='project 1' />
                    <p id='projectcap'>The Survey Form in my portfolio is a significant achievement, designed as an 
                        interactive tool to gather vital user insights. It's comprehensive, covering 
                        user info, job details, feedback options, and comment sections. The design plays 
                        a crucial role, featuring an engaging background and consistent modern elements 
                        like text boxes and dropdowns for a seamless experience. This addition doesn't 
                        just enhance user engagement but also elevates the website's overall appeal, 
                        fostering better comprehension of user preferences and creating a more responsive 
                        platform through encouraging interaction.</p>
                </div>
                <div>
                    <label for='projectimg' class='projlabel'>2. Tribute Page</label>
                    <img id='projectimg' src={proj1} alt='project 1' />
                    <p id='projectcap'>The Tribute Page I crafted is a heartfelt homage to Mr. Khayelihle Manyathi, showcasing 
                    his incredible journey in a captivating timeline. It's a tapestry of moments, from his birth in South 
                    Africa to his impactful role as a Software Network Engineer. This page is more than just HTML - it's 
                    a story, inviting users to explore the life of someone truly inspiring. Like the Survey Form, it's 
                    designed to engage, with an image that draws you in and a timeline that paints a vivid picture. It's 
                    a testament to his dedication and an invitation to celebrate his achievements.</p>
                </div>
            </div>
        </div>
    )
};

export default Projects;
