import React, {useState, useEffect} from 'react';
import Navigation from '../Components/Navigation';
import {Container, Row, Col, Button, Media} from 'reactstrap';
import ErrorImage from "../Styles/Images/SurprisedOtterError.png"
import Footer from '../Components/Footer';

const CovidVaccine = () => {
    var yes = false
    var no = 0

    let oaq = "Are you a front-line health care worker or a person living in a long-term-care facility?"
    var group = "test"

    return (
        <div>
            <Navigation pageName="COVID-19 Vaccination Guide"/>
            <Container>

                <br/>

                <h1 className="centered">COVID-19 Vaccination Guide</h1>
                <h3 className="centered">Help determine what COVID-19 phase you are in</h3>
                <br />
                {yes ? <h3>{group}</h3> : <div></div>}
                {(!yes && no === 0) ? <h3>{oaq}</h3> : <div></div>}

                
                
                {/* Buttons */}
                <Row>
                    <Col className="centered">
                        <Button size="lg" onClick={() => yes = true}>Yes</Button>{' '}
                        <div className="divider"></div>
                        <Button color="secondary" size="lg" onClick={() => no += 1}>No</Button>{' '}
                    </Col>
                </Row>

                <br /><hr />
                <h2>About these Guidlines</h2>
                <h4>
                    I am not a doctor, and am in no way giving medical advice. These groupings are based on CDC vaccination phases. 
                    Please visit the CDC website at <a href="https://cdc.gov">CDC.gov</a> for more info.
                </h4>
                <br/>

            </Container>
            <br />
            <Footer/>
        </div>
    );
}

export default CovidVaccine;