import React from 'react';
import Navigation from '../Components/Navigation';
import {Container} from 'reactstrap';
import Footer from '../Components/Footer';

const Contact = () => {

    return (
        <div className="App">
            <Navigation pageName="Contact"/>
            
            <Container>
                <h1 className="centered">Coming Soon</h1>

            </Container>
            <br />
            <Footer/>
        </div>
    );
}

export default Contact;