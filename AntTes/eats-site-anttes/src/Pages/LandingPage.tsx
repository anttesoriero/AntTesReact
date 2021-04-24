import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import SideBar from '../Components/SideBar';

const LandingPage = () => {

    const isMobile = window.innerWidth < 1000;

    return (
        <div className="App">
            <Navigation pageName="Home"/>
            {isMobile
            ?
            <Jumbotron className="LandingJumbo LJImgNav">
                <Container>
                    <Row>
                        <Col><h1>Eats</h1></Col>
                    </Row>
                    <h3>"The Secret Ingredient is Nothing"</h3>
                    <br />
                </Container>
            </Jumbotron>
            :
            <Jumbotron className="LandingJumbo LJImgFull">
                <Container>
                    <Row>
                        <Col>
                            <h1>Eats</h1>
                            <h3>"The Secret Ingredient is Nothing"</h3>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            }

            <Container>
                {/* AT Tab */}
                <h1><span style={{color:"#b33500"}}>_</span></h1>
            <Row>
                <Col xs="10">
                    {/* Description */}
                    <h2>
                        Coming Soon 
                    </h2>

                    <br />
                    
                    
                    
                    <br />
                    
                </Col>
                <Col xs="2">
                    <SideBar />
                </Col>
            </Row>
            </Container>
            <Footer />
        </div>
    );
}


export default withRouter(LandingPage);