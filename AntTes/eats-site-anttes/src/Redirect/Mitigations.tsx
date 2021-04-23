import React, { useEffect } from 'react';
import Navigation from '../Components/Navigation';
import {Container} from 'reactstrap';
import Footer from '../Components/Footer';

const Mitigations = () => {

    useEffect(() => {
        window.location.href = "https://git.io/JUd9b";
      }, []);

    return (
        <div>
            <Navigation pageName="Mitigation's Repository"/>

            <Container>
                
                <h1 className="centered"><a href="https://git.io/JUd9b">CLICK HERE if not automatically redirected.</a></h1>

            </Container>
            <br />
            <Footer/>
        </div>
    );
}

export default Mitigations;