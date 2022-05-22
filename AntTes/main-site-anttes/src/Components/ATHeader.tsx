import React from 'react'
import { Col, Container, Jumbotron, Row } from 'reactstrap';
import ATSpin from './ATSpin';
import ATPic from '../Styles/Images/AnthonyTesoriero.png';

const ATHeader = (prop: { tagLine: string }) => {

    const isMobile = window.innerWidth < 1000;

    return (
        <div>
            {isMobile
                ?
                <Jumbotron className="LandingJumbo">
                    <Container>
                        <Row>
                            <Col><h1>Hi, I'm Anthony</h1></Col>
                            <Col><ATSpin image={ATPic} size="85px" /></Col>
                        </Row>
                        <h3>{prop.tagLine}</h3>
                        <br />
                    </Container>
                </Jumbotron>
                :
                <Jumbotron className="LandingJumbo">
                    <Container>
                        <Row>
                            <Col>
                                <h1>Hi, I'm Anthony</h1>
                                <h3>{prop.tagLine}</h3>
                            </Col>
                            <Col><ATSpin image={ATPic} size="200px" /></Col>
                        </Row>
                    </Container>
                </Jumbotron>
            }
        </div>
    )
}

export default ATHeader