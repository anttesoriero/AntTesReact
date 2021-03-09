import React from 'react';

const ATSpin = (prop: {image: string}) => {
    return (
        <div className="spin grayScale al-right">
            <figure>
                <img className="round" src={prop.image} alt="Avatar" width="200px" />
            </figure>
        </div>
    );
}

export default ATSpin;