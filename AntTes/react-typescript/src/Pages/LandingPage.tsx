import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Jumbotron, Row, Col, Alert } from 'reactstrap';
import Navigation from '../Components/Navigation';
import ATSpin from '../Components/ATSpin';
import ATPic from '../Styles/Images/AnthonyTesoriero.png'
{/*}
import AuthTabs from '../Components/AuthTabs';
import Footer from "../Components/Footer";
import CardCategories from '../Components/CardCategories'; */}

type event = {
    email: string,
    password: string
};

const LandingPage = () => {
    return (
        <div>
            <Navigation />
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
            
        </div>
    );
}


export default withRouter(LandingPage);