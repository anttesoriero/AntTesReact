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
        "Object Oriented Programming",
        "Foundations of Computer Science",
        "Lab Techniques",
        "Computer Organization",
        "Data Structures & Design and Analysis of Algorithms",
        "Linear Algebra",
        "Calculus I, II, III",
        "Probability & Statistics",
        "Programming Languages",
        "Artificial Intelligence",
        "Machine Learning",
        "Cyber Security",
        "Operating Systems",
        <a href="#mitigationsRepository" style={{color: '#393c3d'}}>Software Engineering (Role: Agile Product Owner)</a>,
        "Graduate Advanced Robotics",
        <a href="#oddjobs" style={{color: '#393c3d'}}>Senior Project - OddJobs</a>,
        "Databases",
        "Human-Computer Interaction"
    ]

    const rowanActivities = [
        ["https://csm.rowan.edu/departments/cs/research/cs-studentresearch.html", "Robotics Researcher"],
        ["https://csm.rowan.edu/departments/cs/students/learning_assistants/index.html","Computer Science Learning Assistant"],
        ["https://cpa.rowan.edu/music/ensembles/RowanUniversityBands.html","RU Bands Percussionist"],
        ["https://cpa.rowan.edu/music/ensembles/earlymusic.html","Collegium Musicum: Music of the Old World"],
        ["https://bit.ly/RUMTC","Music Therapy Club - Club Treasurer & Senator"],
        ["https://cpa.rowan.edu/music/ensembles/instrumental.html","Percussion Ensemble"],
        ["https://sites.rowan.edu/volunteer/volunteerism/B2B/index.html","Back to the Boro Volunteer"]
    ]

    const rhsCourses = [
        "AP Computer Science",
        "Calculus I Honors",
        <a href="https://supa.syr.edu/about-supa/" style={{color: '#393c3d'}} target="_blank" rel="noreferrer">Forensics Honors with Syracuse University Project Advance</a>,
        "Algebra II E"
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
                    I&#39;m currently a Specialist @ Apple, 
                    and a recent Rowan University Computer Science graduate - #RowanPROUD🦉
                </h2>

                <br />

                {/* --= Resume =-- */}
                <h1 className="centered" id="resume">Resume</h1>
                <div className="centered">
                    <ButtonGroup className="splashButton">
                            <Button outline color="primary" target="_blank" href='http://anttes.com/AnthonyTesorieroResume.pdf'><AiFillFileText className="splashIconStyle" size="35"/>Resume PDF</Button>
                            <Button outline color="primary" target="_blank" href='http://linkedin.com/in/anttesoriero'><AiFillLinkedin className="splashIconStyle" size="35"/>LinkedIn</Button>
                    </ButtonGroup>
                </div>
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
                <LPEducation organization={rowan} orgCourse={rowanCourses} orgActivities={rowanActivities}/>

                {/* RHS */}
                <LPEducation organization={rhs} orgCourse={rhsCourses} orgActivities={rhsActivities}/>
                
                
                {/* Experience */}
                <h4 id="experience">Experience</h4>
                <hr />

               {/* Apple Specialist */}
               <LPExperience experience = {appleSpecialist} labels = {['Sales', 'Organization', 'Leadership', 'Teamwork']} 
                    expBody = {
                        <p>
                            Used extensive product knowledge to ensure quality customer connections, while providing them with a complete solution for their needs. 
                            Greeted and approached customers with a warm welcome while listening and probing to help understand their situation, 
                            allowing me to give them the best custom interaction. Assisted the operations team as a full-access runner to ensure product was 
                            run out to customers and team members in a timely fashion, creating a better customer experience. 
                            Ensured operation and visual standards were properly and consistently met.
                        </p>
                    }
                />

                {/* Robotics Research */}
                <LPExperience experience = {robRes} labels = {['Python', 'LEGO EV3 MicroPython', 'LEGO ev3dev']} 
                    expBody = {
                        <p>
                            Create a script to convert visual based LEGO Scratch code into LEGO MicroPython. 
                            Uses hex code from LEGO Scratch files to identify code blocks. Enhancing use of LEGO and Raspberry Pi robots in learning environments, 
                            and finding a way to be able to use both types interchangeably at low costs to increase enrollment.
                        </p>
                    }
                />

                {/* Learning Assistant */}
                <LPExperience experience = {csLA} labels = {['Java', 'Python', 'LEGO EV3 MicroPython']} 
                    expBody = {
                        <p>
                            Work closely with computer science students to assist in java and python programming assignments. 
                            Help students understand project goals while developing deeper programming skill. Analyze and help debug code written by students, 
                            while providing feedback to promote deeper independent programming skills, and group collaboration.
                        </p>
                    }
                />

                {/* Robotics Assistant */}
                <LPExperience experience = {robAss} labels = {['Microsoft Office Suite', 'Google Workspace']} 
                    expBody = {
                        <p>
                            Build, sort, and organize LEGO robots and parts. Create a new, better structured organization style for 
                            future departmental additions. Work with teammate to create a database to track robot information, part amounts, 
                            and keep equipment properly organized and easily accessible.
                        </p>
                    }
                />
                

                {/* Projects */}
                <h4 id="projects">Projects</h4>
                <hr />

                {/* OddJobs */}
                <LPProject project={oddJobs} labels={['HTML', 'CSS', 'React.js', 'TypeScript', 'Python', 'Flask', 'MySQL', 'AWS']} id="oddjobs" 
                    projBody = {
                        <div>
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
                        </div>
                    } 
                />

                {/* Mitigation's Repository */}
                <LPProject project={mitRep} labels={['HTML', 'CSS', 'AJAX', 'PHP', 'SQL', 'Ubuntu', 'MySQL', 'AWS']} id="mitigationsRepository" 
                    projBody = {
                        <p>
                            Working repository to identify and track threats and risks from user input of security controls. 
                            Built using AJAX, HTML, and CSS on the frontend, SQL and ubuntu on an Amazon Web Server on the backend. 
                            After threats are calculated, they are forked from the mitigation, and able to be seen by users on the website, similar to a GitHub for mitigations.
                        </p>
                    } 
                />

                {/* AntTes.com */}
                <LPProject project={anttes} labels={['HTML', 'CSS', 'PHP', 'Java', 'Python', 'JavaScript', 'React.js', 'TypeScript']} id="antTesWebsite" 
                    projBody = {
                        <p>
                            Starting in 2015, this site was created as a personal project from scatch using HTML and CSS, with all styling and design done by hand. 
                            It's original purpose was to test new skills learn in beginner coding classes, and to host original Java and Python projects. As time went on, the site changed 
                            a lot, later using some Bootstrap styling, as well as a full design overhaul with minor JavaScript. Today, the site is is completely built using
                            React.js and TypeScript, which was learned from the 4 month long <a href="#oddjobs">OddJobs Project</a> in 2020.
                        </p>
                    } 
                />

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