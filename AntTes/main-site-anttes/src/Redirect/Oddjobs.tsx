import React, { useEffect } from 'react';
import Navigation from '../Components/Navigation';
import {Container} from 'reactstrap';
import Footer from '../Components/Footer';

const Oddjobs = () => {

    useEffect(() => {
        window.location.href = "http://oddjobsproject.com:5000/";
      }, []);

    return (
        <div>
            <Navigation pageName="Oddjobs"/>

            <Container>
                
                <h1 className="centered"><a href="http://oddjobsproject.com:5000/">CLICK HERE if not automatically redirected.</a></h1>

            </Container>
            <br />
            <Footer/>
        </div>
    );
}

export default Oddjobs;