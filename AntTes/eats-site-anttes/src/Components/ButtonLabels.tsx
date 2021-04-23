import React from 'react';
import { Button } from 'reactstrap';

const ButtonLabels = (prop: {labelList: string[]}) => {
    return (
        <div>
            {prop.labelList.map(labels => (
                <span><Button outline color="primary" disabled>{labels}</Button>{' '}</span>
            ))}
        </div>
    );
}

export default ButtonLabels;