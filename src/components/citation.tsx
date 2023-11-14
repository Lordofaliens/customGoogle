import React from 'react';
import {ICitationProps} from "../Interfaces/IProps";

const Citation: React.FC<ICitationProps> = (props:{text : string}) => {
    return (
        <div className="searchContainer">
            <p className="citation">{props.text}</p>
        </div>
    );
}

export default Citation;