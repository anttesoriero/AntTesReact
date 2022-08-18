import React from 'react';
// import React, { useEffect } from 'react';
import Navigation from '../Components/Navigation';
import { Button, Col, Container, Row } from 'reactstrap';
import Footer from '../Components/Footer';

const Oddjobs = () => {

    // useEffect(() => {
    //     window.location.href = "http://oddjobsproject.com:5000/";
    //   }, []);

    return (
        <div>
            <Navigation pageName="Oddjobs" />

            <Container>

                {/* <h1 className="centered"><a href="http://oddjobsproject.com:5000/">CLICK HERE if not automatically redirected.</a></h1> */}
                <br />
                <h1 className="centered">OddJobs - No Job is too Odd</h1>
                <h4 className="centered">Rowan Senior Project - September-December 2020</h4>
                <div className="centered">
                    <span><Button outline color="primary" target="_blank" href="http://oddjobsproject.com:5000/">Original Website [DOWN]</Button>{' '}</span>
                    <span><Button outline color="primary" target="_blank" href="https://github.com/anttesoriero/Senior-Project-F20">Private GitHub</Button>{' '}</span>
                </div>
                <br />
                <div className="centered">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/bv3de-OYx8I"
                        title="OddJobs - YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>

                <hr />

                <h2>About</h2>
                <p>
                    Odd Jobs is a service that will connect people who need help with small tasks (odd-jobs) with motivated people interested in an extra income!
                    We intend for users to post requests for help with odd jobs such as moving a couch, picking up groceries, mowing the lawn, etc.
                    Other users with free-time can negotiate the terms on filling the request.
                    We will have users regularly complete surveys to better understand their preferences and optimize their experience.
                </p>

                <hr />

                <h2>Built With</h2>
                <Row>
                    <Col>
                        <Container>
                            <h4>Front End</h4>
                            <li>React.js</li>
                            <li>Typescript</li>
                            <li>Sass</li>
                        </Container>
                    </Col>

                    <br />
                    <Col>
                        <Container>
                            <h4>Back End</h4>
                            <li>Python3</li>
                            <li>Flask</li>
                            <li>MySQL</li>
                            <li>AWS EC2</li>
                        </Container>
                    </Col>
                </Row>

                <hr />

                <h2>Team</h2>
                <p>All members helped with both ends at some point, but we split the team in half for efficiency.</p>
                <Container>
                    <h4>Front End Team</h4>
                    <li>Daniel Sanchez - <a href="https://github.com/danandressanchez">GitHub</a></li>
                    <li>Anthony Tesoriero - <a href="https://github.com/anttesoriero">GitHub</a> - <a href="https://linkedin.com/in/anttesoriero">LinkedIn</a></li>
                    <li>Anthony Catalina - <a href="https://github.com/antcatalina">GitHub</a> - <a href="https://www.linkedin.com/in/anthony-catalina-062b31174/">LinkedIn</a></li>
                </Container>

                <br />

                <Container>
                    <h4>Back End Team</h4>
                    <li>Matthew Schofield - <a href="https://github.com/mattscho">GitHub</a></li>
                    <li>Jasdip Dhillon - <a href="https://github.com/dhillonj2">GitHub</a> - <a href="https://www.linkedin.com/in/jasdip-dhillon-050a5719a/">LinkedIn</a></li>
                    <li>Nicholas Romeo - <a href="https://github.com/romeon728">GitHub</a></li>
                </Container>

                <br />

                <Container>
                    <h4>Wild Card</h4>
                    <li>Steven Jiang - <a href="https://github.com/jiangs11">GitHub</a> - <a href="https://www.linkedin.com/in/steven-jiang-471453192/">LinkedIn</a></li>
                </Container>

            </Container>
            <br />
            <Footer />
        </div>
    );
}

export default Oddjobs;