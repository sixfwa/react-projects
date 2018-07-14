import React from 'react';
import './UserOutput.css';
const userOutput = (props) => {

    return (
        <div className="UserOutput">
            <p>My username is: {props.userName}</p>
            <p> This is a cool paragraph</p>
        </div>
    );
};

export default userOutput;