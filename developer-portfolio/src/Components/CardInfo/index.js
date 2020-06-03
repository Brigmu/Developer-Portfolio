import React from 'react'
import './styles.css';

const CardInfo = (props) => {
    return (
        <div className='card-info'>
            <h1>{props.title}</h1>
            {props.text}
            <a href={props.deployed}>App</a>
            <a href={props.github}>Github</a>
        </div>
    )
}

export default CardInfo;