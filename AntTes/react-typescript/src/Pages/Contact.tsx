import React from 'react';
import Navigation from '../Components/Navigation';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import Footer from '../Components/Footer';
import {FiSend} from 'react-icons/fi'
import{ init } from 'emailjs-com';
init('../../process.env/REACT_APP_EMAILJS_USER_ID');

const Contact = () => {

    // handleFetchData() { // access in API call
    //     fetch(`https://awesome.api.io?api-key=${process.env.REACT_APP_EMAILJS_USER_ID}`)
    //       .then((res) => res.json())
    //       .then((data) => console.log(data))
    // }

    // const onSubmit = async (data) => {
    //     try {
    //       const templateParams = {
    //         name: data.name,
    //         email: data.email,
    //         subject: data.subject,
    //         message: data.message
    //       };
    //       await emailjs.send(
    //         process.env.REACT_APP_SERVICE_ID,
    //         process.env.REACT_APP_TEMPLATE_ID,
    //         templateParams,
    //         process.env.REACT_APP_USER_ID
    //       );
    //       reset();
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   };

    return (
        <div>
            <Navigation pageName="Contact"/>
            
            <Container>
                <h1 className="centered">COMING SOON</h1>
                <h3 className="centered">Contact form using EmailJS API</h3>

                <br />

                <Form>
                    <Row>
                        {/* Name */}
                        <Col>
                            <FormGroup>
                                <Label for="name">Name*</Label>
                                <Input type="email" name="name" id="name" placeholder="Full Name" required />
                            </FormGroup>
                        </Col>

                        {/* Email */}
                        <Col>
                            <FormGroup>
                                <Label for="email">Email*</Label>
                                <Input type="email" name="email" id="email" placeholder="email@email.com" required />
                            </FormGroup>
                        </Col>
                    </Row>

                    <br />
                    
                    <Row>
                        {/* Category */}
                        <Col>
                            <FormGroup>
                                <Label for="category">Category*</Label>
                                <Input type="select" name="category" id="category" required>
                                    <option disabled selected>Please Selected a Category</option>
                                    <option>1. General</option>
                                    <option>2. Website Bug/Feedback</option>
                                    <option>3. Business Inquiry</option>
                                    <option>4. Other</option>
                                </Input>
                            </FormGroup>
                        </Col>

                        {/* Subject */}
                        <Col>
                            <FormGroup>
                                <Label for="subject">Subject*</Label>
                                <Input type="text" name="subject" id="subject" placeholder="Message Subject" required />
                            </FormGroup>
                        </Col>
                    </Row>

                    <br />

                    <FormGroup>
                        <Label for="message">Message*</Label>
                        <Input type="textarea" name="message" id="submessageject" placeholder="Message" required />
                    </FormGroup>

                    <br />

                    {/* Submit Button */}
                    <span className="centered"><Button type="submit" outline color="primary" size="lg"><FiSend /> Submit</Button></span>
                </Form>
            </Container>

            <br />

            <Footer/>
        </div>
    );
}

export default Contact;

function handleFetchData() {
    throw new Error('Function not implemented.');
}
