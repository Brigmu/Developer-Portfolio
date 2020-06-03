import React from 'react';
import './styles.css';

export const Wrapper = (props) => {
    return (
        <div className = {`wrapper ${props.name}`} {...props} />
    )
}

export default Wrapper;