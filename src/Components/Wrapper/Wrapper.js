import React from 'react';
import './styles.css';

export const Wrapper = (props) => {
    return (
        <div className = {`wrapper ${props.name}`}>
            <span id={props.id} className='offset'></span>
            {props.children}
        </div>
    )
}

export default Wrapper;