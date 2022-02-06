import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';

const LandingPage = () => {

    const isMobile = window.innerWidth < 1000;

    return (
        <div className="App">
            <Navigation pageName="Home"/>
            
            <Container>
                {/* AT Tab */}
                <h1><span style={{color:"#4281A4"}}>_</span></h1>

                

                <br />
                
            </Container>

            <Footer />
        </div>
    );
}


export default withRouter(LandingPage);