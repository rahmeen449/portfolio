import React from 'react'
import './style.css'
import Comp1 from '../../Components/Comp1/index'
import past from '../img/past-img.jpeg'
import chex from '../img/Chex.Ai.svg'
import righthere from '../img/right-here.svg'
import alaya from '../img/Alaya.svg'
import hexawallet from '../img/HexaWallet.svg'
import bringfresh from '../img/bring-fresh.svg'
import sentics from '../img/sentics.svg'
// import react from '../img/react.png'
// import javascript from '../img/javascript.png'
// import redux from '../img/redux.png'
// import next from '../img/next.png'
// import node from '../img/node.png'
// import vue from '../img/vue.webp'
// import angular from '../img/angular.png'
import javascript from '../img/Javascript.png'
import react from '../img/React.png'
import redux from '../img/Redux.png'
import vue from '../img/Vue.js.png'
import next from '../img/Next.js.png'
import node from '../img/NodeJS.png'
import gitlab from '../img/GitLab.png'
import github from '../img/GitHub.png'
import bootstrap from '../img/Bootstrap.png'

import project1 from '../img/Project1.svg'
import project2 from '../img/Project2.svg'
import project3 from '../img/Project3.svg'
import project4 from '../img/Project4.svg'
import project5 from '../img/Project5.svg'
import project6 from '../img/Project6.svg'
import project7 from '../img/Project7.svg'


const HomeScreen = () => {
    return (
        <div>
            {/* //////////////////     HOME-PAGE      ///////////// */}
            <div className='home'>
                <div className='home-content'>
                    <div className='content-maker'>
                        <div className='developer'>
                            <b>FullStack Developer</b>
                        </div>
                        <div className='develop-content'> 
                            I am the Tech-engine for companies & start-ups,
                            working out the best technical solutions for my
                            clients whether it be Web or an Application.
                            Firm believe in collaboration and growing together. 
                        </div>
                    </div>
                </div>
                <div className='part'>
                    <Comp1 />
                </div>
            </div> 

            {/* ///////////////      PAST YEARS      //////////////// */}

            <div className='past-years'>
                <div className='past-content'>
                    <div className='past-heading'>
                        <b>Over the past 6 years,</b>
                    </div>
                    <div className='past-para'>
                        <div className='past-text'>
                            I am a Full Stack Developer having more than 5 years of
                            experience in developing multi-tier scalable web-based solutions.
                            During my career in development, I have had the thorough
                            experience of working on several phases of the software
                            development cycle from gathering requirements to the most
                            technical stages like UI/UX and development & testing.
                        </div>
                        <div className='past-text'>
                            Techie comes a businessman with solid experience in building
                            software and finding opportunities.
                            I have directly contributed to and led the development
                            team of fintech, health, and enterprise software including
                            ERPs and CRMs, web, cloud, and mobile applications.
                        </div>
                        <div className='past-text'>
                            Being the cheif executive officer at TDC, I am
                            passionate about building high-performance
                            technology teams focused on building great digital
                            products and services to make this world a better place.
                        </div>
                        <div className='past-text'>
                            TDC is built on the right vision, core values,
                            deep trust, and strong technical capabilities.
                            Also, I am super excited to collaborate and support local (Pakistani) founders
                            as it's the peak time to cooperate with each other.
                        </div> 
                    </div>
                </div>
                <div>
                    <img src={past} className="past" />
                </div>
            </div>

            {/* //////////////     BUILD AND WRITE      ///////////// */}
            
            <div className='buil-and-write'>
                <div className='build-write'>
                    <div className='build-stuff'>
                        <div className='build-content'>
                            <div className='build-heading'>
                                <b>My Projects</b>
                            </div>
                            <div className='build-para'>
                                Chex.AI, Atoms, Alaya Care, Right Hire

                            </div>
                            <button className='btn'><a href="#projects"> SEE MY WORK </a></button>
                        </div>
                    </div>
                    <div className='engineering-stuff'>
                        <div className='build-content'>
                            <div className='build-heading'>
                                <b> My Skills </b>
                            </div>
                            <div className='build-para'>
                                React, React Native, Javascript, Redux

                            </div>
                            <button className='btn'><a href="#skills">My Skills</a></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ////////////////////////     My Projets     /////////////////////////// */}
            <section class="projects" id="projects">

                <div className='my-project'><b>My Projects</b></div>

                <div className='project1'>
                    <img src={project1} className='project-img' />
                    <div className='project-content'>
                        <img src={chex} className='chex' />
                        <div className='project-para'>
                            An AI-based car inspection platform,
                            that helps companies like UBER, ZOOM
                            to speed up the process of registration (for drivers).
                            With the help of this website, the drivers started receiving more registrations.
                            React Native for Mobile Application MERN Stack for website NodeJS with AWS Lambda
                        </div>
                    </div>
                </div>

                <div className='project1'>
                    <img src={project4} className='project-img' />
                    <div className='project-content'>
                        <div className='atom-text'><b>ATOMS</b></div>
                        <div className='project-para'>
                            An AI-based car inspection platform,
                            that helps companies like UBER, ZOOM
                            to speed up the process of registration (for drivers).
                            With the help of this website, the drivers started receiving more registrations.
                            React Native for Mobile Application MERN Stack for website NodeJS with AWS Lambda
                        </div>
                    </div>
                </div>

                <div className='project1'>
                    <img src={project2} className='project-img' />
                    <div className='project-content'>
                        <img src={righthere} className='chex' />
                        <div className='project-para'>
                            An AI-based car inspection platform,
                            that helps companies like UBER, ZOOM
                            to speed up the process of registration (for drivers).
                            With the help of this website, the drivers started receiving more registrations.
                            React Native for Mobile Application MERN Stack for website NodeJS with AWS Lambda
                        </div>
                    </div>
                </div>

                <div className='project1'>
                    <img src={project3} className='project-img' />
                    <div className='project-content'>
                        <img src={alaya} className='chex' />
                        <div className='project-para'>
                            An AI-based car inspection platform,
                            that helps companies like UBER, ZOOM
                            to speed up the process of registration (for drivers).
                            With the help of this website, the drivers started receiving more registrations.
                            React Native for Mobile Application MERN Stack for website NodeJS with AWS Lambda
                        </div>
                    </div>
                </div>

                <div className='project1'>
                    <img src={project5} className='project-img' />
                    <div className='project-content'>
                        <img src={hexawallet} className='chex' />
                        <div className='project-para'>
                            An AI-based car inspection platform,
                            that helps companies like UBER, ZOOM
                            to speed up the process of registration (for drivers).
                            With the help of this website, the drivers started receiving more registrations.
                            React Native for Mobile Application MERN Stack for website NodeJS with AWS Lambda
                        </div>
                    </div>
                </div>

                <div className='project1'>
                    <img src={project6} className='project-img2' />
                    <div className='project-content'>
                        <img src={bringfresh} className='chex' />
                        <div className='project-para'>
                            An AI-based car inspection platform,
                            that helps companies like UBER, ZOOM
                            to speed up the process of registration (for drivers).
                            With the help of this website, the drivers started receiving more registrations.
                            React Native for Mobile Application MERN Stack for website NodeJS with AWS Lambda
                        </div>
                    </div>
                </div>

                <div className='project1'>
                    <img src={project7} className='project-img' />
                    <div className='project-content'>
                        <img src={sentics} className='chex' />
                        <div className='project-para'>
                            An AI-based car inspection platform,
                            that helps companies like UBER, ZOOM
                            to speed up the process of registration (for drivers).
                            With the help of this website, the drivers started receiving more registrations.
                            React Native for Mobile Application MERN Stack for website NodeJS with AWS Lambda
                        </div>
                    </div>
                </div>

            </section>

            {/* //////////////       SKILLS      /////////////// */}
           
            <section className='skills-expertise' id='skills'>
                <div class="project-heading">
                    <b>Skills And Expertise</b>
                </div>
                <div className='part1'>
                    <img src={javascript} className='icon1' />
                    <img src={react} className='icon1' />
                    <img src={redux} className='icon1' />
                    <img src={vue} className='icon1' />
                    <img src={next} className='icon1' />
                </div>
                <div className='part2'>
                    <img src={node} className='icon2' />
                    <img src={gitlab} className='icon3' />
                    <img src={github} className='icon3' />
                    <img src={bootstrap} className='icon3' />
                </div>


            </section>

            {/* /////////////       CONTACT INFORMATION        ////////////////////////// */}
            
            <div className='contact-info'>
                <div className='contact-content'>
                    <div className='contact-heading'>
                        <b>   Send me a message! </b>
                    </div>
                    <div className='contact-para'>
                        Got a question or proposal, or just want to say hello? Go ahead.
                    </div>
                </div>
                <div className='contactForm'>
                    <div className='name-email'>
                        <div className='input1'>
                            <label className='label'>Your Name</label><br />
                            <input type="text" className='placeholder' />
                        </div>
                        <div>
                            <label className='label'>Email Address</label><br />
                            <input type="text" className='placeholder' />
                        </div>
                    </div>
                    <div>
                        <label className='label'>Your Message</label><br />
                        <input type="text" className='placeholder2' />
                    </div>
                    <button className='btn'><a href="#projects"> SEE MY WORK </a></button>
                </div>
            </div>

        </div>
    );
}
export default HomeScreen;
