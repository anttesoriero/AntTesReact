import React from 'react';

const ATSpin = (prop: {image: string, size: string}) => {
    return (
        <div className="spin grayScale al-right">
            <figure>
                <img className="round" src={prop.image} alt="Avatar" width={prop.size} height={prop.size}/>
            </figure>
        </div>
    );
}

export default ATSpin;