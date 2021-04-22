import React from 'react';
import { Col, Row } from 'reactstrap';
import ButtonLabels from '../ButtonLabels';

type ExpProps = {
    experience: any,
    labels: string[],
    expBody: any
}

const LPExperience = ({ experience, labels, expBody }: ExpProps) => {

    const isMobile = window.innerWidth < 1000;

    // Change xsSize for paragraph widths
    var xsSize = "8"
    if(isMobile) {
        xsSize = ""
    }

    return (
        <div>
            {isMobile? 
            <div>
                <h2>{experience.title}</h2>
                <h4 className="itemInfo">{experience.itemInfo}</h4>
                <h4 className="itemTime">{experience.date}</h4>
            </div>
            :
            <Row>
                <Col xs="8">
                    <h2>{experience.title}</h2>
                    <h4 className="itemInfo">{experience.itemInfo}</h4>
                </Col>
                <Col xs="4"><h4 className="align-right itemTime">{experience.date}</h4></Col>
            </Row>
            }

            <ButtonLabels labelList={labels} />
            <Row>
                <Col xs={xsSize}>{expBody}</Col>
            </Row>
            <br />
        </div>
    );
}

export default LPExperience;