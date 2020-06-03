import React from 'react';
import './styles.css';

const Navlink = (props) => {
    return (
        <div className = 'navlink'>
            <a href = {props.link}>{props.title}</a>
        </div>
    )
}

export default Navlink;