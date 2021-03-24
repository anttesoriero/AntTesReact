import React from 'react';
import Navigation from '../Components/Navigation';
import {Container, Row, Col, Button, Jumbotron} from 'reactstrap';
import Footer from '../Components/Footer';
import ATSpin from '../Components/ATSpin';
import ATPic from '../Styles/Images/AnthonyTesoriero.png';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiFillMail, AiFillFacebook, AiFillInstagram, AiFillFilePdf } from "react-icons/ai";
import { SiCashapp, SiSnapchat } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";
import { IoGlobeOutline, IoLogoVenmo } from "react-icons/io5";

const Splash = () => {

    // const socialList = [
    //     { text: {IoGlobeOutline} + " Anttes.com", icon: {IoGlobeOutline}, web: "http://anttes.com" },
    //     { text: <AiFillLinkedin /> + " LinkedIn", icon: {IoGlobeOutline}, web: "https://linkedin.com/in/anttesoriero" }, 
    //     { text: <AiFillGithub /> + " GitHub", icon: {IoGlobeOutline}, web: "https://github.com/anttesoriero" }, 
    //     { text: <AiFillTwitterSquare /> + " Twitter", icon: {IoGlobeOutline}, web: "https://twitter.com/anttesoriero" }, 
    //     { text: <SiSnapchat /> + " Snapchat", icon: {IoGlobeOutline}, web: "https://www.snapchat.com/add/anttesoriero" }, 
    // ]

    const iconSize = "50px"

    // color: #FFFFFF;
    // width: 500px;
    // font-size: 35px;
    // /* z-index: -1; */

    // const Icons = [IoGlobeOutline]


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
                            <ATSpin image={ATPic} size="200px"/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            
            <Container>
                {/* AT Tab */}
                <h1><span style={{color:"#4281A4"}}>_</span></h1>

                <div className="centered"><Button className="splashButton" href="http://anttes.com"><IoGlobeOutline size={iconSize} className="splashIconStyle"/> AntTes.com</Button></div>
                <br />
                <div className="centered"><Button className="splashButton" href="https://linkedin.com/in/anttesoriero"><AiFillLinkedin size={iconSize} className="splashIconStyle"/> LinkedIn</Button></div>
                <br />
                <div className="centered"><Button className="splashButton" href="https://github.com/anttesoriero"><AiFillGithub size={iconSize} className="splashIconStyle"/> GitHub</Button></div>
                <br />
                <div className="centered"><Button className="splashButton" href="https://twitter.com/anttesoriero"><AiFillTwitterSquare size={iconSize} className="splashIconStyle"/> Twitter</Button></div>
                <br />
                <div className="centered"><Button className="splashButton" href="https://www.snapchat.com/add/anttesoriero"><SiSnapchat size={iconSize} className="splashIconStyle"/> Snapchat</Button></div>
                <br />
                <div className="centered"><Button className="splashButton" href="https://instagram.com/anttesoriero"><AiFillInstagram size={iconSize} className="splashIconStyle"/> Instagram</Button></div>
                <br />
                <div className="centered"><Button className="splashButton" href="https://paypal.me/anttesoriero"><FaPaypal size={iconSize} className="splashIconStyle"/> PayPal</Button></div>
                <br />
                <div className="centered"><Button className="splashButton" href="https://cash.app/$anttesoriero"><SiCashapp size={iconSize} className="splashIconStyle"/> CashApp</Button></div>
                <br />
                <div className="centered"><Button className="splashButton" href="https://venmo.com/anttesoriero"><IoLogoVenmo size={iconSize} className="splashIconStyle"/> Venmo</Button></div>
                <br />
                <div className="centered"><Button className="splashButton" href="https://facebook.com/anttesoriero"><AiFillFacebook size={iconSize} className="splashIconStyle"/> Facebook</Button></div>
                <br />
                <div className="centered"><Button className="splashButton" href="http://anttes.com/AnthonyTesorieroResume.pdf"><AiFillFilePdf size={iconSize} className="splashIconStyle"/> Resume</Button></div>
                <br />
                <div className="centered"><Button className="splashButton" href="mailto:anttesoriero@gmail.com"><AiFillMail size={iconSize} className="splashIconStyle"/> Contact</Button></div>
                <br />

                <br/>

                {/* <Button className="splashButton"Social labelList={socialList} /> */}

                <br />

                {/* {socialList.map((social: { text: any; icon: any; web: any; }) => (
                    <span><Button className="splashButton" size="lg" href={social.web}>{social.icon} {social.text}</Button>{' '}</span>
                ))} */}

            </Container>
            <br />
            <Footer/>
        </div>
    );
}

export default Splash;