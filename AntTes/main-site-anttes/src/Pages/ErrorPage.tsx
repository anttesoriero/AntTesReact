import React from 'react';
import Navigation from '../Components/Navigation';
import {Container, Row, Col, Button, Media} from 'reactstrap';
import ErrorImage from "../Styles/Images/SurprisedOtterError.png"
import Footer from '../Components/Footer';

const ErrorPage = () => {

    function goBack() {
        window.history.go(-1);
        // javascript:history.go(-1)
    }

    return (
        <div className="App">
            <Navigation pageName="404: Page not Found"/>
            <Container>

                <br/>

                <Media className="centered">
                    <Media object src={ErrorImage} alt="ERROR IMAGE" height="300"/>
                </Media>

                <br />
                <h1 className="centered" style={{ fontWeight: 'bold' }}>ERROR 404</h1>
                <h1 className="centered" style={{ fontWeight: 'bold' }}>Looks like you're lost!</h1>

                <br/>

                <Row>
                    <Col><hr/></Col>
                    <Col className="centered"><Button onClick={goBack} color="secondary" size="lg">Go Back</Button></Col>
                    <Col className="centered"><Button href="/" color="info" size="lg">Go Home</Button></Col>
                    <Col><hr/></Col>
                </Row>

                <br/>
                <br/>

                {/* <h2 className="centered">Not what you expected?</h2>
                <br/>
                <div className="centered"><Button href="/contact" outline color="info" size="lg">Contact</Button></div> */}

                <br/>

            </Container>
            <br />
            <Footer/>
        </div>
    );
}

export default ErrorPage;