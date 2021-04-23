import React from 'react';
import { Col, Row } from 'reactstrap';

type EdProps = {
    organization: any,
    orgCourse: (string | JSX.Element)[],
    orgActivities: string[][]
}

const LPEducation = ({ organization, orgCourse, orgActivities }: EdProps) => {

    const isMobile = window.innerWidth < 1000;

    return (
        <div>
            {/* Header */}
            {isMobile? 
                <div>
                    <h2>{organization.title[0]} <text className="itemName">{organization.title[1]}</text></h2>
                    <h4 className="itemInfo">{organization.itemInfo[0]}</h4>
                    <h4 className="itemInfo">{organization.itemInfo[1]}</h4>
                    <h4 className="itemTime">{organization.date}</h4>
                </div>
                :
                <Row>
                    <Col xs="8">
                        <h2>{organization.title[0]} <text className="itemName">{organization.title[1]}</text></h2>
                        <h4 className="itemInfo">{organization.itemInfo[0]}</h4>
                        <h4 className="itemInfo">{organization.itemInfo[1]}</h4>

                    </Col>
                    <Col xs="4"><h4 className="align-right itemTime">{organization.date}</h4></Col>
                </Row>
            }
            <br />

            {/* Body */}
            {isMobile?
                <div>
                    <h4 className="itemList">Relevant Coursework</h4>
                    <ul className="course">
                        {orgCourse.map(course => (
                            <li>{course}</li>
                        ))}
                    </ul>
                    <br />
                    <h4 className="itemList">Activities</h4>
                        <ul className="course">
                            {orgActivities.map(activity => (
                                <li><a href={activity[0]} style={{color: '#393c3d'}} target="_blank" rel="noreferrer">{activity[1]}</a></li>
                            ))}
                    </ul>
                </div>
                :
                <Row>
                    <Col xs="6">
                        <h4 className="itemList">Relevant Coursework</h4>
                        <ul className="course">
                            {orgCourse.map(course => (
                                <li>{course}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col xs="6">
                        <h4 className="itemList">Activities</h4>
                        <ul className="course">
                            {orgActivities.map(activity => (
                                <li><a href={activity[0]} style={{color: '#393c3d'}} target="_blank" rel="noreferrer">{activity[1]}</a></li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            }
            <br />
        </div>
    );
}

export default LPEducation;