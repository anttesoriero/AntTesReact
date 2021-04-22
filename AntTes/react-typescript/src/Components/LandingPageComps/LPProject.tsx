import React from 'react';
import { Col, Row } from 'reactstrap';
import ButtonLabels from '../ButtonLabels';

type ProjProps = {
    project: any,
    labels: string[],
    projBody: any,
    id: string
}

const LPProject = ({ project, labels, projBody, id }: ProjProps) => {

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
                <h2>{project.title[0]} <text className="itemName">{project.title[1]}</text></h2>
                <h4 className="itemInfo"><b>{project.itemInfo[0]}</b> {project.itemInfo[1]}</h4>
                <h4 className="itemTime">{project.date}</h4>
                <h4 className="itemTime"><a style={{color: '#393c3d'}} href={project.link[1]} target="_blank" rel="noreferrer">{project.link[0]}</a></h4>
            </div>
            :
            <Row id={id}>
                <Col xs="8">
                <h2>{project.title[0]} <text className="itemName">{project.title[1]}</text></h2>
                    <h4 className="itemInfo"><b>{project.itemInfo[0]}</b> {project.itemInfo[1]}</h4>
                </Col>
                <Col xs="4">
                    <h4 className="align-right itemTime">{project.date}</h4>
                    <h4 className="align-right itemTime"><a style={{color: '#393c3d'}} href={project.link[1]} target="_blank" rel="noreferrer">{project.link[0]}</a></h4>
                </Col>
            </Row>
            }
            
            <ButtonLabels labelList={labels} />
            <Row>
                <Col xs={xsSize}>{projBody}</Col>
            </Row>
            <br />
        </div>
    );
}

export default LPProject;