import React from 'react';
import { Button } from 'reactstrap';

const ButtonSocial = (prop: {labelList: any}) => {
    return (
        <div>
            {prop.labelList.map((labels: { text: any; icon: any; web: any; }) => (
                <span><Button size="lg" href={labels.web}>{labels.icon} {labels.text}</Button>{' '}</span>
            ))}
        </div>
    );
}

export default ButtonSocial;