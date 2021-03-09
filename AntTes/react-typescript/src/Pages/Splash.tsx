import React from 'react';
import Navigation from '../Components/Navigation';
import {Container, Row, Col, Button, Media, Jumbotron, ButtonGroup} from 'reactstrap';
import Footer from '../Components/Footer';
import ATSpin from '../Components/ATSpin';
import ATPic from '../Styles/Images/AnthonyTesoriero.png';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiFillMail, AiFillFacebook, AiFillInstagram, AiFillFilePdf } from "react-icons/ai";
import { SiCashapp, SiSnapchat } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";
import { IoGlobeOutline, IoLogoVenmo } from "react-icons/io5";
import AntTesIcon from '../Styles/Images/AntTesIcon.png';

const Splash = () => {
    return (
        <div>
            <Navigation pageName="Splash"/>
            <Jumbotron className="LandingJumbo">
                <Container>
                    <Row>
                        <Col>
                            <h1>Hi, I'm Anthony</h1>
                            <h3>Here are some Useful Links</h3>
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

                <div className="centered"><Button size="lg" href="http://anttes.com"><IoGlobeOutline /> AntTes.com</Button></div>
                <div className="centered"><Button size="lg" href="https://linkedin.com/in/anttesoriero"><AiFillLinkedin /> LinkedIn</Button></div>
                <div className="centered"><Button size="lg" href="https://github.com/anttesoriero"><AiFillGithub /> GitHub</Button></div>
                <div className="centered"><Button size="lg" href="https://twitter.com/anttesoriero"><AiFillTwitterSquare /> Twitter</Button></div>
                <div className="centered"><Button size="lg" href="https://www.snapchat.com/add/anttesoriero"><SiSnapchat /> Snapchat</Button></div>
                <div className="centered"><Button size="lg" href="https://instagramc.com/anttesoriero"><AiFillInstagram /> Instagram</Button></div>
                <div className="centered"><Button size="lg" href="https://paypal.me/anttesoriero"><FaPaypal /> PayPal</Button></div>
                <div className="centered"><Button size="lg" href="https://cash.app/$anttesoriero"><SiCashapp /> CashApp</Button></div>
                <div className="centered"><Button size="lg" href="https://venmo.com/anttesoriero"><IoLogoVenmo /> Venmo</Button></div>
                <div className="centered"><Button size="lg" href="https://facebook.com/anttesoriero"><AiFillFacebook /> Facebook</Button></div>
                <div className="centered"><Button size="lg" href="http://anttes.com/AnthonyTesorieroResume.pdf"><AiFillFilePdf /> Resume</Button></div>
                <div className="centered"><Button size="lg" href="mailto:anttesoriero@gmail.com"><AiFillMail /> Contact</Button></div>
                <br/>

            </Container>
            <br />
            <Footer/>
        </div>
    );
}

export default Splash;