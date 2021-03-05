import React from 'react';
import { Document } from 'react-pdf';
// import resume from '../Styles/Documents/Anthony';

const Resume = () => {
    return (
        <div>
            <Document file="../Styles/Documents/AnthonyTesorieroResume.pdf" />
        </div>
    );
}


export default Resume;