import React from 'react';
import Navigation from '../Components/Navigation';
import {Container} from 'reactstrap';
import Footer from '../Components/Footer';

const Contact = () => {

    return (
        <div>
            <Navigation pageName="Contact"/>
            
            <Container>
                <h1 className="centered">COMING SOON</h1>
                <h3 className="centered">Contact form using EmailJS API</h3>
            </Container>

            <br />

            <Footer/>
        </div>
    );
}

export default Contact;