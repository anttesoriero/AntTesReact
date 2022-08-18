import React from 'react';
import Navigation from '../Components/Navigation';
import { Container, Button } from 'reactstrap';
import Footer from '../Components/Footer';
import { AiFillLinkedin, AiFillMail, AiFillFilePdf } from "react-icons/ai";
import { IoGlobeOutline } from "react-icons/io5";
import { RiLinksFill } from "react-icons/ri";
import ATHeader from '../Components/ATHeader';
import Pic from '../Styles/Images/AnthonyTesorieroWideAgain.png';
import QR from '../Styles/Images/AntTes-Card.png';

const Card = () => {

    const iconSize = "50px"
    // const isMobile = window.innerWidth < 1000;
    const isMobile = window.innerWidth < 500;

    const mlLinks = {
        AntTes: ["AntTes.com", "http://anttes.com", <IoGlobeOutline size={iconSize} className="splashIconStyle" />],
        LinkedIn: ["LinkedIn", "https://linkedin.com/in/anttesoriero", <AiFillLinkedin size={iconSize} className="splashIconStyle" />],
        Resume: ["Resume", "http://anttes.com/AnthonyTesorieroResume.pdf", <AiFillFilePdf size={iconSize} className="splashIconStyle" />],
        Contact: ["Email", "mailto:anttesoriero@gmail.com", <AiFillMail size={iconSize} className="splashIconStyle" />],
        More: ["More Links", "https://anttes.com/splash", <RiLinksFill size={iconSize} className="splashIconStyle" />]
    }

    return (
        <div className="App">
            <Navigation pageName="Business Card" />

            {isMobile
                ?
                <div>
                    <div className="centered" >
                        <img className="CardImage" src={Pic} alt="Anthony" />
                    </div>
                    <Container>
                        <h1><span style={{ color: "#4281A4" }}>_</span></h1>

                        <h3>Hi, I'm Anthony</h3>
                        <hr />
                    </Container>
                </div>
                :
                <div>
                    <ATHeader tagLine='Nice to meet you!' />
                    <Container><h1><span style={{ color: "#4281A4" }}>_</span></h1></Container>
                </div>
            }

            <Container>
                {/* AT Tab */}

                <h4>About</h4>
                <p>
                    I'm a recent CS major, AI concentration, and Math minor from Rowan University, currently looking for an entry-level software engineering position.
                    I have ~6+ years of experience, starting with Java and Python, as well as experience with HTML, CSS, React, and more.
                </p>

                <div className="centered">
                    <img className="QRImage" src={QR} alt="QR Code to this page" />
                </div>

                <br />

                <div>
                    <h3 className="centered">Connect with me</h3>
                    <hr />

                    {
                        Object.values(mlLinks).map((key, index) => (
                            <div>
                                <div className="centered"><Button className="splashButton" href={key[1]}>{key[2]} {key[0]}</Button></div>
                                <br />
                            </div>
                        ))
                    }

                </div>

            </Container>
            <br />
            <Footer />
        </div>
    );
}

export default Card;