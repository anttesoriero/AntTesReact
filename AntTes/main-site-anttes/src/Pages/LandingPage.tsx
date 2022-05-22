import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Jumbotron, Row, Col, Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown, ButtonGroup } from 'reactstrap';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import ATSpin from '../Components/ATSpin';
import ButtonLabels from '../Components/ButtonLabels';
import ATPic from '../Styles/Images/AnthonyTesoriero.png';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';
import LPEducation from '../Components/LandingPageComps/LPEducation';
import LPExperience from '../Components/LandingPageComps/LPExperience';
import LPProject from '../Components/LandingPageComps/LPProject';

const LandingPage = () => {

    const isMobile = window.innerWidth < 1000;

    // -- Lists -- 
    const expertList = ['Java', 'Python', 'HTML', 'CSS']
    const proficientList = ['React.js', 'JavaScript', 'Git', 'TypeScript']
    const familiarList = ['MySQL', 'PHP', 'Swift', 'C', 'Ada', 'Scheme', 'Prolog']
    const toolsList = ['Eclipse', 'VSCode', 'IntelliJ', 'PyCharm', 'PHPStorm', 'WebStorm', 'Xcode']
    const osList = ['MacOS', 'Windows', 'Unix', 'Linux']

    // -- Lists for consistent data 
    // - Education Header
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

    // - Education Body
    const rowanCourses = [
        "Intro Object Oriented Programming",
        "Discrete Mathematics",
        "Object Oriented Programming & Data Abstraction",
        "Foundations of Computer Science",
        "CS Lab Techniques",
        "Computer Organization",
        "Data Structures & Algorithms",
        "Design and Analysis of Algorithms",
        "Linear Algebra",
        "Calculus I, II, III",
        "Probability & Random Variables",
        "Computers & Society - Writing Intensive",
        "Comcepts in Statistical Data Ananylsis",
        "Programming Languages",
        "Artificial Intelligence",
        "Machine Learning",
        "Cyber Security: Fundamentals, Principles, & Applications",
        "Operating Systems",
        <a href="#mitigationsRepository" style={{ color: '#393c3d' }}>Software Engineering I - Writing Intensive (Role: Agile Product Owner)</a>,
        "Graduate Advanced Robotics",
        <a href="#oddjobs" style={{ color: '#393c3d' }}>CS Senior Project - OddJobs</a>,
        "Database Systems: Theory & Programming",
        "Human-Computer Interaction"
    ]

    const rowanActivities = [
        ["https://csm.rowan.edu/departments/cs/research/cs-studentresearch.html", "Robotics Researcher"],
        ["https://csm.rowan.edu/departments/cs/students/learning_assistants/index.html", "Computer Science Learning Assistant"],
        ["https://cpa.rowan.edu/music/ensembles/RowanUniversityBands.html", "RU Bands Percussionist"],
        ["https://cpa.rowan.edu/music/ensembles/earlymusic.html", "Collegium Musicum: Music of the Old World"],
        ["https://bit.ly/RUMTC", "Music Therapy Club - Club Treasurer & Senator"],
        ["https://cpa.rowan.edu/music/ensembles/instrumental.html", "Percussion Ensemble"],
        ["https://sites.rowan.edu/volunteer/volunteerism/B2B/index.html", "Back to the Boro Volunteer"]
    ]

    const rhsCourses = [
        "AP Computer Science",
        "Calculus I Honors",
        <a href="https://supa.syr.edu/about-supa/" style={{ color: '#393c3d' }} target="_blank" rel="noreferrer">Forensics Honors with Syracuse University Project Advance</a>,
        "Algebra II Enhanced"
    ]

    const rhsActivities = [
        ["https://www.rhsbands.org/curricular-bands", "RHS Bands Percussionist"],
        ["https://www.rhsbands.org/marching-band", "RHS Marching Band Section Leader"],
        ["https://www.rhsbands.org/chamber-ensembles", "Percussion Ensemble"],
        ["https://www.rhsbands.org/jazz-band", "Jazz Band"]
    ]

    // - Experience
    const appleSpecialist = {
        title: "Specialist",
        itemInfo: "Apple, Tice's Corner, Montvale, NJ",
        date: "August 2021 - Present"
    }

    const robRes = {
        title: "Robotics Researcher",
        itemInfo: "Department of Computer Science, Rowan University, Glassboro, NJ",
        date: "January 2019 - May 2021"
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

    // OJ Link - https://git.io/JUd9W
    // Mit Link - https://git.io/JUd9b

    return (
        <div className="App">
            <Navigation pageName="Home" />
            {isMobile
                ?
                <Jumbotron className="LandingJumbo">
                    <Container>
                        <Row>
                            <Col><h1>Hi, I'm Anthony</h1></Col>
                            <Col><ATSpin image={ATPic} size="85px" /></Col>
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
                            <Col><ATSpin image={ATPic} size="200px" /></Col>
                        </Row>
                    </Container>
                </Jumbotron>
            }

            <Container>
                {/* AT Tab */}
                <h1><span style={{ color: "#4281A4" }}>_</span></h1>

                {/* Description */}
                <h2>
                    I&#39;m currently a Specialist @ Apple,
                    and a recent Rowan University Computer Science graduate - #RowanPROUD🦉
                </h2>

                <br />

                {/* --= Resume =-- */}
                <h1 className="centered" id="resume">Resume</h1>
                <div className="centered">
                    <ButtonGroup className="splashButton">
                        <Button outline color="primary" target="_blank" href='http://anttes.com/AnthonyTesorieroResume.pdf'><AiFillFileText className="splashIconStyle" size="35" />Resume PDF</Button>
                        <Button outline color="primary" target="_blank" href='http://linkedin.com/in/anttesoriero'><AiFillLinkedin className="splashIconStyle" size="35" />LinkedIn</Button>
                    </ButtonGroup>
                </div>
                <br />
                {isMobile ?
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
                <LPEducation organization={rowan} orgCourse={rowanCourses} orgActivities={rowanActivities} />

                {/* RHS */}
                <LPEducation organization={rhs} orgCourse={rhsCourses} orgActivities={rhsActivities} />


                {/* Experience */}
                <h4 id="experience">Experience</h4>
                <hr />

                {/* Apple Specialist */}
                <LPExperience experience={appleSpecialist} labels={['Sales', 'Organization', 'Leadership', 'Teamwork', 'Communication']}
                    expBody={
                        <p>
                            Greeted and probed customers to clearly analyze their situation,
                            while using extensive product knowledge and problem solving skills to find the optimal solution for their needs.
                            Connected with and coached teammates to help them exceed expectations,
                            while properly communicating positive and negative feedback to reinforce learning.
                            Ensured technology and merchandising standards were met with high attention to detail,
                            giving the customer a high quality experience while increasing team efficiency.
                        </p>
                    }
                />

                {/* Robotics Research */}
                <LPExperience experience={robRes} labels={['Python', 'LEGO EV3 MicroPython', 'LEGO ev3dev', 'Researching', 'Robotics']}
                    expBody={
                        <p>
                            Increased efficiency of LEGO EV3 Robots with Python by finding new ways to use infrared sensors and a PixyCam for basic object tracking,
                            and enhancing object detection. Used sensors with systems such as OpenCV to create better student learning experience.
                            Began creating automated system to convert visual based LEGO Scratch code into LEGO MicroPython to make lower level learning and debugging simpler
                        </p>
                    }
                />

                {/* Learning Assistant */}
                <LPExperience experience={csLA} labels={['Java', 'Python', 'LEGO EV3 MicroPython', 'Leadership', 'Teaching']}
                    expBody={
                        <p>
                            Work closely with computer science students to assist in java and python programming assignments.
                            Help students understand project goals while developing deeper programming skill. Analyze and help debug code written by students,
                            while providing feedback to promote deeper independent programming skills, and group collaboration.
                        </p>
                    }
                />

                {/* Robotics Assistant */}
                <LPExperience experience={robAss} labels={['Microsoft Office Suite', 'Google Workspace']}
                    expBody={
                        <p>
                            Worked with teammate to sort hundreds of parts efficiently, and create database to track necessary part data and information.
                            Build, sort, and organize LEGO robots and parts. Create a new, better structured organization style for
                            future departmental additions.
                        </p>
                    }
                />


                {/* Projects */}
                <h4 id="projects">Projects</h4>
                <hr />

                {/* OddJobs */}
                <LPProject project={oddJobs} labels={['React.js', 'HTML', 'CSS', 'TypeScript', 'Python', 'Flask', 'MySQL', 'AWS']} id="oddjobs"
                    projBody={
                        <div>
                            <p>
                                Web app built by a team of seven using React, HTML, CSS, and TypeScript on the frontend, and Python, Flask, MySQL, and AWS EC2 on the backend.
                                Created initial mockup designs to increase production efficiency later. Developed React frontend using multiple APIs and components,
                                such as Google OAuth for user authentication, and react-leaflet for location services.
                                Connects people who need help with tasks to people who are interested in earning cash by allowing users to securely find relevant jobs near them,
                                and filter based on criteria. Collects survey data to learn and recommend tasks to list/complete based on interests
                            </p>
                            <p>* NOTE - OddJobs GitHub Repository is <u>private</u> due to API keys *</p>

                            <div className="itemTime" style={{ width: 200 }}>
                                <Button className="centered" color="danger" href="https://youtu.be/bv3de-OYx8I" target="_blank">
                                    <AiFillYoutube className="iconStyle" size="30px" /> OddJobs Video
                                </Button>
                            </div>
                        </div>
                    }
                />

                {/* Mitigation's Repository */}
                <LPProject project={mitRep} labels={['HTML', 'CSS', 'AJAX', 'PHP', 'SQL', 'Ubuntu', 'MySQL', 'AWS', 'Agile']} id="mitigationsRepository"
                    projBody={
                        <p>
                            Communicated, as Product Owner, with client from Lockheed Martin through email and bi-weekly sprint review to effectively present our team goals and achievements.
                            Worked with team of six to create a repository that identifies threats and risks from user input security controls; threats are then tracked and forked from the mitigation,
                            similar to GitHub Frontend design with AJAX, HTML, and CSS, and backend with SQL and ubuntu on AWS
                        </p>
                    }
                />

                {/* AntTes.com */}
                <LPProject project={anttes} labels={['HTML', 'CSS', 'PHP', 'Java', 'Python', 'JavaScript', 'React.js', 'TypeScript']} id="antTesWebsite"
                    projBody={
                        <p>
                            Starting in 2015, this site was created as a personal project from scatch using HTML and CSS, with all styling and design done by hand.
                            It's original purpose was to test new skills learn in beginner coding classes, and to host original Java and Python projects. As time went on, the site changed
                            a lot, later using some Bootstrap styling, as well as a full design overhaul with minor JavaScript. Today, the site is is completely built using
                            React.js and TypeScript, which was learned from the 4 month long <a href="#oddjobs">OddJobs Project</a> in 2020.
                        </p>
                    }
                />

                <div className="centered"><Button size="lg" href="https://github.com/anttesoriero" target="_blank"><AiFillGithub className="iconStyle" size="30px" /> Check out more on <b>GitHub</b></Button></div>
                <br />


                {/* Skills */}
                <h4 id="skills">Skills</h4>
                <hr />

                {/* Languages & Frameworks */}
                <h2>Languages & Frameworks</h2>
                <br />
                {isMobile ?
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