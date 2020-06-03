import React from 'react'
import './styles.css';

const CardImg = (props) => {
    return(
        <img className='card-img' alt = '' src = {props.source} {...props} />
    )
}

export default CardImg;