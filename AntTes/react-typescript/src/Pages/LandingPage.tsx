import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Jumbotron, Row, Col, Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown } from 'reactstrap';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import ATSpin from '../Components/ATSpin';
import ButtonLabels from '../Components/ButtonLabels';
import ATPic from '../Styles/Images/AnthonyTesoriero.png';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';

const LandingPage = () => {

    const isMobile = window.innerWidth < 1000;

    // -- Lists -- 
    const expertList = ['Java', 'Python', 'HTML', 'CSS']
    const proficientList = ['React.js', 'JavaScript', 'Git', 'TypeScript']
    const familiarList = ['MySQL', 'PHP', 'Swift', 'C', 'Ada', 'Scheme', 'Prolog']
    const toolsList = ['Eclipse', 'VSCode', 'IntelliJ', 'PyCharm', 'PHPStorm', 'WebStorm', 'Xcode']
    const osList = ['MacOS', 'Windows', 'Unix', 'Linux']

    // -- Lists for consistent data
    // - Education
    const rowan = {
        title: ["Rowan University", "Glassboro, NJ"],
        itemInfo: [
            "BS in Computer Science, Artificial Intelligence Concentration",
            "Minor in Mathematics"
        ],
        date: "September 2017 - May 2021"
    }

    const rhs = {
        title: ["Ridgewood High School", "Ridgewood, NJ"],
        itemInfo: ["High School Diploma"],
        date: "September 2013 - June 2017"
    }

    // - Experience
    const robRes = {
        title: "Robotics Researcher",
        itemInfo: "Department of Computer Science, Rowan University, Glassboro, NJ",
        date: "January 2019 - Present"
    }

    const csLA = {
        title: "CS Learning Assistant",
        itemInfo: "Department of Computer Science, Rowan University, Glassboro, NJ",
        date: "January 2019 - September 2020"
    }

    const robAss = {
        title: "Robotics Assistant",
        itemInfo: "Department of Computer Science, Rowan University, Glassboro, NJ",
        date: "September 2018 - January 2019"
    }

    // - Projects
    const oddJobs = {
        title: ["OddJobs - Web Application", "Frontend"],
        itemInfo: ["Senior Project", "@ Rowan University"],
        link: ["AntTes.com/OddJobs", "http://anttes.com/oddjobs"],
        date: "September - December 2020"
    }

    const mitRep = {
        title: ["Mitigation's Repository", "Agile Product Owner & Frontend"],
        itemInfo: ["Senior Engineering", "@ Rowan University w/ Lockheed Martin"],
        link: ["AntTes.com/Mitigations", "http://anttes.com/mitigations"],
        date: "January - May 2020"
    }

    const anttes = {
        title: ["AntTes.com", "Full-Stack"],
        itemInfo: ["Personal Project", "& Portfolio"],
        link: ["AntTes.com", "http://anttes.com"],
        date: "September 2015 - Present"
    }


    return (
        <div className="App">
            <Navigation pageName="Home"/>
            {isMobile
            ?
            <Jumbotron className="LandingJumbo">
                <Container>
                    <Row>
                        <Col><h1>Hi, I'm Anthony</h1></Col>
                        <Col><ATSpin image={ATPic} size="85px"/></Col>
                    </Row>
                    <h3>"The Secret Ingredient is Nothing"</h3>
                    <br />
                </Container>
            </Jumbotron>
            :
            <Jumbotron className="LandingJumbo">
                <Container>
                    <Row>
                        <Col>
                            <h1>Hi, I'm Anthony</h1>
                            <h3>"The Secret Ingredient is Nothing"</h3>
                        </Col>
                        <Col><ATSpin image={ATPic} size="200px"/></Col>
                    </Row>
                </Container>
            </Jumbotron>
            }
            
            <Container>
                {/* AT Tab */}
                <h1><span style={{color:"#4281A4"}}>_</span></h1>

                {/* Description */}
                <h2>
                    I&#39;m currently a Computer Science major with an Artificial Intelligence concentration
                    at Rowan University in Glassboro, NJ. #RowanPROUD🦉
                </h2>

                <br />

                {/* --= Resume =-- */}
                <h1 className="centered" id="resume">R&eacute;sum&eacute;</h1>
                <span className="centered"><Button outline color="primary" target="_blank" href='http://anttes.com/AnthonyTesorieroResume.pdf'>Open Full PDF</Button></span>
                <br />
                {isMobile?
                <span className="centered">
                    <UncontrolledButtonDropdown>
                        <DropdownToggle caret>Jump to Section</DropdownToggle>

                        <DropdownMenu>
                            <DropdownItem href="#education">🎓 Education</DropdownItem>
                            <DropdownItem href="#experience">🔬 Experience</DropdownItem>
                            <DropdownItem href="#projects">💻 Project</DropdownItem>
                            <DropdownItem href="#skills">🛠 Skills</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <br />
                </span>
                
                :
                <h2 className="centered">
                    <a href="#education">Education</a>  {' '}-{' '}  
                    <a href="#experience">Experience</a>  {' '}-{' '} 
                    <a href="#projects">Projects</a>  {' '}-{' '}  
                    <a href="#skills">Skills</a>
                </h2>
                }

                
                
                {/* Education */}
                <h4 id="education">Education</h4>
                <hr />

                {/* Rowan */}
                {isMobile? 
                    <div>
                        <h2>{rowan.title[0]} <text className="itemName">{rowan.title[1]}</text></h2>
                        <h4 className="itemInfo">{rowan.itemInfo[0]}</h4>
                        <h4 className="itemInfo">{rowan.itemInfo[1]}</h4>
                        <h4 className="itemTime">{rowan.date}</h4>
                    </div>
                :
                    <Row>
                        <Col xs="8">
                            <h2>{rowan.title[0]} <text className="itemName">{rowan.title[1]}</text></h2>
                            <h4 className="itemInfo">{rowan.itemInfo[0]}</h4>
                            <h4 className="itemInfo">{rowan.itemInfo[1]}</h4>

                        </Col>
                        <Col xs="4"><h4 className="align-right itemTime">{rowan.date}</h4></Col>
                    </Row>
                }
                

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
                            <li>Databases</li>
                            <li>Human-Computer Interaction</li>
                            
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
                {isMobile? 
                    <div>
                        <h2>{rhs.title[0]} <text className="itemName">{rhs.title[1]}</text></h2>
                        <h4 className="itemInfo">{rhs.itemInfo[0]}</h4>
                        <h4 className="itemTime">{rhs.date}</h4>
                    </div>
                :
                    <Row>
                        <Col xs="8">
                            <h2>{rhs.title[0]} <text className="itemName">{rhs.title[1]}</text></h2>
                            <h4 className="itemInfo">{rhs.itemInfo[0]}</h4>
                        </Col>
                        <Col xs="4"><h4 className="align-right itemTime">{rhs.date}</h4></Col>
                    </Row>
                }

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
                {isMobile? 
                    <div>
                        <h2>{robRes.title}</h2>
                        <h4 className="itemInfo">{robRes.itemInfo}</h4>
                        <h4 className="itemTime">{robRes.date}</h4>
                    </div>
                :
                    <Row>
                        <Col xs="8">
                            <h2>{robRes.title}</h2>
                            <h4 className="itemInfo">{robRes.itemInfo}</h4>
                        </Col>
                        <Col xs="4"><h4 className="align-right itemTime">{robRes.date}</h4></Col>
                    </Row>
                }

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
                {isMobile? 
                    <div>
                        <h2>{csLA.title}</h2>
                        <h4 className="itemInfo">{csLA.itemInfo}</h4>
                        <h4 className="itemTime">{csLA.date}</h4>
                    </div>
                :
                    <Row>
                        <Col xs="8">
                            <h2>{csLA.title}</h2>
                            <h4 className="itemInfo">{csLA.itemInfo}</h4>
                        </Col>
                        <Col xs="4"><h4 className="align-right itemTime">{csLA.date}</h4></Col>
                    </Row>
                }

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
                {isMobile? 
                    <div>
                        <h2>{robAss.title}</h2>
                        <h4 className="itemInfo">{robAss.itemInfo}</h4>
                        <h4 className="itemTime">{robAss.date}</h4>
                    </div>
                :
                    <Row>
                        <Col xs="8">
                            <h2>{robAss.title}</h2>
                            <h4 className="itemInfo">{robAss.itemInfo}</h4>
                        </Col>
                        <Col xs="4"><h4 className="align-right itemTime">{robAss.date}</h4></Col>
                    </Row>
                }

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
                {isMobile? 
                    <div>
                        <h2>{oddJobs.title[0]} <text className="itemName">{oddJobs.title[1]}</text></h2>
                        <h4 className="itemInfo"><b>{oddJobs.itemInfo[0]}</b> {oddJobs.itemInfo[1]}</h4>
                        <h4 className="itemTime">{oddJobs.date}</h4>
                        <h4 className="itemTime"><a style={{color: '#393c3d'}} href={oddJobs.link[1]} target="_blank" rel="noreferrer">{oddJobs.link[0]}</a></h4>
                    </div>
                :
                <Row id="oddjobs">
                    <Col xs="8">
                    <h2>{oddJobs.title[0]} <text className="itemName">{oddJobs.title[1]}</text></h2>
                        <h4 className="itemInfo"><b>{oddJobs.itemInfo[0]}</b> {oddJobs.itemInfo[1]}</h4>
                    </Col>
                    <Col xs="4">
                        <h4 className="align-right itemTime">{oddJobs.date}</h4>
                        <h4 className="align-right itemTime"><a style={{color: '#393c3d'}} href={oddJobs.link[1]} target="_blank" rel="noreferrer">{oddJobs.link[0]}</a></h4>
                        {/* https://git.io/JUd9W */}
                    </Col>
                </Row>
                }
                
                <ButtonLabels labelList={['HTML', 'CSS', 'React.js', 'TypeScript', 'Python', 'Flask', 'MySQL', 'AWS']} />
                <Row>
                    <Col xs="8">
                    <p>
                        Web app built using React.js HTML, CSS, TypeScript on the frontend, Python, Flask, MySQL on the backend. 
                        A service that connects people who need helps with tasks withy people who are interesting in earning extra income. 
                        Uses surveys to learn the user and collect useful data, to recommend tasks to list/complete, based on what they like.
                    </p>
                    <p>* NOTE - OddJobs GitHub Repository is <u>private</u> due to API keys *</p>
                    
                    <div className="itemTime" style={{width: 200}}>
                        <Button className="centered" color="danger" href="https://youtu.be/bv3de-OYx8I" target="_blank">
                            <AiFillYoutube className="iconStyle" size="30px"/> OddJobs Video
                        </Button>
                    </div>
                    </Col>
                </Row>

                <br />

                {/* Mitigation's Repository */}
                {isMobile? 
                    <div>
                        <h2>{mitRep.title[0]} <text className="itemName">{mitRep.title[1]}</text></h2>
                        <h4 className="itemInfo"><b>{mitRep.itemInfo[0]}</b> {mitRep.itemInfo[1]}</h4>
                        <h4 className="itemTime">{mitRep.date}</h4>
                        <h4 className="itemTime"><a style={{color: '#393c3d'}} href={mitRep.link[1]} target="_blank" rel="noreferrer">{mitRep.link[0]}</a></h4>
                    </div>
                :
                <Row id="mitigationsRepository">
                    <Col xs="8">
                    <h2>{mitRep.title[0]} <text className="itemName">{mitRep.title[1]}</text></h2>
                        <h4 className="itemInfo"><b>{mitRep.itemInfo[0]}</b> {mitRep.itemInfo[1]}</h4>
                    </Col>
                    <Col xs="4">
                        <h4 className="align-right itemTime">{mitRep.date}</h4>
                        <h4 className="align-right itemTime"><a style={{color: '#393c3d'}} href={mitRep.link[1]} target="_blank" rel="noreferrer">{mitRep.link[0]}</a></h4>
                        {/* https://git.io/JUd9b */}
                    </Col>
                </Row>
                }

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

                {/* AntTes.com */}
                {isMobile? 
                    <div>
                        <h2>{anttes.title[0]} <text className="itemName">{anttes.title[1]}</text></h2>
                        <h4 className="itemInfo"><b>{anttes.itemInfo[0]}</b> {anttes.itemInfo[1]}</h4>
                        <h4 className="itemTime">{anttes.date}</h4>
                        <h4 className="itemTime"><a style={{color: '#393c3d'}} href={anttes.link[1]} target="_blank" rel="noreferrer">{anttes.link[0]}</a></h4>
                    </div>
                :
                <Row id="antTesWebsite">
                    <Col xs="8">
                    <h2>{anttes.title[0]} <text className="itemName">{anttes.title[1]}</text></h2>
                        <h4 className="itemInfo"><b>{anttes.itemInfo[0]}</b> {anttes.itemInfo[1]}</h4>
                    </Col>
                    <Col xs="4">
                        <h4 className="align-right itemTime">{anttes.date}</h4>
                        <h4 className="align-right itemTime"><a style={{color: '#393c3d'}} href={anttes.link[1]} target="_blank" rel="noreferrer">{anttes.link[0]}</a></h4>
                    </Col>
                </Row>
                }

                <ButtonLabels labelList={['HTML', 'CSS', 'PHP', 'Java', 'Python', 'JavaScript', 'React.js', 'TypeScript']} />
                <Row>
                    <Col xs="8">
                    <p>
                        Starting in 2015, this site was created as a personal project from scatch using HTML and CSS, with all styling and design done by hand. 
                        It's original purpose was to test new skills learn in beginner coding classes, and to host original Java and Python projects. As time went on, the site changed 
                        a lot, later using some Bootstrap styling, as well as a full design overhaul with minor JavaScript. Today, the site is is completely built using
                        React.js and TypeScript, which was learned from the 4 month long <a href="#oddjobs">OddJobs Project</a> in 2020.
                    </p>
                    </Col>
                </Row>
                <br />

                <div className="centered"><Button size="lg" href="https://github.com/anttesoriero" target="_blank"><AiFillGithub className="iconStyle" size="30px"/> Check out more on <b>GitHub</b></Button></div>

                <br />
                
                {/* Skills */}
                <h4 id="skills">Skills</h4>
                <hr />

                {/* Languages & Frameworks */}
                <h2>Languages & Frameworks</h2>
                <br />
                {isMobile?
                <div>
                    <h4 className="itemInfo">Expert</h4>
                    <ButtonLabels labelList={expertList} />
                    <br />

                    <h4 className="itemInfo">Proficient</h4>
                    <ButtonLabels labelList={proficientList} />
                    <br />

                    <h4 className="itemInfo">Familiar With</h4>
                    <ButtonLabels labelList={familiarList} />
                    <br />

                    {/* Tools */}
                    <h2>Tools</h2>
                    <ButtonLabels labelList={toolsList} />
                    <br />

                    {/* OS */}
                    <h2>OS</h2>
                    <ButtonLabels labelList={osList} />
                    <br />
                </div>
                :
                <div>
                    <Row>
                        <Col xs="4">
                            <h4 className="itemInfo">Expert - </h4>
                            <ButtonLabels labelList={expertList} />
                        </Col>
                        <Col xs="4">
                        <h4 className="itemInfo">Proficient - </h4>
                            <ButtonLabels labelList={proficientList} />
                        </Col>
                        <Col xs="4">
                            <h4 className="itemInfo">Familiar With - </h4>
                            <ButtonLabels labelList={familiarList} />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        {/* Tools */}
                        <Col xs="8">
                            <h2>Tools</h2>
                            <br />
                            <ButtonLabels labelList={toolsList} />
                        </Col>

                        {/* OS */}
                        <Col xs="4">
                            <h2>OS</h2>
                            <br />
                            <ButtonLabels labelList={osList} />
                        </Col>
                    </Row>
                </div>
                }
                <br />
                
            </Container>
            <Footer />
        </div>
    );
}


export default withRouter(LandingPage);