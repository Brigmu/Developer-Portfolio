import React from 'react';
import './styles.css';

const Title = (props) => {
    return (
    <div className = 'title'>
        <h1>{props.title}</h1>
        <hr></hr>
    </div>
    )
}

export default Title;