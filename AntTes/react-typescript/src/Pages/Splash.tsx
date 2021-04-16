import React, { useState } from 'react';
import Navigation from '../Components/Navigation';
import {Container, Row, Col, Button, Jumbotron, UncontrolledCollapse, ButtonGroup} from 'reactstrap';
import Footer from '../Components/Footer';
import ATSpin from '../Components/ATSpin';
import ATPic from '../Styles/Images/AnthonyTesoriero.png';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiFillMail, AiFillFacebook, AiFillInstagram, AiFillFilePdf } from "react-icons/ai";
import { SiCashapp, SiSnapchat } from "react-icons/si";
import { FaMoneyBillWave, FaPaypal } from "react-icons/fa";
import { IoGlobeOutline, IoLogoVenmo, IoShareSocialSharp } from "react-icons/io5";
import { GiFist } from 'react-icons/gi';

const Splash = () => {

    const iconSize = "50px"
    const isMobile = window.innerWidth < 1000;

    // Page Switching
    const [pageState, setPageState] = useState<String>("splash");
    // var mlDis = false
    // var sjDis = false

    const toMyLinks = () => {
        // mlDis = true
        // sjDis = false
        setPageState("myLinks")
    }

    const toSocialJustice = () => {
        // mlDis = false
        // sjDis = true
        setPageState("socialJustice")
    }

    const mlLinks = {
        AntTes: ["AntTes.com", "http://anttes.com", <IoGlobeOutline size={iconSize} className="splashIconStyle"/>],
        LinkedIn: ["LinkedIn", "https://linkedin.com/in/anttesoriero", <AiFillLinkedin size={iconSize} className="splashIconStyle"/>],
        GitHub: ["GitHub", "https://github.com/anttesoriero", <AiFillGithub size={iconSize} className="splashIconStyle"/>],
        Twitter: ["Twitter", "https://twitter.com/anttesoriero", <AiFillTwitterSquare size={iconSize} className="splashIconStyle"/>],
        Snapchat: ["Snapchat", "https://www.snapchat.com/add/anttesoriero", <SiSnapchat size={iconSize} className="splashIconStyle"/>],
        Instagram: ["Instagram", "https://instagram.com/anttesoriero", <AiFillInstagram size={iconSize} className="splashIconStyle"/>],
        Facebook: ["Facebook", "https://facebook.com/anttesoriero", <AiFillFacebook size={iconSize} className="splashIconStyle"/>],
        Resume: ["Resume", "http://anttes.com/AnthonyTesorieroResume.pdf", <AiFillFilePdf size={iconSize} className="splashIconStyle"/>],
        Contact: ["Contact", "mailto:anttesoriero@gmail.com", <AiFillMail size={iconSize} className="splashIconStyle"/>]
    }

    const sjLinks = {
        BLMDoc: ["#BLM Google Doc", "https://docs.google.com/document/d/1-0KC83vYfVQ-2freQveH43PWxuab2uWDEGolzrNoIks/mobilebasic"],
        BLMCarrd: ["#BLM Carrd", "https://blacklivesmatters.carrd.co/"],
        SAHCarrd: ["Stop Asian Hate Carrd", "https://stopasianhate.carrd.co/"],
        StopAAPIHate: ["Stop AAPI Hate", "https://stopaapihate.org/"],
        ACLU: ["ACLU", "https://www.aclu.org/"],
        NAACP: ["NAACP", "https://naacp.org/"],
        NAACPLDF: ["NAACP LDF", "https://www.naacpldf.org/"],
        BLM: ["Black Lives Matter", "https://blacklivesmatter.com/"]
    }

    return (
        <div className="App">
            <Navigation pageName="Splash"/>
            {isMobile
            ?
                <Jumbotron className="LandingJumbo">
                    <Container>
                        <Row>
                            <Col><h1>Hi, I'm Anthony</h1></Col>
                            <Col><ATSpin image={ATPic} size="85px"/></Col>
                        </Row>
                        <h3>Here are some useful links</h3>
                        <br />
                    </Container>
                </Jumbotron>
            :
                <Jumbotron className="LandingJumbo">
                    <Container>
                        <Row>
                            <Col>
                                <h1>Hi, I'm Anthony</h1>
                                <h3>Here are some useful links</h3>
                            </Col>
                            <Col><ATSpin image={ATPic} size="200px"/></Col>
                        </Row>
                    </Container>
                </Jumbotron>
            }
            
            <Container>
                {/* AT Tab */}
                <h1><span style={{color:"#4281A4"}}>_</span></h1>

                {/* {pageState !== 'splash' ? 
                    <div>
                        <div className="centered">
                            <ButtonGroup className="splashButton">
                                <Button onClick={toMyLinks} disabled={mlDis}><IoShareSocialSharp size={iconSize} className="splashIconStyle"/> My Links</Button>
                                <Button onClick={toSocialJustice} disabled={sjDis}><GiFist size={iconSize} className="splashIconStyle"/> Social Justice</Button>
                            </ButtonGroup>
                        </div>
                        <br />
                    </div> : <div></div>} */}

                {(() => {
                    switch (pageState) {
                        case 'splash':
                            return (
                                <div>
                                    <h1 className="centered">Click on of the link sections</h1>
                                    <br />

                                    <div className="centered"><Button className="splashButton" onClick={toMyLinks}><IoShareSocialSharp size={iconSize} className="splashIconStyle"/> My Links</Button></div>
                                    <br />
                                    
                                    <div className="centered"><Button className="splashButton" onClick={toSocialJustice}><GiFist size={iconSize} className="splashIconStyle"/> Social Justice</Button></div>
                                    <br />
                                </div>
                            )
                        case 'myLinks':
                            return (
                                <div>
                                    <div className="centered">
                                        <ButtonGroup className="splashButton">
                                            <Button disabled onClick={toMyLinks}><IoShareSocialSharp size={iconSize} className="splashIconStyle"/> My Links</Button>
                                            <Button onClick={toSocialJustice}><GiFist size={iconSize} className="splashIconStyle"/> Social Justice</Button>
                                        </ButtonGroup>
                                    </div>
                                    <br />

                                    <h1 className="centered"><IoShareSocialSharp size={iconSize} className="splashIconStyle"/> My Links</h1>
                                    <h4 className="centered">Connect with me</h4>
                                    <hr />

                                    {
                                        Object.values(mlLinks).map((key, index) => ( 
                                            <div>
                                                <div className="centered"><Button className="splashButton" href={key[1]}>{key[2]} {key[0]}</Button></div>
                                                <br />
                                            </div>
                                        ))
                                    }

                                    <div className="centered"><Button className="splashButton" id="toggler" style={{ marginBottom: '1rem' }}><FaMoneyBillWave size={iconSize} className="splashIconStyle"/> Payment Apps</Button></div>
                                    <UncontrolledCollapse toggler="#toggler">
                                        <div className="centered"><Button className="splashButton" href="https://paypal.me/anttesoriero"><FaPaypal size={iconSize} className="splashIconStyle"/> PayPal</Button></div>
                                        <br />
                                        
                                        <div className="centered"><Button className="splashButton" href="https://cash.app/$anttesoriero"><SiCashapp size={iconSize} className="splashIconStyle"/> CashApp</Button></div>
                                        <br />
                                        
                                        <div className="centered"><Button className="splashButton" href="https://venmo.com/anttesoriero"><IoLogoVenmo size={iconSize} className="splashIconStyle"/> Venmo</Button></div>
                                        <br />
                                        
                                        <hr />
                                    </UncontrolledCollapse>
                                </div>
                            )
                        case 'socialJustice':
                            return (
                                <div>
                                    <div className="centered">
                                        <ButtonGroup className="splashButton">
                                            <Button onClick={toMyLinks}><IoShareSocialSharp size={iconSize} className="splashIconStyle"/> My Links</Button>
                                            <Button disabled onClick={toSocialJustice}><GiFist size={iconSize} className="splashIconStyle"/> Social Justice</Button>
                                        </ButtonGroup>
                                    </div>
                                    <br />

                                    <h1 className="centered"><GiFist size={iconSize} className="splashIconStyle"/> Social Justice</h1>
                                    <h4 className="centered">Do your part</h4>
                                    <hr />

                                    {
                                        Object.values(sjLinks).map((key, index) => ( 
                                            <div>
                                                <div className="centered"><Button className="splashButton" href={key[1]}>{key[0]}</Button></div>
                                                <br />
                                            </div>
                                        ))
                                    }

                                </div>
                            )
                        default:
                            return null;
                    }
                })()}

                

            </Container>
            <br />
            <Footer/>
        </div>
    );
}

export default Splash;