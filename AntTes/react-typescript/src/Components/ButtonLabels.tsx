import React, { useContext, useState } from 'react';
import { Button } from 'reactstrap';
import { isNoSubstitutionTemplateLiteral } from 'typescript';

{/*import { MdPerson } from 'react-icons/md';
import { IconContext } from 'react-icons'; */}

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