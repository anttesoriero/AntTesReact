import React, { useContext, useState } from 'react';
import { Button } from 'reactstrap';
import { isNoSubstitutionTemplateLiteral } from 'typescript';

{/*import { MdPerson } from 'react-icons/md';
import { IconContext } from 'react-icons'; */}

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