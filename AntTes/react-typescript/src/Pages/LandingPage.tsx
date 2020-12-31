import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Jumbotron, Row, Col, Button } from 'reactstrap';
import { Helmet } from 'react-helmet';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import ATSpin from '../Components/ATSpin';
import ButtonLabels from '../Components/ButtonLabels';
import ATPic from '../Styles/Images/AnthonyTesoriero.png'

const LandingPage = () => {
    return (
        <div>
            <Navigation pageName="Home"/>
            <Jumbotron className="LandingJumbo">
                <Container>
                    <Row>
                        <Col>
                            <h1>Hi, I'm Anthony</h1>
                            <h3>"The Secret Incredient is Nothing"</h3>
                        </Col>
                        <Col>
                        <ATSpin image={ATPic}/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            
            <Container>
                {/* AT Tab */}
                <h1><a href="/eats"><span style={{color:"#4281A4"}}>_</span></a></h1>

                {/* Description */}
                <h2>
                    I&#39;m currently a Computer Science major with an Artificial Intelligence concentration
                    at Rowan University in Glassboro, NJ. #RowanPROUD🦉
                </h2>

                <br />

                {/* --= Resume =-- */}
                <h1 className="centered" id="resume">R&eacute;sum&eacute;</h1>
                <span className="centered"><Button outline color="primary" href='../Styles/Documents/AnthonyTesorierosResume.pdf'>Open Full PDF</Button></span>
                <h2 className="centered">
                    <a href="#education">Education</a>  {' '}-{' '}  
                    <a href="#experience">Experience</a>  {' '}-{' '} 
                    <a href="#projects">Projects</a>  {' '}-{' '}  
                    <a href="#skills">Skills</a>
                </h2>
                
                {/* Education */}
                <h4 id="education">Education</h4>
                <hr />

                {/* Logo
                <div className="grayScale">
                    <a href="http://rowan.edu" target="_blank">
                        <img className="icon" src={RowanTorch} alt="Avatar" width="50px" style={{textAlign:'left'}} />
                    </a>
                </div>
                */}
                {/* Rowan */}
                <Row>
                    <Col xs="8">
                        <h2>Rowan University, <text className="itemName">Glassboro, NJ</text></h2>
                        <h4 className="itemInfo">B.S. in Computer Science, Artificial Intelligence Concentration</h4>
                        <h4 className="itemInfo">Minor in Mathematics</h4>

                    </Col>
                    <Col xs="4"><h4 className="align-right itemTime">anticipated May 2021</h4></Col>
                </Row>
                <br />
                <Row>
                    <Col xs="6">
                        <h4 className="itemList">Relevant Coursework</h4>
                        <ul className="course">
                            <li>Object Oriented Programming</li>
                            <li>Foundations of Computer Science</li>
                            <li>Lab Techniques</li>
                            <li>Computer Organization</li>
                            <li>Data Structures & Design and Analysis of Algorithms</li>
                            <li>Linear Algebra</li>
                            <li>Calculus I, II, III</li>
                            <li>Probability & Statistics</li>
                            <li>Programming Languages</li>
                            <li>Artificial Intelligence</li>
                            <li>Machine Learning</li>
                            <li>Cyber Security</li>
                            <li>Operating Systems</li>
                            <li><a href="#mitigationsRepository" style={{color: '#393c3d'}}>Software Engineering (Role: Agile Product Owner)</a></li>
                            <li>Graduate Advanced Robotics</li>
                            <li><a href="#oddjobs" style={{color: '#393c3d'}}>Senior Project - OddJobs</a></li>
                            
                        </ul>
                    </Col>
                    <Col xs="6">
                        <h4 className="itemList">Activities</h4>
                        <ul className="course">
                            <li><a href="http://anttes.com/research" style={{color: '#393c3d'}} target="_blank" rel="noreferrer">Robotics Researcher</a></li>
                            <li><a href="https://csm.rowan.edu/departments/cs/students/learning_assistants/index.html" style={{color: '#393c3d'}} target="_blank" rel="noreferrer">Computer Science Learning Assistant</a></li>
                            <li><a href="https://cpa.rowan.edu/music/ensembles/RowanUniversityBands.html" style={{color: '#393c3d'}} target="_blank" rel="noreferrer">RU Bands Percussionist</a></li>
                            <li><a href="https://cpa.rowan.edu/music/ensembles/earlymusic.html" style={{color: '#393c3d'}} target="_blank" rel="noreferrer">Collegium Musicum: Music of the Old World</a></li>
                            <li><a href="https://bit.ly/RUMTC" style={{color: '#393c3d'}} target="_blank" rel="noreferrer">Music Therapy Club - Club Treasurer & Senator</a></li>
                            <li><a href="https://cpa.rowan.edu/music/ensembles/instrumental.html" style={{color: '#393c3d'}} target="_blank" rel="noreferrer">Percussion Ensemble</a></li>
                            <li><a href="https://sites.rowan.edu/volunteer/volunteerism/B2B/index.html" style={{color: '#393c3d'}} target="_blank" rel="noreferrer">Back to the Boro Volunteer</a></li>
                        </ul>
                    </Col>
                </Row>

                <br />

                {/* RHS */}
                <Row>
                    <Col xs="8">
                        <h2>Ridgewood High School, <text className="itemName">Ridgewood, NJ</text></h2>
                        <h4 className="itemInfo">High School Diploma</h4>
                    </Col>
                    <Col xs="4"><h4 className="align-right itemTime">September 2013 - June 2017</h4></Col>
                </Row>
                <br />
                <Row>
                    <Col xs="6">
                        <h4 className="itemList">Relevant Coursework</h4>
                        <ul className="course">
                            <li>AP Computer Science</li>
                            <li>Calculus I Honors</li>
                            <li>Forensics Honors with <a href="https://supa.syr.edu/about-supa/" target="_blank" rel="noreferrer">Syracuse University Project Advance</a></li>
                            <li>Algebra II E</li>
                        </ul>
                    </Col>
                    <Col xs="6">
                        <h4 className="itemList">Activities</h4>
                        <ul className="course">
                            <li><a href="https://www.rhsbands.org/curricular-bands" style={{color: '#393c3d'}} target="_blank" rel="noreferrer">RHS Bands Percussionist</a></li>
                            <li><a href="https://www.rhsbands.org/marching-band" style={{color: '#393c3d'}} target="_blank" rel="noreferrer">RHS Marching Band Section Leader</a></li>
                            <li><a href="https://www.rhsbands.org/chamber-ensembles" style={{color: '#393c3d'}} target="_blank" rel="noreferrer">Percussion Ensemble</a></li>
                            <li><a href="https://www.rhsbands.org/jazz-band" style={{color: '#393c3d'}} target="_blank" rel="noreferrer">Jazz Band</a></li>
                        </ul>
                    </Col>
                </Row>

                <br />
                {/* Experience */}
                <h4 id="experience">Experience</h4>
                <hr />
                
                {/* Robotics Research */}
                <Row>
                    <Col xs="8">
                        <h2>Robotics Researcher</h2>
                        <h4 className="itemInfo">Department of Computer Science, Rowan University, Glassboro, NJ</h4>
                    </Col>
                    <Col xs="4"><h4 className="align-right itemTime">January 2019 - Present</h4></Col>
                </Row>
                <ButtonLabels labelList={['Python', 'LEGO EV3 MicroPython', 'LEGO ev3dev']} />
                <Row>
                    <Col xs="8">
                    <p>
                        Create a script to convert visual based LEGO Scratch code into LEGO MicroPython. 
                        Uses hex code from LEGO Scratch files to identify code blocks. Enhancing use of LEGO and Raspberry Pi robots in learning environments, 
                        and finding a way to be able to use both types interchangeably at low costs to increase enrollment.
                    </p>
                    </Col>
                </Row>
                <br />

                {/* Learning Assistant */}
                <Row>
                    <Col xs="8">
                        <h2>CS Learning Asistant</h2>
                        <h4 className="itemInfo">Department of Computer Science, Rowan University, Glassboro, NJ</h4>
                    </Col>
                    <Col xs="4"><h4 className="align-right itemTime">January 2019 - September 2020</h4></Col>
                </Row>
                <ButtonLabels labelList={['Java', 'Python', 'LEGO EV3 MicroPython']} />
                <Row>
                    <Col xs="8">
                    <p>
                        Work closely with computer science students to assist in java and python programming assignments. 
                        Help students understand project goals while developing deeper programming skill. Analyze and help debug code written by students, 
                        while providing feedback to promote deeper independent programming skills, and group collaboration.
                    </p>
                    </Col>
                </Row>
                <br />

                {/* Robotics Assistant */}
                <Row>
                    <Col xs="8">
                        <h2>Robotics Assistant</h2>
                        <h4 className="itemInfo">Department of Computer Science, Rowan University, Glassboro, NJ</h4>
                    </Col>
                    <Col xs="4"><h4 className="align-right itemTime">September 2018 - January 2019</h4></Col>
                </Row>
                <br />
                <Row>
                    <Col xs="8">
                    <p>
                        Build, sort, and organize LEGO robots and parts. Create a new, better structured organization style for 
                        future departmental additions. Work with teammate to create a database to track robot information, part amounts, 
                        and keep equipment properly organized and easily accessible.
                    </p>
                    </Col>
                </Row>

                <br />
                {/* Projects */}
                <h4 id="projects">Projects</h4>
                <hr />

                {/* OddJobs */}
                <Row id="oddjobs">
                    <Col xs="8">
                        <h2>OddJobs - Web Application, <text className="itemName">Frontend</text></h2>
                        <h4 className="itemInfo"><b>Senior Project</b> @ Rowan University</h4>
                    </Col>
                    <Col xs="4">
                        <h4 className="align-right itemTime">September - December 2020</h4>
                        <h4 className="align-right itemTime"><a style={{color: '#393c3d'}} href="https://git.io/JUd9W">https://git.io/JUd9W</a></h4>
                    </Col>
                </Row>
                
                <ButtonLabels labelList={['HTML', 'CSS', 'React.js', 'TypeScript', 'Python', 'Flask', 'MySQL', 'AWS']} />

                <Row>
                    <Col xs="8">
                    <p>
                        Web app built using React.js HTML, CSS, TypeScript on the frontend, Python, Flask, MySQL on the backend. 
                        A service that connects people who need helps with tasks withy people who are interesting in earning extra income. 
                        Uses surveys to learn the user and collect useful data, to recommend tasks to list/complete, based on what they like.
                    </p>
                    </Col>
                </Row>
                <br />

                {/* Mitigation's Repository */}
                <Row id="mitigationsRepository">
                    <Col xs="8">
                        <h2>Mitigation's Repository, <text className="itemName">Agile Product Owner & Frontend</text></h2>
                        <h4 className="itemInfo"><b>Software Engineering</b> @ Rowan University w/ Lockheed Martin</h4>
                    </Col>
                    <Col xs="4">
                        <h4 className="align-right itemTime">January - May 2020</h4>
                        <h4 className="align-right itemTime"><a style={{color: '#393c3d'}} href="https://git.io/JUd9b">https://git.io/JUd9b</a></h4>
                    </Col>
                </Row>
                <ButtonLabels labelList={['HTML', 'CSS', 'AJAX', 'PHP', 'SQL', 'Ubuntu', 'MySQL', 'AWS']} />
                <Row>
                    <Col xs="8">
                    <p>
                        Working repository to identify and track threats and risks from user input of security controls. 
                        Built using AJAX, HTML, and CSS on the frontend, SQL and ubuntu on an Amazon Web Server on the backend. 
                        After threats are calculated, they are forked from the mitigation, and able to be seen by users on the website, similar to a GitHub for mitigations.
                    </p>
                    </Col>
                </Row>
                <br />
                
                {/* Skills */}
                <h4 id="skills">Skills</h4>
                <hr />

                {/* Languages & Frameworks */}
                <h2>Languages & Frameworks</h2>
                <br />
                <Row>
                    <Col xs="4">
                        <h4 className="itemInfo">Expert - </h4>
                        <ButtonLabels labelList={['Java', 'Python', 'HTML', 'CSS']} />
                    </Col>
                    <Col xs="4">
                    <h4 className="itemInfo">Proficient - </h4>
                        <ButtonLabels labelList={['React.js', 'JavaScript', 'Git', 'TypeScript']} />
                    </Col>
                    <Col xs="4">
                        <h4 className="itemInfo">Familiar With - </h4>
                        <ButtonLabels labelList={['PHP', 'Swift', 'C', 'Ada', 'Scheme', 'Prolog']} />
                    </Col>
                </Row>
                <br />
                
                <Row>
                    {/* Tools */}
                    <Col xs="8">
                        <h2>Tools</h2>
                        <br />
                        <ButtonLabels labelList={['Eclipse', 'IntelliJ', 'PyCharm', 'VSCode', 'PHPStorm', 'WebStorm', 'Xcode']} />
                    </Col>

                    {/* OS */}
                    <Col xs="4">
                        <h2>OS</h2>
                        <br />
                        <ButtonLabels labelList={['MacOS', 'Windows', 'Unix', 'Linux']} />
                    </Col>
                </Row>
                <br />
                
            </Container>
            <Footer />
        </div>
    );
}


export default withRouter(LandingPage);