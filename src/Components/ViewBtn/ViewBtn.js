import React from 'react';
import './styles.css';

const ViewBtn = (props) => {
    return(
        <button className={props.name} data-card={props.card} onClick={props.handleCardClick}>{props.text}</button>
    )
}

export default ViewBtn;